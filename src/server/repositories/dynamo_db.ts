import AWS from 'aws-sdk'
import { WishListsRepository } from '../domain/repositories/wishLists'
import { ItemsRepository } from '../domain/repositories/items'
import { getUnixTimeInSec } from './dates'
import { ItemHistoryRepository } from '../domain/repositories/itemHistories'
import { ItemHistory } from '../domain/model/ItemHistory'
import { UnixTimeInSec } from '../domain/model/Dates'

AWS.config.update({ region: 'ap-northeast-1' })

const getDynamoDB = (() => {
  let ddb: AWS.DynamoDB | null = null

  return () => {
    if (!ddb) {
      ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })
    }
    return ddb
  }
})()

export const getWishListsRepository = (): WishListsRepository => {
  const ddb = getDynamoDB()
  const tableName = process.env.TABLE_WISH_LISTS || ''

  return {
    getWishLists: async () => {
      const params = {
        TableName: tableName
      }
      return ddb
        .scan(params)
        .promise()
        .then(res => {
          const urls = res.Items.map(item => item.URL.S)
          console.log('Success', urls)
          return urls
        })
    }
  }
}

export const getItemsRepository = (): ItemsRepository => {
  const ddb = getDynamoDB()
  const tableName = process.env.TABLE_ITEMS || ''
  const now = getUnixTimeInSec(new Date(Date.now()))

  return {
    getItems: async () => {
      const params = {
        TableName: tableName
      }
      return ddb
        .scan(params)
        .promise()
        .then(res => {
          const urls = res.Items.map(item => item.URL.S)
          console.log('Success', urls)
          return urls
        })
    },
    update: async (urls: string[]) => {
      await Promise.all(
        urls.map(url => {
          const params = {
            TableName: tableName,
            Item: {
              URL: { S: url },
              EXPIRED_AT: { N: `${now + 60 * 24 * 60 * 60}` }
            }
          }
          return ddb.putItem(params).promise()
        })
      )
    }
  }
}

type DdItemHistory = {
  URL: { S: string }
  TITLE: { S: string }
  SCRAPED_AT: { N: string }
  DISCOUNT?: { N: string }
  DISCOUNT_RATE?: { N: string }
  POINTS?: { N: string }
  POINTS_RATE?: { N: string }
  EXPIRED_AT: { N: string }
  PRICE?: { N: string }
}

const convertDdItemHistory = (
  itemHistory: ItemHistory,
  expiredAt: UnixTimeInSec
): DdItemHistory => {
  let ddItemHistory: DdItemHistory = {
    URL: { S: itemHistory.url },
    TITLE: { S: itemHistory.title },
    SCRAPED_AT: { N: `${itemHistory.scrapedAt}` },
    EXPIRED_AT: { N: `${expiredAt}` }
  }
  if (itemHistory.price !== undefined) {
    ddItemHistory.PRICE = { N: `${itemHistory.price}` }
  }
  if (itemHistory.discount !== undefined) {
    ddItemHistory.DISCOUNT = { N: `${itemHistory.discount}` }
  }
  if (itemHistory.points !== undefined) {
    ddItemHistory.POINTS = { N: `${itemHistory.points}` }
  }
  if (itemHistory.discountRate !== undefined) {
    ddItemHistory.DISCOUNT_RATE = { N: `${itemHistory.discountRate}` }
  }
  if (itemHistory.pointsRate !== undefined) {
    ddItemHistory.POINTS_RATE = { N: `${itemHistory.pointsRate}` }
  }
  return ddItemHistory
}

export const getItemHistoryRepository = (): ItemHistoryRepository => {
  const ddb = getDynamoDB()
  const tableName = process.env.TABLE_ITEM_HISTORIES || ''
  console.log(`TABLE_ITEM_HISTORIES: ${tableName}`)
  const expiredAt = getUnixTimeInSec(new Date(Date.now())) + 60 * 24 * 60 * 60

  return {
    update: async (itemHistories: ItemHistory[]) => {
      await Promise.all(
        itemHistories.map(itemHistory => {
          const params = {
            TableName: tableName,
            Item: convertDdItemHistory(itemHistory, expiredAt)
          }

          return ddb
            .putItem(params)
            .promise()
            .catch(e => {
              console.info(JSON.stringify(itemHistory))
              console.error(e)
            })
        })
      )
    }
  }
}
