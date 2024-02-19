import NewMenu from '@/components/NewMenu'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const MenusPage = () => {
  const [ open,setOpen ] = useState(false)

  return (
    <div>
      <NewMenu open={open} setOpen={setOpen}></NewMenu>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Menu</Button>
        </Box>
      <Box>menu</Box>
    </div>
  )
}

export default MenusPage