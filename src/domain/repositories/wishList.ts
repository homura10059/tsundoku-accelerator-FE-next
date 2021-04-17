import { getBrowser, scrape } from './scraper'
import { Browser, Page } from 'puppeteer'
import * as R from 'ramda'
import { ScrapedWishList } from '../model/WishList'
import { getUnixTimeNow } from '@/functions/Dates'
import { unique } from '@/functions/arrays'
import url from 'url'
import { WISH_LIST_NAME } from '../model/CssSelector'

const getTitle = async (page: Page): Promise<string> => {
  return page
    .$(WISH_LIST_NAME)
    .then((element) => element.getProperty('textContent'))
    .then((some) => some.jsonValue())
    .then((str) => (typeof str === 'string' ? str.trim() : ''))
    .catch((_) => '')
}

const getScrapedWishListFromPage = async (
  page: Page
): Promise<ScrapedWishList> => {
  const title = await getTitle(page)
  const links = await page
    .$$eval('a', (elements) => {
      return elements
        .map((element) => element.getAttribute('href'))
        .filter((href: string | null): href is string => href !== null)
    })
    .finally(() => page.close())

  const parsedUrl = url.parse(page.url())
  const protocol = parsedUrl.protocol || 'https:'
  const host = parsedUrl.host || 'www.amazon.co.jp'

  return {
    url: page.url(),
    title: title,
    scrapedAt: getUnixTimeNow(),
    items: unique(
      links
        .filter((href: string) => href.includes('?coliid'))
        .filter((href: string) => href.includes('&ref'))
        .map((href: string) =>
          `${protocol}//${host}${href.split('?')[0]}`.replace(
            '/-/en/dp',
            '/dp'
          )
        )
    ),
  }
}

const scrapedWishList = async (
  browser: Browser,
  url: string
): Promise<ScrapedWishList> => {
  console.log('start scrapeUrl:' + url)
  const scrapeUrl = R.curry(scrape)(browser)
  return scrapeUrl(url).then((page) => getScrapedWishListFromPage(page))
}

export const getScrapedWishLists = async (urls: string[]) => {
  const browser = await getBrowser()
  console.log('browser:')
  return Promise.all(urls.map((url) => scrapedWishList(browser, url)))
}

export const getScrapedWishList = async (url: string) => {
  const browser = await getBrowser()
  return scrapedWishList(browser, url)
}
