import { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'
import * as UserService from '../../../domain/service/user'

const requestBodySchema = z.object({
  email: z.string().min(1),
  name: z.string(),
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = requestBodySchema.parse(req.body)
    await UserService.create(result.email, result.name)
    res.json({
      ok: true,
    })
  } catch (error) {
    res.json({ ok: false, error })
  }
}
