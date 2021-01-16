import { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'
import { fetchWishList, updateWishListById } from '../../../domain/service/wishList'

const requestParamSchema = z.object({
  id: z.string().min(1),
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const result = requestParamSchema.parse(req.query)
        const list = await fetchWishList(result.id)
        res.json({
          status: 'ok',
          list,
        })
      } catch (error) {
        res.json({ status: 'error', error })
      }
      break
    case 'PUT':
      try {
        const result = requestParamSchema.parse(req.query)
        await updateWishListById(result.id)
        res.json({
          status: 'ok',
        })
      } catch (error) {
        res.status(500).json({ status: 'error', error })
      }
      break
    default:
      res.status(500).json({ status: 'error', case: 'invalid method' })
  }
}
