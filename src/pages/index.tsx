import { Button, Typography, Box } from "@mui/material"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"

const Home = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/" })
  }

  if (!session) {
    return (
      <Box>
        <Typography>No signed in</Typography>
        <Button variant="contained" onClick={handleSignIn}>Sign In</Button>
      </Box>
    )
  }
  router.push('/backoffice/orders')
  return null
}

export default Home
