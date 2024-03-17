import NewMenuCategory from '@/components/NewMenuCategory'
import { useAppSelector } from '@/store/hooks'
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const MenuCategoriesPage = () => {
  const [ open,setOpen ] = useState(false)
  const menuCategories = useAppSelector(state=> state.menuCategory.items)

  return (
    <div>
      <NewMenuCategory open={open} setOpen={setOpen}></NewMenuCategory>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Menu Category</Button>
      </Box>
      <Box>
        {menuCategories.map((item,index)=>
          <Typography key={index}>{item.name}</Typography>
        )}
      </Box>
    </div>
  )
}

export default MenuCategoriesPage