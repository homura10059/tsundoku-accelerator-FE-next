import { getBrowser, scrape } from '../repositories/scraper'
import { Browser, Page } from 'puppeteer'
import * as R from 'ramda'

const getLinkListFromPage = async (page: Page): Promise<string[]> => {
  const links = await page
    .$$eval('a', (elements) => {
      return elements
        .map((element) => element.getAttribute('href'))
        .filter((href: string | null): href is string => href !== null)
    })
    .finally(() => page.close())

  return links
    .filter((href: string) => href.includes('?coliid'))
    .filter((href: string) => href.includes('&ref'))
    .map((href: string) => href.split('?')[0])
}

export const getItem = async (
  browser: Browser,
  url: string
): Promise<string[]> => {
  console.log('start scrapeUrl:' + url)
  const scrapeUrl = R.curry(scrape)(browser)
  return scrapeUrl(url).then((page) => getLinkListFromPage(page))
}

export const getItems = async (urls: string[]) => {
  const browser = await getBrowser()
  console.log('browser:')
  return Promise.all(urls.map((url) => getItem(browser, url))).then((list) =>
    list.reduce((previousValue, currentValue) =>
      R.concat(previousValue, currentValue)
    )
  )
}
