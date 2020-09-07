import { UnixTimeInSec } from './Dates'

export type ItemUrl = string
export type Title = string
export type Price = string
export type Discount = string
export type DiscountRate = string
export type Points = string
export type PointsRate = string

export type ItemHistory = {
  url: ItemUrl
  title: Title
  scrapedAt: UnixTimeInSec
  price?: Price
  discount?: Discount
  discountRate?: DiscountRate
  points?: Points
  pointsRate?: PointsRate
}
