'use client'
import React from 'react'
import {loader} from '../public/assets/icons/loader.gif'
import { Flex } from '@chakra-ui/react'
import { ColorRing } from 'react-loader-spinner'
const Loader = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <ColorRing
  visible={true}
  height="100"
  width="100"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
    </Flex>
  )
}

export default Loader
