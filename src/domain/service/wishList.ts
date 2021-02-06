import { getScrapedWishList } from '../repositories/wishList'
import prisma from '../../lib/prisma'

export const addWishList = async (
  email: string,
  url: string,
  discountRateThreshold = 0,
  pointsRateThreshold = 0,
  incomingWebhookId?: string
) => {
  if (incomingWebhookId) {
    await prisma.wishList.create({
      data: {
        url,
        scrapedAt: null,
        discountRateThreshold,
        pointsRateThreshold,
        user: {
          connect: {
            email,
          },
        },
        incomingWebhook: {
          connect: {
            id: incomingWebhookId,
          },
        },
      },
    })
  } else {
    await prisma.wishList.create({
      data: {
        url,
        scrapedAt: null,
        discountRateThreshold,
        pointsRateThreshold,
        user: {
          connect: {
            email,
          },
        },
      },
    })
  }
}

export const deleteWishList = async (id: string) => {
  await prisma.wishList.delete({
    where: {
      id,
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
  const next = { ...wishList, ...scrapedData }
  const before = await prisma.wishList.findUnique({
    include: {
      items: true,
    },
    where: {
      id: wishList.id,
    },
  })
  await prisma.wishList.update({
    data: {
      scrapedAt: next.scrapedAt,
      title: next.title,
      items: {
        disconnect: before.items.map((item) => ({ url: item.url })),
      },
    },
    where: {
      id: wishList.id,
    },
  })

  next.items.forEach(async (url) => {
    await prisma.item.upsert({
      where: {
        url,
      },
      create: {
        url,
        scrapedAt: null,
        wishLists: {
          connect: {
            id: next.id,
          },
        },
      },
      update: {
        wishLists: {
          connect: {
            id: next.id,
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

export const getWishListDetails = async (userId: number) =>
  prisma.wishList.findMany({
    where: {
      userId,
    },
    include: {
      items: true,
      incomingWebhook: true,
    },
  })

export const getWishList = async (id: string) => {
  return prisma.wishList.findUnique({
    where: {
      id,
    },
    include: {
      items: true,
      incomingWebhook: true
    },
  })
}
