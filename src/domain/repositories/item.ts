import { getBrowser, scrape } from './scraper'
import { Browser, Page } from 'puppeteer'
import { Item } from '../model/Item'
import * as R from 'ramda'
import { POINTS, POINTS_RATE, PRICE, SAVING, TITLE } from '../model/CssSelector'
import { getUnixTimeInSec } from '../../lib/Dates'
import { concurrentPromise } from '../../lib/promises'

const priceRegex = /\d{1,3}(,\d{3})*/
const percentageRegex = /\d{1,3}/

const getText = async (page: Page, selector: string): Promise<string> => {
  return page
    .$(selector)
    .then((element) => element.getProperty('textContent'))
    .then((some) => some.jsonValue())
    .then((str) => (typeof str === 'string' ? str.trim() : ''))
    .catch((_) => '')
}

const getTitle = async (page: Page): Promise<Pick<Item, 'title'>> => {
  return getText(page, TITLE).then((title) => ({ title }))
}

const getPrice = async (page: Page): Promise<Pick<Item, 'price'>> => {
  return getText(page, PRICE).then((priceStr: string) => {
    const price = priceRegex.exec(priceStr)
    return {
      price:
        price && price.length > 0
          ? parseInt(price[0].trim().replace(',', ''), 10)
          : undefined,
    }
  })
}

const getSaving = async (
  page: Page
): Promise<Pick<Item, 'discount' | 'discountRate'>> => {
  return getText(page, SAVING).then((saving: string) => {
    const discount = priceRegex.exec(saving)
    const discountPer = percentageRegex.exec(saving.split('(')[1])
    return {
      discount:
        discount && discount.length > 0
          ? parseInt(discount[0].trim().replace(',', ''), 10)
          : undefined,
      discountRate:
        discountPer && discountPer.length > 0 ? parseInt(discountPer[0], 10) : undefined,
    }
  })
}

const getPoint = async (page: Page): Promise<Pick<Item, 'points'>> => {
  return getText(page, POINTS).then((pointsStr: string) => {
    const points = priceRegex.exec(pointsStr)
    return {
      points:
        points && points.length > 0
          ? parseInt(points[0].trim().replace(',', ''), 10)
          : undefined,
    }
  })
}

const getPointsPer = async (page: Page): Promise<Pick<Item, 'pointsRate'>> => {
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
        pointsRate:
          pointsPer && pointsPer.length > 0 ? parseInt(pointsPer[0], 10) : undefined,
      }
    })
}

export const scrapeItemWishBrowser = async (
  browser: Browser,
  url: string
): Promise<Item | undefined> => {
  const page = await scrape(browser, url)
  const initialState: Pick<Item, 'url' | 'scrapedAt'> = {
    url,
    scrapedAt: getUnixTimeInSec(new Date(Date.now())),
  }
  console.time('item.url:' + url)
  // await randomSleep()
  return Promise.all([
    getTitle(page),
    getPrice(page),
    getSaving(page),
    getPoint(page),
    getPointsPer(page),
  ])
    .then((values) => {
      console.timeEnd('item.url:' + url)
      const history = values.reduce((prev, current) => {
        return { ...prev, ...current }
      }, initialState)
      console.log('history:' + JSON.stringify(history))
      return history
    })
    .catch((err) => {
      console.timeEnd('item.url:' + url)
      console.error(err)
      return undefined
    })
    .finally(() => page.close())
}

export const scrapeItem = async (url: string) => {
  const browser = await getBrowser()
  return scrapeItemWishBrowser(browser, url)
}

export const scrapeItems = async (urls: string[]) => {
  const browser = await getBrowser()
  console.log('browser:')
  const get: (url: string) => Promise<Item | undefined> = R.curry(
    scrapeItemWishBrowser
  )(browser)

  const methods = urls.map((url) => get.bind(null, url))
  return concurrentPromise<Item | undefined>(methods, 3)
}
