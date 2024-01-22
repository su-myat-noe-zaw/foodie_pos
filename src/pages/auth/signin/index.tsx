import { Button } from '@mui/material'
import { signIn } from 'next-auth/react'
import React from 'react'

const index = () => {
  return (
    <Button onClick={()=> signIn("google", { callbackUrl: '/' })}>Sign in with google</Button>
  )
}

export default index