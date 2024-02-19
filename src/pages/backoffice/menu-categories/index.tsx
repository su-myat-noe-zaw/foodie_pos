import NewMenuCategory from '@/components/NewMenuCategory'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const MenuCategoriesPage = () => {
  const [ open,setOpen ] = useState(false)

  return (
    <div>
      <NewMenuCategory open={open} setOpen={setOpen}></NewMenuCategory>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Menu Category</Button>
      </Box>
      <Box></Box>
    </div>
  )
}

export default MenuCategoriesPage