import AWS from 'aws-sdk'
import { WishListsRepository } from '../domain/repositories/wish_lists'
import { ItemsRepository } from '../domain/repositories/items'

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
  const now = Math.floor(Date.now() / 1000)

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
              EXPIRED_AT: {
                N: `${now + 24 * 60 * 60}`
              }
            }
          }
          return ddb.putItem(params).promise()
        })
      )
    }
  }
}
