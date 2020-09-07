import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { getWishLists } from '../../domain/service/wish_lists'
import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda/trigger/api-gateway-proxy'

export const get = async (
  _event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  const wishLists = await getWishLists()
  return {
    statusCode: 200,
    body: JSON.stringify({
      wishLists
    })
  }
}
