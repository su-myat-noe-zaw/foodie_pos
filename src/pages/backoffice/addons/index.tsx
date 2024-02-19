import NewAddon from '@/components/NewAddon'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const AddonsPage = () => {
  const [ open,setOpen ] = useState(false)

  return (
    <div>
      <NewAddon open={open} setOpen={setOpen}></NewAddon>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Addon</Button>
        </Box>
      <Box>addon</Box>
    </div>
  )
}

export default AddonsPage