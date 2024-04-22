import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/roofing/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/roofing/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/roofing/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roofing - Work Should Not Hurt',
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