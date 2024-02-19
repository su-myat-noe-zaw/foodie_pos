import NewAddonCategory from '@/components/NewAddonCategory'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const AddonCategoriesPage = () => {
  const [ open,setOpen ] = useState(false)

  return (
    <div>
      <NewAddonCategory open={open} setOpen={setOpen}></NewAddonCategory>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Addon Category</Button>
        </Box>
      <Box>add on categories</Box>
    </div>
  )
}

export default AddonCategoriesPage