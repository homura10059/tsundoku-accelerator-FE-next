import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

import { updateAllItems, updateItemsByUser } from '../../../domain/service/item'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        await updateAllItems()
        res.json({
          status: 'ok'
        })
      } catch (error) {
        res.json({ status: 'error', error })
      }
      break
    case 'PUT':
      try {
        const session = await getSession({ req })
        await updateItemsByUser(session.user.email)
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
