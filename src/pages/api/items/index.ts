import { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'
import {fetchItem , updateItem} from '../../../domain/service/item'

const requestParamSchema = z.object({
  url: z.string().min(1),
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const result = requestParamSchema.parse(req.query)
        const item = await fetchItem(result.url)
        res.json({
          status: 'ok',
          item,
        })
      } catch (error) {
        res.json({ status: 'error', error })
      }
      break
    case 'PUT':
      try {
        const result = requestParamSchema.parse(req.query)
        await updateItem(result.url)
        res.json({
          status: 'ok',
        })
      } catch (error) {
        res.json({ status: 'error', error })
      }
      break
    default:
      res.json({ status: 'error', case: 'invalid method' })
  }
}
