import { NextApiRequest, NextApiResponse } from 'next'
import { addWishList } from '../../../domain/service/wishList'
import { getSession } from 'next-auth/client'
import * as z from 'zod'

const requestParamSchema = z.object({
  url: z.string().min(1),
  discountRateThreshold: z.number().optional(),
  pointsRateThreshold: z.number().optional(),
  incomingWebhookId: z.string().optional(),
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
          incomingWebhookId
        } = requestParamSchema.parse(req.body)
        await addWishList(
          session?.user?.email,
          url,
          discountRateThreshold,
          pointsRateThreshold,
          incomingWebhookId
        )
        res.json({
          status: 'ok',
        })
      } catch (error) {
        console.error(error)
        res.status(500).json({ status: 'error', error })
      }
      break
    default:
      res.json({ status: 'error', case: 'invalid method' })
  }
}
