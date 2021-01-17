import { NextApiRequest, NextApiResponse } from 'next'
import { addWishList } from '../../../domain/service/wishList'
import { getSession } from 'next-auth/client'
import * as z from 'zod'

const requestParamSchema = z.object({
  url: z.string().min(1),
  discountRateThreshold: z.number().optional(),
  pointsRateThreshold: z.number().optional(),
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const session = await getSession({ req })
        const {
          url,
          discountRateThreshold,
          pointsRateThreshold,
        } = requestParamSchema.parse(req.body)
        await addWishList(
          session?.user?.email,
          url,
          discountRateThreshold,
          pointsRateThreshold
        )
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
