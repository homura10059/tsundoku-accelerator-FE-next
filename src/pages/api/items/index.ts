import { NextApiRequest, NextApiResponse } from 'next'
import { getItems } from '../../../domain/service/items'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { url },
  } = req

  const urls = await getItems(typeof url === 'string' ? [url] : url)

  res.status(200).json({ urls })
}
