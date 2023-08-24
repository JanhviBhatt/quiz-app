'use client'
import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Flex height={'100vh'} alignItems={'center'} justifyContent={"center"} >
    <Flex direction={'column'} background={'gray.200'}  p={12} rounded={6} position={'relative'}>
      <Heading mb={12} fontSize={40} textAlign={'center'}>Log In</Heading>
      <Input
      placeholder='email...'
      variant={'filled'} mb={7} type='email' width={300}
      />
      <Input placeholder='password...' variant={'filled'} type='password' mb={9}></Input>
      <Button colorScheme='teal'>Log in</Button>
      
    </Flex>
   </Flex>
  )
}

export default Login
