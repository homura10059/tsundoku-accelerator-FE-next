import { NextApiRequest, NextApiResponse } from 'next'
import { getScrapedWishLists } from '../../../domain/service/wishList'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { url },
  } = req

  const list = await getScrapedWishLists(typeof url === 'string' ? [url] : url)

  res.status(200).json(list)
}
