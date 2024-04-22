import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/glazing/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/glazing/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/glazing/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glazing - Work Should Not Hurt',
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