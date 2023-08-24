import User from "@models/user";
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
          }),
    ],
    callbacks: {
    async session({session}){
     // checking everytime which user is online
      const sessionUser = await User.findOne({
        email: session.user.email
      })
      session.user.id = sessionUser._id.toString()

      return session;
    },
    async signIn({profile}){
     try{
        await connectToDB();
        //if user already exists in database
        const userExists = await User.findOne({
            email:profile.email
        })

        // if not create user
        if(!userExists){
            await User.create({
                email: profile.email,
                username: profile.name.replace(" ","").toLowerCase(),
                image: profile.picture
            })
        }
        return true; // important to return true;
     }catch(error){
        console.log(error)
        return false
     }
    }
},
secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST}