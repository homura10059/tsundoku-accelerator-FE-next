import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda/trigger/api-gateway-proxy'
import { getItemsFromCache } from '../../domain/service/items'

export const get = async (): Promise<APIGatewayProxyStructuredResultV2> => {
  const items = await getItemsFromCache()
  return {
    statusCode: 200,
    body: JSON.stringify({
      items
    })
  }
}
