import { getBrowser, scrape } from '../../repositories/scraper'
import { Browser, Page } from 'puppeteer'
import { ItemHistory } from '../model/ItemHistory'
import * as R from 'ramda'
import { POINTS, POINTS_RATE, PRICE, SAVING, TITLE } from '../model/CssSelector'
import { getUnixTimeInSec } from '../../repositories/dates'
import { concurrentPromise } from '../../repositories/promises'
import { getItemHistoryRepository } from '../../repositories/dynamo_db'

const priceRegex = /\d{1,3}(,\d{3})*/
const percentageRegex = /\d{1,3}/

const getText = async (page: Page, selector: string): Promise<string> => {
  return page
    .$(selector)
    .then(element => element.getProperty('textContent'))
    .then(some => some.jsonValue())
    .then(str => (typeof str === 'string' ? str.trim() : ''))
    .catch(_ => '')
}

const getTitle = async (page: Page): Promise<Pick<ItemHistory, 'title'>> => {
  return getText(page, TITLE).then(title => ({ title }))
}

const getPrice = async (page: Page): Promise<Pick<ItemHistory, 'price'>> => {
  return getText(page, PRICE).then((priceStr: string) => {
    const price = priceRegex.exec(priceStr)
    return {
      price:
        price && price.length > 0 ? price[0].trim().replace(',', '') : undefined
    }
  })
}

const getSaving = async (
  page: Page
): Promise<Pick<ItemHistory, 'discount' | 'discountRate'>> => {
  return getText(page, SAVING).then((saving: string) => {
    const discount = priceRegex.exec(saving)
    const discountPer = percentageRegex.exec(saving.split('(')[1])
    return {
      discount:
        discount && discount.length > 0
          ? discount[0].trim().replace(',', '')
          : undefined,
      discountRate:
        discountPer && discountPer.length > 0 ? discountPer[0] : undefined
    }
  })
}

const getPoint = async (page: Page): Promise<Pick<ItemHistory, 'points'>> => {
  return getText(page, POINTS).then((pointsStr: string) => {
    const points = priceRegex.exec(pointsStr)
    return {
      points:
        points && points.length > 0
          ? points[0].trim().replace(',', '')
          : undefined
    }
  })
}

const getPointsPer = async (
  page: Page
): Promise<Pick<ItemHistory, 'pointsRate'>> => {
  return getText(page, POINTS_RATE)
    .then((pointsPerStr: string) => {
      const surrounded = pointsPerStr.split('(')
      const pointsPer =
        surrounded && surrounded.length > 1
          ? surrounded[1].split(')')
          : undefined
      return pointsPer && pointsPer.length > 0 ? pointsPer[0] : ''
    })
    .then((pointsPerStr: string) => {
      const pointsPer = percentageRegex.exec(pointsPerStr)
      return {
        pointsRate: pointsPer && pointsPer.length > 0 ? pointsPer[0] : undefined
      }
    })
}

export const getItemHistory = async (
  browser: Browser,
  url: string
): Promise<ItemHistory | undefined> => {
  const page = await scrape(browser, url)
  const initialState: Pick<ItemHistory, 'url' | 'scrapedAt'> = {
    url,
    scrapedAt: getUnixTimeInSec(new Date(Date.now()))
  }
  console.time('item.url:' + url)
  // await randomSleep()
  return Promise.all([
    getTitle(page),
    getPrice(page),
    getSaving(page),
    getPoint(page),
    getPointsPer(page)
  ])
    .then(values => {
      console.timeEnd('item.url:' + url)
      const history = values.reduce((prev, current) => {
        return { ...prev, ...current }
      }, initialState)
      console.timeEnd('history:' + JSON.stringify(history))
      return history
    })
    .catch(err => {
      console.timeEnd('item.url:' + url)
      console.error(err)
      return undefined
    })
    .finally(() => page.close())
}

export const getItemHistories = async (urls: string[]) => {
  const browser = await getBrowser()
  console.log('browser:')
  const get: (url: string) => Promise<ItemHistory | undefined> = R.curry(
    getItemHistory
  )(browser)

  const methods = urls.map(url => get.bind(null, url))
  return concurrentPromise<ItemHistory | undefined>(methods, 3)
}

export const updateItemHistories = async (histories: ItemHistory[]) => {
  const repos = getItemHistoryRepository()
  await repos.update(histories)
}
