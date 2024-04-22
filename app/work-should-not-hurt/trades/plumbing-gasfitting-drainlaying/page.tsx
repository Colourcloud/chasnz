import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/plumbing-gasfitting-drainlaying/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/plumbing-gasfitting-drainlaying/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/plumbing-gasfitting-drainlaying/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plumbing, Gasfitting & Drainlaying - Work Should Not Hurt',
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