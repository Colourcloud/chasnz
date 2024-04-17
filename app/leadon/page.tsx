import React from 'react'
import Header from '@/components/programmes/leadon/Header'
import Navigation from '@/components/common/Navigation'
import Introduction from '@/components/programmes/leadon/Introduction'
import { Metadata } from 'next'
import Subscribe from '@/components/common/Subscribe'

export const metadata: Metadata = {
    title: 'CHASNZ – Lead On. Programme',
  }

const page = () => {
  return (
   <>
   <Navigation />
   <Header />
   <Introduction />
   <Subscribe />
   </>
  )
}

export default page