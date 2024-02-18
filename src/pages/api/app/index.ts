import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const sessionData = await getServerSession(req,res, authOptions)
    if(!sessionData) return res.status(401).send("Unthorized...")
    res.status(200).json({ name: 'John Doe' })
}
