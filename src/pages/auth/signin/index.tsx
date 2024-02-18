import { Button } from '@mui/material'
import { signIn } from 'next-auth/react'
import React from 'react'

const index = () => {
  return (
    <div>
      <Button onClick={()=> signIn("google")}>Sign in with google</Button>
    </div>
  )
}

export default index