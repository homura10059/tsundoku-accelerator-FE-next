import { IncomingWebhook, Item, User, WishList } from '@prisma/client'

import { notify, notifyError } from '../repositories/discord'
import { getAll } from './user'
import { getWishListDetails } from './wishList'

export const notifyForWishList = async (
  wishList: WishList & {
    items: Item[]
    incomingWebhook: IncomingWebhook
  }
) => {
  try {
    const items = wishList.items.filter(
      item =>
        item.discountRate >= wishList.discountRateThreshold ||
        item.pointsRate >= wishList.pointsRateThreshold
    )
    await notify({
      ...wishList,
      items
    })
  } catch (e) {
    await notifyError(e)
  }
}

export const notifyForUser = async (user: User): Promise<void> => {
  const wishLists = await getWishListDetails(user.id)
  await Promise.allSettled(
    wishLists.map(wishList => notifyForWishList(wishList))
  )
}

export const notifyAllWishList = async (): Promise<void> => {
  console.log('start: notifyAllWishList')
  const users = await getAll()
  await Promise.allSettled(users.map(user => notifyForUser(user)))
  console.log('end: notifyAllWishList')
}
