import { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'

import {
  deleteWishList,
  fetchWishList,
  updateWishListById
} from '../../../domain/service/wishList'

const requestParamSchema = z.object({
  id: z.string().min(1)
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      const result = requestParamSchema.parse(req.query)
      const list = await fetchWishList(result.id)
      res.json({
        status: 'ok',
        list
      })
      break
    }
    case 'PUT': {
      const result = requestParamSchema.parse(req.query)
      await updateWishListById(result.id)
      res.json({
        status: 'ok'
      })
      break
    }
    case 'DELETE': {
      const result = requestParamSchema.parse(req.query)
      await deleteWishList(result.id)
      res.json({
        status: 'ok'
      })
      break
    }
    default:
      res.status(500).json({ status: 'error', case: 'invalid method' })
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    handler(req, res)
  } catch (error) {
    res.json({ status: 'error', error })
  }
}
