import { getScrapedWishList } from '../repositories/wishList'
import prisma from '../../lib/prisma'

export const addWishList = async (userId: number, url: string) => {
  await prisma.wishList.create({
    data: {
      url,
      scrapedAt: null,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  })
}

export const fetchWishList = async (id: string) => {
  const dbData = await prisma.wishList.findUnique({
    where: {
      id,
    },
  })

  const scrapedData = await getScrapedWishList(dbData.url)

  return { ...dbData, ...scrapedData }
}

export const updateWishList = async (wishList: {
  url: string
  scrapedAt: number
  id: string
  userId: number
}) => {
  const scrapedData = await getScrapedWishList(wishList.url)
  const result = { ...wishList, ...scrapedData }
  await prisma.wishList.update({
    data: {
      scrapedAt: result.scrapedAt,
      items: {
        disconnect: {},
      },
    },
    where: {
      id: result.id,
    },
  })
  result.items.forEach(async (url) => {
    await prisma.item.upsert({
      where: {
        url,
      },
      create: {
        url,
        scrapedAt: null,
        wishLists: {
          connect: {
            id: result.id,
          },
        },
      },
      update: {
        wishLists: {
          connect: {
            id: result.id,
          },
        },
      },
    })
  })
}

export const updateWishListById = async (id: string) => {
  const dbData = await prisma.wishList.findUnique({
    where: {
      id,
    },
  })

  await updateWishList(dbData)
}

export const updateAllWishLists = async () => {
  const wishLists = await prisma.wishList.findMany()
  wishLists.forEach(async (wishList) => {
    await updateWishList(wishList)
  })
}

export const getWishLists = async (userId: number) =>
  prisma.wishList.findMany({
    where: {
      userId,
    },
  })
