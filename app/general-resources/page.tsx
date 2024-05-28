import React from 'react'
import Navigation from '@/components/common/Navigation'
import { Metadata } from 'next'
import Subscribe from '@/components/common/Subscribe'
import Header from '@/components/general-resources/Header'
import Introduction from '@/components/general-resources/Introduction'
import Resources from '@/components/general-resources/Resources'

export const metadata: Metadata = {
    title: 'CHASNZ – General Resources',
  }


const page = () => {
  return (
    <>
    <Navigation />
    <Header />
    <Introduction />
    <Resources />
    <Subscribe />
    </>
  )
}

export default page