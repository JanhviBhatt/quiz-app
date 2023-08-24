import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,SimpleGrid,Heading,Text,Button, Flex } from '@chakra-ui/react'

const Ques = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} >
      <Card align='center'>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button colorScheme='blue'>View here</Button>
    </CardFooter>
  </Card>
    </Flex>
  )
}

export default Ques
