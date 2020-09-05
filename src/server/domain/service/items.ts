import { getBrowser, scrape } from '../../repositories/scraper'
import { Browser, Page } from 'puppeteer'
import * as R from 'ramda'
import {
  getItemsRepository,
  getWishListsRepository
} from '../../repositories/dynamo_db'

const getLinkListFromPage = async (page: Page): Promise<string[]> => {
  const links = await page
    .$$eval('a', elements => {
      return elements
        .map(element => element.href)
        .filter((href: string | null) => Boolean(href))
        .filter((href: string) => href.includes('?coliid'))
        .filter((href: string) => href.includes('&ref'))
        .map((href: string) => href.split('?')[0])
    })
    .finally(() => page.close())

  // tslint:disable-next-line: no-any
  return (links as any) as Promise<string[]>
}

export const getItem = async (
  browser: Browser,
  url: string
): Promise<string[]> => {
  console.log('start scrapeUrl:' + url)
  const scrapeUrl = R.curry(scrape)(browser)
  return scrapeUrl(url).then(page => getLinkListFromPage(page))
}

export const getItems = async (urls: string[]) => {
  const browser = await getBrowser()
  console.log('browser:')
  return Promise.all(urls.map(url => getItem(browser, url))).then(list =>
    list.reduce((previousValue, currentValue) =>
      R.concat(previousValue, currentValue)
    )
  )
}

export const updateItems = async (urls: string[]) => {
  const repos = getItemsRepository()
  await repos.update(urls)
}

export const getItemsFromCache = async () => {
  const repos = getItemsRepository()
  return repos.getItems()
}
