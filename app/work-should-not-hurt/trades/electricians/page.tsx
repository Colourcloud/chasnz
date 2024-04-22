import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/electricians/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/electricians/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/electricians/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Electricians - Work Should Not Hurt',
}


const page = () => {
  return (
    <>
        <Header />
        <Introduction />
        <Resources />
        <Subscribe />
    </>
  )
}

export default page