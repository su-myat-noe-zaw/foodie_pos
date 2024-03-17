import NewTable from '@/components/NewTable'
import { useAppSelector } from '@/store/hooks'
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const TablesPage = () => {
  const [ open,setOpen ] = useState(false)
  const tables = useAppSelector(state=> state.table.items)

  return (
    <div>
      <NewTable open={open} setOpen={setOpen}></NewTable>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' color='primary' onClick={()=> setOpen(true) }>New Table</Button>
        </Box>
      <Box>
        {
          tables.map((table,index)=>
            <Typography key={index}>{table.name}</Typography>
          )
        }
      </Box>
    </div>
  )
}

export default TablesPage