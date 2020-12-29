import { getBrowser, scrape } from '../repositories/scraper'
import { Browser, Page } from 'puppeteer'
import * as R from 'ramda'
import { ScrapedWishList } from '../model/WishList'
import { getUnixTime } from '../../lib/Dates'

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
  console.log(links)

  return {
    url: page.url(),
    scrapedAt: getUnixTime(),
    items: links
      .filter((href: string) => href.includes('?coliid'))
      .filter((href: string) => href.includes('&ref'))
      .map((href: string) => href.split('?')[0]),
  }
}

export const getScrapedWishList = async (
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
  return Promise.all(urls.map((url) => getScrapedWishList(browser, url)))
}
