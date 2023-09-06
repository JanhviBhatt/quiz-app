'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter,Text,Button, Flex, Spacer } from '@chakra-ui/react'
import styles from '../app/page.module.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import {decode} from 'html-entities';
import { useDispatch } from 'react-redux'
import { handleScoreChange } from '@redux/actions'
const Ques = ({ques}) => {
  const [score, setScore] = useState(0)
  const dispatch = useDispatch()
  const [disabled , setDisabled] = useState(false);
 
  const correct = (e)=>{
    console.log("btn clicked")
    if(e ===ques.correct_answer){
      setScore(score+1);
      dispatch(handleScoreChange(score))
    }
    console.log(score)
    setDisabled(true)
  }

  
  return (
     <>
        <Flex justifyContent={'center'}   alignItems={'center'} >
          <Card className={styles.card} height={250} width={700} align='center'>
        <CardBody>
          <Text fontWeight={500} fontSize={15} >{decode(ques.question)}</Text>
        </CardBody>
        <CardFooter>
        {
            disabled ? <>
            <Button  mr={5} disabled>True</Button>
          <Button  disabled>False</Button>
            </> : <>
            <Button onClick={()=>correct("True")} colorScheme='teal' mr={5} >True</Button>
          <Button onClick={()=>correct("False")} colorScheme='teal'>False</Button>
            </>
          }
        </CardFooter>
       
      </Card>
      </Flex>
    </>
  )
}

export default Ques
