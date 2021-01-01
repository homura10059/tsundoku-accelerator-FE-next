import { getScrapedWishList } from '../repositories/wishList'
import prisma from '../../lib/prisma'

export const addWishList = async (userId: string, url: string) => {
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

export const updateWishList = async (id: string) => {
  const wishList = await fetchWishList(id)
  wishList.items.forEach(async (url) => {
    await prisma.item.upsert({
      where: {
        url,
      },
      create: {
        url,
        scrapedAt: null,
        wishLists: {
          connect: {
            id: wishList.id,
          },
        },
      },
      update: {
        wishLists: {
          connect: {
            id: wishList.id,
          },
        },
      },
    })
  })
  await prisma.wishList.update({
    data: {
      scrapedAt: wishList.scrapedAt,
    },
    where: {
      id,
    },
  })
}
