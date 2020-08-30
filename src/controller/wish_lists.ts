import {APIGatewayAuthorizerResultContext, APIGatewayProxyEventV2} from "aws-lambda";


export const get = async (event: APIGatewayProxyEventV2): Promise<APIGatewayAuthorizerResultContext> => {
    console.log(JSON.stringify(event))
    const pathParams = event.pathParameters
    return {
        id: pathParams.id
    }
}