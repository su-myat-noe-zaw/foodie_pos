// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const sessionData = await getServerSession(req,res, authOptions)
    if(!sessionData) return res.status(401).send("Unthorized...")
    res.status(200).json({ name: 'John Doe' })
}
