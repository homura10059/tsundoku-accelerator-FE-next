import { UUID, UnixTimeInSec, WishListUrl, ItemUrl, Scraped } from './global'

export type WishList = {
  id: UUID
  url: WishListUrl
  scrapedAt: UnixTimeInSec
  items: ItemUrl[]
}

export type ScrapedWishList = Omit<WishList, 'id'>
