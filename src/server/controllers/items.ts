import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda/trigger/api-gateway-proxy'
import { getWishLists } from '../domain/service/wish_lists'
import { getItems, updateItems } from '../domain/service/items'

export const update = async (): Promise<APIGatewayProxyStructuredResultV2> => {
  const wishLists = await getWishLists()
  const items = await getItems(wishLists)
  await updateItems(items)
  return {
    statusCode: 200,
    body: JSON.stringify({
      items
    })
  }
}
