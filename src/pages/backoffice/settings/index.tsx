import { Card, CardContent, Select, Typography } from '@mui/material'
import React from 'react'

const SettingsPage = () => {
  return (
    <div>
      <Card sx={{ width: 350 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Your Location
          </Typography>
          <Select>
            <menuitem></menuitem>
          </Select>
        </CardContent>
      </Card>
    </div>
  )
}

export default SettingsPage