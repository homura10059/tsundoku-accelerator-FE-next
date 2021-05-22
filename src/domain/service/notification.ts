import { IncomingWebhook, Item, User, WishList } from '@prisma/client'

import { notify } from '../repositories/discord'
import { getAll } from './user'
import { getWishListDetails } from './wishList'

export const notifyForWishList = async (
  wishList: WishList & {
    items: Item[]
    incomingWebhook: IncomingWebhook
  }
) => {
  const items = wishList.items.filter(
    item =>
      item.discountRate >= wishList.discountRateThreshold ||
      item.pointsRate >= wishList.pointsRateThreshold
  )
  await notify({
    ...wishList,
    items
  })
}

export const notifyForUser = async (user: User): Promise<void> => {
  const wishLists = await getWishListDetails(user.id)
  await Promise.allSettled(
    wishLists.map(wishList => notifyForWishList(wishList))
  )
}

export const notifyAllWishList = async (): Promise<void> => {
  const users = await getAll()
  await Promise.allSettled(users.map(user => notifyForUser(user)))
}
