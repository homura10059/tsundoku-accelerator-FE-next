import { NextApiRequest, NextApiResponse } from 'next'
import { getScrapedWishLists } from '../../../domain/service/wishList'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { url },
  } = req
  console.log(`url: ${url}`)

  const list = await getScrapedWishLists(typeof url === 'string' ? [url] : url)
  console.log(`urls: ${list}`)

  res.status(200).json({ list })
}
