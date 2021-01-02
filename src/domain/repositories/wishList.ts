import { getBrowser, scrape } from '../repositories/scraper'
import { Browser, Page } from 'puppeteer'
import * as R from 'ramda'
import { ScrapedWishList } from '../model/WishList'
import { getUnixTimeNow } from '../../lib/Dates'
import { unique } from '../../lib/arrays'
import url from 'url'

const getScrapedWishListFromPage = async (
  page: Page
): Promise<ScrapedWishList> => {
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
    scrapedAt: getUnixTimeNow(),
    items: unique(
      links
        .filter((href: string) => href.includes('?coliid'))
        .filter((href: string) => href.includes('&ref'))
        .map((href: string) => `${protocol}//${host}${href.split('?')[0]}`)
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
