import { Browser, Page } from 'puppeteer'
import url from 'url'

import { notifyError } from '@/domain/repositories/discord'
import { unique } from '@/functions/arrays'
import { getUnixTimeNow } from '@/functions/Dates'

import { WISH_LIST_NAME } from '../model/CssSelector'
import { ScrapedWishList } from '../model/WishList'
import { getBrowser, getHrefList, getText, scrape } from './scraper'

const getScrapedWishListFromPage = async (
  page: Page
): Promise<ScrapedWishList> => {
  const title = await getText(page, WISH_LIST_NAME)
  const links = await getHrefList(page, 'a')

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
          `${protocol}//${host}${href.split('?')[0]}`.replace('/-/en/dp', '/dp')
        )
    )
  }
}

const scrapedWishList = async (
  browser: Browser,
  url: string
): Promise<ScrapedWishList> => {
  console.log('start scrapeUrl:' + url)
  try {
    const page = await scrape(browser, url)
    const wishList = await getScrapedWishListFromPage(page)
    await page.close()
    console.log('end scrapeUrl:' + url)
    return wishList
  } catch (e) {
    await notifyError(e)
  }
}

export const getScrapedWishLists = async (urls: string[]) => {
  const browser = await getBrowser()
  console.log('browser:')
  return Promise.all(urls.map(url => scrapedWishList(browser, url)))
}

export const getScrapedWishList = async (url: string) => {
  const browser = await getBrowser()
  return scrapedWishList(browser, url)
}
