import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { url },
  } = req

  res.status(200).json({ url })
}
