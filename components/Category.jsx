'use client'
import React, { useEffect } from 'react'
import styles from '../app/page.module.css'
import Link from 'next/link'
import { Heading,Flex,Text } from '@chakra-ui/react'

const Category = () => {
  
  return (
    <>
    <Flex justifyContent={'center'} alignItems={'center'}><Text color='gray.500' fontSize={20}  mb={10} fontFamily={'monospace'}>Choose your fav <span style={{fontSize:"35px", color:"gray.500", fontWeight:"500"}}>Category</span></Text></Flex>

    <div className={styles.grid}>
      
        <Link
          href="/questions/31"
          className={styles.card}
        >
          <h2>
           Anime and Manga 
          </h2>
        </Link>

        <Link
          href="/questions/21"
          className={styles.card}
        >
          <h2>
            Sports 
          </h2>
        </Link>

        <Link
          href="/questions/32"
          className={styles.card}
        >
          <h2>
            Animations 
          </h2>
        </Link>

        <Link
          href="/questions/27"
          className={styles.card}
        >
          <h2>
           Animals 
          </h2>
        </Link>

        <Link
          href="/questions/18"
          className={styles.card}
        >
          <h2>
          Computers 
          </h2>
         
        </Link>
        <Link
          href="/questions/11"
          className={styles.card}
        >
          <h2>
           Film 
          </h2>
          
        </Link>
        <Link
          href="/questions/14"
          className={styles.card}
        >
          <h2>
           Television 
          </h2>
         
        </Link>
        <Link
          href="/questions/17"
          className={styles.card}
        >
          <h2>
           Science and Nature
          </h2>
          
        </Link>
       
      </div>
      </>
  )
}

export default Category
