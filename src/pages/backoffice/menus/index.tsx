import NewMenu from '@/components/NewMenu'
import { useAppSelector } from '@/store/hooks'
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const MenusPage = () => {
  const [ open,setOpen ] = useState(false)
  const menus = useAppSelector(state=> state.menu.items)

  return (
    <div>
      <NewMenu open={open} setOpen={setOpen}></NewMenu>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Menu</Button>
        </Box>
      <Box>
        {
          menus.map((menu,index)=>
            <Typography key={index}>{menu.name}</Typography>
          )
        }
      </Box>
    </div>
  )
}

export default MenusPage