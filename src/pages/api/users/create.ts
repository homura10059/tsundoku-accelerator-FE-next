import { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'
import * as UserService from '../../../domain/service/user'

const requestBodySchema = z.object({
  name: z.string().min(1),
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = requestBodySchema.parse(req.body)
    await UserService.create(result.name)
    res.json({
      status: 'ok',
    })
  } catch (error) {
    res.json({ status: 'error', error })
  }
}
