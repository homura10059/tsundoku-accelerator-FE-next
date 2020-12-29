import {
  Discount,
  DiscountRate,
  ItemUrl,
  Points,
  PointsRate,
  Price,
  Title,
  UnixTimeInSec,
} from './global'

export type Item = {
  url: ItemUrl
  title: Title
  scrapedAt: UnixTimeInSec
  price?: Price
  discount?: Discount
  discountRate?: DiscountRate
  points?: Points
  pointsRate?: PointsRate
}
