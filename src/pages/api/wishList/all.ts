import { NextApiRequest, NextApiResponse } from 'next'

import { updateAllWishLists } from '../../../domain/service/wishList'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        await updateAllWishLists()
        res.json({
          status: 'ok'
        })
      } catch (error) {
        res.json({ status: 'error', error })
      }
      break
    default:
      res.json({ status: 'error', case: 'invalid method' })
  }
}
