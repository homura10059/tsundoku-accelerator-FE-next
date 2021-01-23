import { User, WishList, Item } from '@prisma/client'
import { getAll } from './user'
import { getWishListDetails } from './wishList'

export const getNotificationFor = async (
  wishList: WishList & {
    items: Item[]
  }
) => {
  const items = wishList.items.filter(
    (item) =>
      item.discountRate >= wishList.discountRateThreshold ||
      item.pointsRate >= wishList.pointsRateThreshold
  )
}

export const notifyForUser = async (user: User): Promise<void> => {
  const wishLists = await getWishListDetails(user.id)
}

export const notifyAllWishList = async (): Promise<void> => {
  const users = await getAll()
  await Promise.allSettled(users.map((user) => notifyForUser(user)))
}
