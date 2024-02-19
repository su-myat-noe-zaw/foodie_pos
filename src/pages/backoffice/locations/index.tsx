import NewLocation from '@/components/NewLocation'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const LocationsPage = () => {
  const [ open,setOpen ] = useState(false)

  return (
    <div>
      <NewLocation open={open} setOpen={setOpen}></NewLocation>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Location</Button>
        </Box>
      <Box>location</Box>
    </div>
  )
}

export default LocationsPage