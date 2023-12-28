"use client"

import { Provider } from 'react-redux'
import { store } from '../store'

import './globals.sass'
import { Montserrat } from 'next/font/google'

const montserratGoogle = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

import Header from '@/components/Header'
import { montserratRegular } from '@/public/fonts/font'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='phone:text-[20%] verticalphone:text-[25%] horizontalphone:text-[37.5%] tablet:text-[50%] laptop:text-[62.5%] monitor:text-[75%] screen:text-[87.5%]'>
      <Provider store={store}>
        <body className={`${montserratRegular.className} ${montserratGoogle.variable}`}>
          <Header></Header>
          {children}
          </body>
      </Provider>
    </html>
  )
}