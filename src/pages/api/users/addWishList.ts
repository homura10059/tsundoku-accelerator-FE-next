import { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'
import * as WishListService from '../../../domain/service/wishList'

const requestParamSchema = z.object({
  id: z.string().min(1),
  url: z.string().min(1),
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = requestParamSchema.parse(req.body)
    await WishListService.addWishList(result.id, result.url)
    res.json({
      status: 'ok',
      added: result
    })
  } catch (error) {
    res.json({ status: 'error', error })
  }
}
