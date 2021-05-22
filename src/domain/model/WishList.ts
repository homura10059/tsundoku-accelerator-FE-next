import { ItemUrl, UnixTimeInSec, WishListUrl } from './global'

export type { WishList } from '@prisma/client'

export type ScrapedWishList = {
  url: WishListUrl
  title: string
  scrapedAt: UnixTimeInSec
  items: ItemUrl[]
}
