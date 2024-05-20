import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/brick-blocklaying/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/brick-blocklaying/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/brick-blocklaying/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brick & Blocklaying - Work Should Not Hurt',
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