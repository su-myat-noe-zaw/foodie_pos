import NewTable from '@/components/NewTable'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const TablesPage = () => {
  const [ open,setOpen ] = useState(false)

  return (
    <div>
      <NewTable open={open} setOpen={setOpen}></NewTable>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Table</Button>
        </Box>
      <Box>orders</Box>
    </div>
  )
}

export default TablesPage