import NewAddonCategory from '@/components/NewAddonCategory'
import { useAppSelector } from '@/store/hooks'
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddonCategoriesPage = () => {
  const [ open,setOpen ] = useState(false)
  const addonCategories = useAppSelector(state=> state.addonCategory.items)

  return (
    <div>
      <NewAddonCategory open={open} setOpen={setOpen}></NewAddonCategory>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Addon Category</Button>
        </Box>
      <Box>
        {
          addonCategories.map((addonCategory,index)=>
            <Typography key={index}>{addonCategory.name}</Typography>
          )
        }
      </Box>
    </div>
  )
}

export default AddonCategoriesPage