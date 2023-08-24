'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Category from '@components/Category'
import { Heading, Flex, Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import LoginButtons from '@components/LoginButtons'
import { useSession } from 'next-auth/react'
import Ques from '@components/Ques'

export default function Home() {
  const {data:session} = useSession()
  return (
    <main className={styles.main}>
      <Flex p={8} justifyContent={'center'} textAlign={'center'} maxWidth={600} alignItems={'center'} direction={'column'}>
        <span className={styles.span} >Welcome to</span><br />
        <Heading className={styles.heading}>Quiz Bee</Heading>
        {!session?.user && <LoginButtons  />}
      </Flex>
      {session?.user && (<Category />)}
    </main>
  )
}
