'use client'
import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../app/page.module.css'
import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import { useSelector } from 'react-redux'


const Result = () => {
  const {score} = useSelector(state=>state.score);
  return (
    <Flex mt={20} alignItems={'center'} justifyContent={"center"} >
    <Flex  direction={'column'} border={'solid 6px white'} bgGradient={[ 'linear(to-tr, teal.300, yellow.400)', 'linear(to-t, blue.200, teal.500)', 'linear(to-b, orange.100, purple.300)',
  ]}  p={12} rounded={6} position={'relative'}>
      <Text mb={45} textAlign={'center'} bgGradient='linear(to-l,black,white)' bgClip='text' fontSize='6xl' fontWeight='extrabold'>Result</Text>
       
       <Flex pb={30} direction={'row'} textAlign={'center'} fontSize={20} fontWeight={500} color={'purple.500'}>
       <Text mb={7}  width={300}>Score </Text>
       <Text mb={7} width={300}>{score}/25</Text>
       </Flex>
    </Flex>
   </Flex>
  )
}

export default Result
