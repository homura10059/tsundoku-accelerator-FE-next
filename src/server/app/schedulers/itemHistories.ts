import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda/trigger/api-gateway-proxy'
import { getItemsFromCache } from '../../domain/service/items'
import {
  getItemHistories,
  updateItemHistories
} from '../../domain/service/itemHistories'
import { ItemHistory } from '../../domain/model/ItemHistory'

export const update = async (): Promise<APIGatewayProxyStructuredResultV2> => {
  const items = await getItemsFromCache()
  const histories = (await getItemHistories(items)).reduce(
    (previousValue, currentValue) => {
      if (currentValue) {
        return previousValue.concat(currentValue)
      }
      return previousValue
    },
    new Array<ItemHistory>()
  )
  console.log(`histories: ${histories}`)
  await updateItemHistories(histories)
  return {
    statusCode: 200
  }
}
