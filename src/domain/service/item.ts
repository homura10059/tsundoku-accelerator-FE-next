import { scrapeItem } from '../repositories/item'
import prisma from '../../lib/prisma'

export const fetchItem = async (url: string) => {
  const dbData = await prisma.item.findUnique({
    where: {
      url,
    },
  })

  const scrapedData = await scrapeItem(dbData.url)

  return { ...dbData, ...scrapedData }
}

export const updateItem = async (url: string) => {
  const item = await fetchItem(url)
  await prisma.item.update({
    data: {
      scrapedAt: item.scrapedAt,
      price: item.price,
      discount: item.discount,
      discountRate: item.discountRate,
      points: item.points,
      pointsRate: item.pointsRate,
    },
    where: {
      url,
    },
  })
}
