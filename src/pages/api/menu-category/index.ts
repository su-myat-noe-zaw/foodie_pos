// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { prisma } from '@/utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const sessionData = await getServerSession(req,res, authOptions);
    if(!sessionData) return res.status(401).send("Unthorized...");
    const method = req.method;
    if(method === 'POST'){
        const { name, locationId } = req.body        
         //data validation
        const isValid = name && locationId
        if(!isValid) return res.status(400).send("Bad Request.")
        const location = await prisma.location.findFirst(
            {where: {id: locationId} }
        )
        if(!location) return res.status(400).send("Bad Request.")
        const companyId = location.companyId
        const menuCategory = await prisma.menuCategory.create(
            { data: {name,companyId} }
        )
        return res.status(200).json(menuCategory)
    } 
    res.status(405).send('Method not allowed.')  
}
