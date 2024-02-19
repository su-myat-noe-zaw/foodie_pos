import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { prisma } from '@/utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const sessionData = await getServerSession(req,res, authOptions)
    if(!sessionData){
       res.status(401).send("Unthorized...")
    }else{
      const user = sessionData.user
      const name = sessionData.user?.name as string
      const email = sessionData.user?.email as string
      const dbUser = await prisma.user.findUnique({ where: { email }})
      if(!dbUser){
        const newUser = await prisma.user.create({ data: { name,email }})
        return res.status(200).send(`Successfully created...`)
      }
      res.status(200).json(user)
    }
}
