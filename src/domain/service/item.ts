import { scrapeItem } from '../repositories/item'
import prisma, { Item } from '../../functions/prisma'

export const fetchItem = async (url: string) => {
  const dbData = await prisma.item.findUnique({
    where: {
      url,
    },
  })

  const scrapedData = await scrapeItem(dbData.url)

  return { ...dbData, ...scrapedData }
}

export const updateItem = async (item: Item) => {
  const scrapedData = await scrapeItem(item.url)
  const result = { ...item, ...scrapedData }

  await prisma.item.update({
    data: {
      scrapedAt: result.scrapedAt,
      title: result.title,
      price: result.price,
      discount: result.discount,
      discountRate: result.discountRate,
      points: result.points,
      pointsRate: result.pointsRate,
    },
    where: {
      url: result.url,
    },
  })
}

export const updateItemByUrl = async (url: string) => {
  const item = await prisma.item.findUnique({
    where: {
      url,
    },
  })

  await updateItem(item)
}

export const updateAllItems = async () => {
  const items = await prisma.item.findMany()
  items.sort((a, b) => {
    if (a.scrapedAt < b.scrapedAt) return -1
    if (a.scrapedAt > b.scrapedAt) return 1
    return 0
  })
  console.log('get AllItems')
  for (const item of items) {
    console.log(`item: ${item.url}`)
    await updateItem(item)
  }
}

export const getItemsByUserId = async (userId: number) => {
  return prisma.wishList.findMany({
    where: {
      userId,
    },
    include: {
      items: true,
    },
  })
}
