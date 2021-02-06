import { User, WishList, Item } from '@prisma/client'
import { getAll } from './user'
import { getWishListDetails } from './wishList'
import prisma from '../../lib/prisma'

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

export const addIncomingWebhook = async (
  email: string,
  url: string,
  channel: string,
  service: 'DISCORD'
) => {
  await prisma.incomingWebhook.create({
    data: {
      incomingWebhookUrl: url,
      channel,
      service,
      user: {
        connect: {
          email,
        },
      },
    },
  })
}

export const getIncomingWebhooksByUserId = async (userId: number) => {
  return await prisma.incomingWebhook.findMany({
    where: {
      userId,
    },
  })
}
