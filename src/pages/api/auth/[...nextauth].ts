import { config } from "@/utils/config"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: config.googleClientId,
      clientSecret: config.googleClientSecret
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout'
  }
}

export default NextAuth(authOptions)