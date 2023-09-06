'use client';
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const Provider1 = ({children , session}) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default Provider1
