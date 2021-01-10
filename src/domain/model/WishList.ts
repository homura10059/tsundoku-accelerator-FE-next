import { UUID, UnixTimeInSec, WishListUrl, ItemUrl } from './global'
import { WishList } from '../../lib/prisma'

export type ScrapedWishList = {
  url: WishListUrl
  scrapedAt: UnixTimeInSec
  items: ItemUrl[]
}
