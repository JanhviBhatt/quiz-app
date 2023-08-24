'use client'
import { Button, Flex, Heading, Input,Link } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Register = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        email:"",
        password:"",
        username:"",
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading , setLoading] = useState(true)
    const register = async()=>{
       try{

       }catch(error){
         return 
       }finally{
        setLoading(false)
       }
    }
    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    },[user])
  return (
    <Flex height={'100vh'} alignItems={'center'} justifyContent={"center"} >
     {
        loading ? "Loading..." :  <Flex direction={'column'} background={'gray.200'} p={12} rounded={6} position={'relative'}>
        <Heading mb={12} textAlign={'center'}>Register</Heading>
        <Input
        placeholder='email...' value={user.email} onChange={()=>setUser({...user,email:e.target.value})}
        variant={'filled'} mb={6} type='email'
        />
        <Input value={user.username} onChange={()=>setUser({...user,username:e.target.value})} placeholder='username...' variant={'filled'} type='text' mb={6}></Input>
        <Input value={user.password} onChange={()=>setUser({...user,password:e.target.value})} placeholder='password...' variant={'filled'} type='password' mb={8}></Input>
        {
          buttonDisabled? 
        <Button colorScheme='teal' disabled >Register</Button>
        : 
        <Button colorScheme='teal' onClick={register}  >Register</Button>
        }
        <Link href='/login' mt={5} ml={1} color={'blue.300'} >Login</Link>
        
      </Flex>
     }
   </Flex>
  )
}

export default Register
