import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/manage-support/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/manage-support/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/manage-support/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Management & Support - Work Should Not Hurt',
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