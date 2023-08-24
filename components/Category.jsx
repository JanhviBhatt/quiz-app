'use client'
import React, { useEffect } from 'react'
import styles from '../app/page.module.css'
import Link from 'next/link'
import { Heading,Flex,Text } from '@chakra-ui/react'

const Category = () => {
  
  return (
    <>
    <Flex justifyContent={'center'} alignItems={'center'} mt={15}><Text color='gray.500' fontSize={20} fontFamily={'monospace'}>Choose your fav <span style={{fontSize:"35px", color:"gray.500", fontWeight:"500"}}>Category</span></Text></Flex>

    <div className={styles.grid}>
        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Anime <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Social Media <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Sports <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           Food <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Link>
        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           Web Series <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Link>
        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           Web Series <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Link>
        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           Web Series <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Link>
        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           Web Series <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Link>
       
      </div>
      </>
  )
}

export default Category
