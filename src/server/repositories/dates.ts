import { UnixTimeInSec } from '../domain/model/Dates'

export const getUnixTimeInSec = (date: Date): UnixTimeInSec =>
  Math.floor(date.getTime() / 1000)
