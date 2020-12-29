import { NextApiRequest, NextApiResponse } from 'next'
import { getItems } from '../../../domain/service/items'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { url },
  } = req
  console.log(`url: ${url}`)

  const urls = await getItems(typeof url === 'string' ? [url] : url)
  console.log(`urls: ${urls}`)

  res.status(200).json({ urls })
}
