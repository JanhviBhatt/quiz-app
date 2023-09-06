'use client'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import '../styles/globals.css'
import Navbar from '@components/Navbar'
import Provider1 from '@components/Provider1'
import { Provider } from 'react-redux'
import store from '@redux/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiz App',
  description: 'Great place for having fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Provider1>
        <Provider store={store}>

          <Navbar/>
        {children}
        </Provider>

        </Provider1>
        </Providers>
        </body>
    </html>
  )
}
