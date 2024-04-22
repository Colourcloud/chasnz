import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/painting/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/painting/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/painting/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Painting - Work Should Not Hurt',
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