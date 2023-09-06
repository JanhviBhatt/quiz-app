'use client'
import React, { useState, useEffect } from 'react'
import Ques from './Ques'
import { Button, Flex,Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {ColorRing} from 'react-loader-spinner'
import Loader from './Loader'
import { useRouter } from 'next/navigation'
import styles from '../app/page.module.css'

const Questions = ({type}) => {
  const [question, setQuestion] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const data =()=> {
    fetch(`https://opentdb.com/api.php?amount=5&category=${type}&type=boolean`).then((res)=>res.json()).then(data => {setQuestion(data.results); setLoading(false)})
  }
  useEffect(()=>{
    data()
  },[])
  
  const result= ()=>{
    router.push('/result')
  }

  return (
    <Flex direction={'column'}  mb={5} mt={10}>
           { loading ? <Loader/> :
           question.map((ques,id) =>{
              return <Ques ques={ques} key={id} />
            })
          }
    { !loading && 
          <Flex justifyContent={'center'} alignItems={'center'}><Button m={10} colorScheme='teal' rounded={20} width={'50%'} onClick={result} >Submit</Button></Flex>}
    </Flex>
  )
}

export default Questions
