import NewOrder from '@/components/NewOrder'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const OrderPage = () => {
  const [ open,setOpen ] = useState(false)

  return (
    <div>
      <NewOrder open={open} setOpen={setOpen}></NewOrder>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Order</Button>
        </Box>
      <Box>orders</Box>
    </div>
  )
}

export default OrderPage