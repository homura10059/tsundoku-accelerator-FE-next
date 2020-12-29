// string
export type UUID = string
export type WishListUrl = string
export type ItemUrl = string
export type Title = string
export type Price = string
export type Discount = string
export type DiscountRate = string
export type Points = string
export type PointsRate = string

// number
export type UnixTimeInSec = number

// generics
export type Scraped<T> = Omit<T, 'id'>
