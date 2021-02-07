import { NextApiRequest, NextApiResponse } from 'next'
import { notifyAllWishList } from '../../../domain/service/notification'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      await notifyAllWishList()
      res.json({
        status: 'ok',
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
