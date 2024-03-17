import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { prisma } from '@/utils/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const sessionData = await getServerSession(req,res, authOptions)
    if(!sessionData) return res.status(401).send("Unthorized...")
    const user = sessionData.user
    const name = user?.name
    const email = user?.email as string
    const dbUser = await prisma.user.findUnique({ where: { email }})
    if(!dbUser){
      const user = sessionData.user
      const name = sessionData.user?.name as string
      const email = sessionData.user?.email as string
      const dbUser = await prisma.user.findUnique({ where: { email }})
      if(!dbUser){
        // create new company for user and assign user to it
        const newCompanyName = "Ah Wa Sar"
        const newCompanyAddress = "Myitnge, Mandalay"
        const { id: companyId } = await prisma.company.create({ data: 
          { name: newCompanyName, address: newCompanyAddress }
        })
        // create new user
        await prisma.user.create({ data: { name,email,companyId }})
        // create default menu category
        const newMenuCategoryName = 'Default Menu Category'
        const menuCategory = await prisma.menuCategory.create({
          data: { name: newMenuCategoryName, companyId: companyId }
        })
        //create default menu
        const newMenuName = "Default Menu Name"
        const menu = await prisma.menu.create({
          data: { name: newMenuName, price: 1000 }
        })
        const menuCategoryMenu = await prisma.menuCategoryMenu.create({
          data: { menuCategoryId: menuCategory.id , menuId: menu.id }
        })
        // create new addon category
        const newAddonCategoryName = "Default Addon Category"
        const addonCategory = await prisma.addonCategory.create({
          data: { name: newAddonCategoryName }
        })
        // create new row in menuAddonCategory
        const menuAddonCategory = await prisma.menuAddonCategory.create({
          data: { menuId: menu.id , addOnCategoryId: addonCategory.id }
        })
        // create addons
        const newAddonNameOne = "Default Addon Name One"
        const newAddonNameTwo = "Default Addon Name Two"
        const newAddonNameThree = "Default Addon Name Three"
        const addonData = [
          { name: newAddonNameOne, addOnCategoryId: addonCategory.id },
          { name: newAddonNameTwo, addOnCategoryId: addonCategory.id },
          { name: newAddonNameThree, addOnCategoryId: addonCategory.id }
        ]
        const addons = await prisma.$transaction(
          addonData.map(addon=> prisma.addon.create({ data: addon }))
        )
        // create location
        const newLocationName = "Default Location Name"
        const location = await prisma.location.create({
          data: { name: newLocationName, address: newCompanyAddress, companyId: companyId }
        })
        // create table
        const newTableName = "Default Table"
        const tables = await prisma.table.create({
          data: { name: newTableName, locationId: location.id }
        })
        return res.status(200).json({
          location,
          menuCategory,
          menu,
          menuCategoryMenu,
          addonCategory,
          menuAddonCategory,
          addons,
          tables
        })
      }
      res.status(200).json(user)
    }else{
      const companyId = dbUser.companyId
      const locations = await prisma.location.findMany({where: {companyId}})
      const locationIds = locations.map(loc=> loc.id)
      const menuCategories = await prisma.menuCategory.findMany({ where: {companyId} })
      const menuCategoryIds = menuCategories.map(item=> item.id)
      const menuCategoryMenu = await prisma.menuCategoryMenu.findMany({
        where: { menuCategoryId: { in: menuCategoryIds } }
      })
      const menuIds = menuCategoryMenu.map(item=> item.id)
      const menus = await prisma.menu.findMany({
        where: { id: { in: menuIds }}
      })
      const menuAddonCategory = await prisma.menuAddonCategory.findMany({
        where: { menuId : { in: menuIds }}
      })
      const addonCategoryIds = menuAddonCategory.map(item=> item.id)
      const addonCategories = await prisma.addonCategory.findMany({
        where: { id: { in: addonCategoryIds }}
      })
      const addons = await prisma.addon.findMany({
        where: { addOnCategoryId : { in: addonCategoryIds }}
      })
      const tables = await prisma.table.findMany({
        where: { locationId: { in: locationIds }}
      }) 
      return res.status(200).json({
        locations,
        menuCategories,
        menus,
        addonCategories,
        addons,
        tables
      })
    }
}
