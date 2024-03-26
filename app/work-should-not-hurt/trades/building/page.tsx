import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/building/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/building/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/building/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building - Work Should Not Hurt',
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