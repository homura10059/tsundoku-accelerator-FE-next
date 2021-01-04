import { scrapeItem } from '../repositories/item'
import prisma, { Item } from '../../lib/prisma'

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
  items.forEach(async (item) => {
    await updateItem(item)
  })
}
