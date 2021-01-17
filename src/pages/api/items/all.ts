import { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'
import { updateAllItems } from '../../../domain/service/item'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        await updateAllItems()
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
