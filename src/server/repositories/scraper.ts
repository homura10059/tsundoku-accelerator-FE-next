import puppeteer, { Browser, Page } from 'puppeteer'
import chromium from 'chrome-aws-lambda'
const scrollPageToBottom = require('puppeteer-autoscroll-down')

export const getBrowser = (() => {
  let browser: Promise<Browser> | null = null
  return async () => {
    const path = process.env.LOCAL
      ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      : await chromium.executablePath

    if (!browser) {
      console.log(`executablePath: ${path}`)
      browser = puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: path
      })
    }
    return browser
  }
})()

export const scrape = async (browser: Browser, url: string) => {
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: ['networkidle0'], timeout: 300000 })
  // error になるけど気にしない
  await scrollPageToBottom(page)
  return page
}
