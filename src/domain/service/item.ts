import prisma, { Item } from '../../functions/prisma'
import { scrapeItem } from '../repositories/item'

export const fetchItem = async (url: string) => {
  const dbData = await prisma.item.findUnique({
    where: {
      url
    }
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
      pointsRate: result.pointsRate
    },
    where: {
      url: result.url
    }
  })
}

export const updateItemByUrl = async (url: string) => {
  const item = await prisma.item.findUnique({
    where: {
      url
    }
  })

  await updateItem(item)
}

const sortByScrapedAt = (from: Item[]) => {
  const items = [...from]
  items.sort((a, b) => {
    if (a.scrapedAt < b.scrapedAt) return -1
    if (a.scrapedAt > b.scrapedAt) return 1
    return 0
  })
  return items
}

export const updateAllItems = async () => {
  const items = sortByScrapedAt(await prisma.item.findMany())
  console.log('get AllItems')
  for (const item of items) {
    console.log(`item: ${item.url}`)
    await updateItem(item)
  }
}

export const getItemsByUserId = async (email: string) => {
  return prisma.wishList
    .findMany({
      where: {
        user: {
          email
        }
      },
      include: {
        items: true
      }
    })
    .then(lists => lists.map(x => x.items).flat())
}

export const updateItemsByUser = async (email: string) => {
  const items = sortByScrapedAt(await getItemsByUserId(email))
  for (const item of items) {
    console.log(`item: ${item.url}`)
    await updateItem(item)
  }
}
