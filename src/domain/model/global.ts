// string
export type UUID = string
export type WishListUrl = string
export type ItemUrl = string
export type Title = string


// number
export type UnixTimeInSec = number
export type Price = number
export type Discount = number
export type DiscountRate = number
export type Points = number
export type PointsRate = number

// generics
export type Scraped<T> = Omit<T, 'id'>
