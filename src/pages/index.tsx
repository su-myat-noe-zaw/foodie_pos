import Layout from "@/components/Layout"
import { Button, Typography, Box } from "@mui/material"
import { signIn, useSession, signOut } from "next-auth/react"

export default function Home(){
  const { data: session } = useSession()
  return  <>
            {
              session ?
              <Layout>
                <h1>Signed in with: {session.user?.email}</h1>
                <Button onClick={()=> signOut()}>Sign Out</Button>
              </Layout>
              :
              <Box>
                <Typography>No signed in</Typography>
                <Button variant="contained" onClick={()=> signIn() }>Sign In</Button>
              </Box>
            }
          </>
}
