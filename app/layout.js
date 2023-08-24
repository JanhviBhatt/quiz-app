import { Inter } from 'next/font/google'
import { Providers } from './providers'
import '../styles/globals.css'
import Navbar from '@components/Navbar'
import Provider from '@components/Provider'

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
          <Provider>
          <Navbar/>
        {children}
        </Provider>
        </Providers>
        </body>
    </html>
  )
}
