'use client'
import { Button } from '@chakra-ui/react'
import React from 'react'
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const LoginButtons = () => {
  const router = useRouter()

  const [providers, setProviders] = useState(null);
  
  useEffect(()=>{
      const setUpProviders = async () =>{
          const response = await getProviders()
          setProviders(response)
      }
      setUpProviders()
  },[])
  return (
    <div>
      <Button onClick={()=>router.push('/login')} class pl={195} pr={195} mt={100} color='#776da0' _hover={{ bg: '#776da0', color: 'white' }} variant={'solid'} borderColor={'#776da0'} _active={{transform: 'scale(0.98)',}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Log In</Button>
      <Button onClick={()=>router.push('/register')} class pl={150} pr={150} mt={5} color='#776da0' _hover={{ bg: '#776da0', color: 'white' }} variant={'solid'} borderColor={'#776da0'} _active={{transform: 'scale(0.98)',}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Sign In With Email</Button>
      {providers && 
       Object.values(providers).map((provider)=>(
      <Button type='button' key={provider.name} onClick={()=> signIn(provider.id)} pl={150} pr={150} mt={5} color='#776da0' _hover={{ bg: '#776da0', color: 'white' }} variant={'solid'} borderColor={'#776da0'} _active={{transform: 'scale(0.98)',}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Sign In With {provider.name}</Button>
       ))
      }
    </div>
  )
}

export default LoginButtons
