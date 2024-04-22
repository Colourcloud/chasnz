import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/concrete/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/concrete/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/concrete/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Concrete Services - Work Should Not Hurt',
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