import NewLocation from '@/components/NewLocation'
import { useAppSelector } from '@/store/hooks'
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const LocationsPage = () => {
  const [ open,setOpen ] = useState(false)
  const locations = useAppSelector(state=> state.location.items)

  return (
    <div>
      <NewLocation open={open} setOpen={setOpen}></NewLocation>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Location</Button>
        </Box>
      <Box>
        {
          locations.map((location,index)=>
            <Typography key={index}>{location.name}</Typography>
          )
        }
      </Box>
    </div>
  )
}

export default LocationsPage