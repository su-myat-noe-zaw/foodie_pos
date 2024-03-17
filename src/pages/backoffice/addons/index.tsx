import NewAddon from '@/components/NewAddon'
import { useAppSelector } from '@/store/hooks'
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddonsPage = () => {
  const [ open,setOpen ] = useState(false)
  const addons = useAppSelector(state=> state.addon.items)

  return (
    <div>
      <NewAddon open={open} setOpen={setOpen}></NewAddon>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Addon</Button>
        </Box>
      <Box>
        {
          addons.map((addon,index)=>
            <Typography key={index}>{addon.name}</Typography>
          )
        }
      </Box>
    </div>
  )
}

export default AddonsPage