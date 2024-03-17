import { useAppSelector } from '@/store/hooks'
import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

const SettingsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<number>()
  const locations = useAppSelector(state => state.location.items)

  const handleLocationChange = (evt: SelectChangeEvent<number>) => {
    setSelectedLocation(evt.target.value)
    console.log( evt.target.value);
    localStorage.setItem('currentLocation', evt.target.value)
  }

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Location</InputLabel>
        <Select
          label="Location"
          labelId="location-label"
          value={selectedLocation ? selectedLocation : ""}
          onChange={handleLocationChange}
        >
          {locations.map(location =>
            <MenuItem key={location.id} value={location.id}>{location.name}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SettingsPage
