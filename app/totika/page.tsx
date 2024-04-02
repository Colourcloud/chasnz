import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/programmes/totika/Header'
import Introduction from '@/components/programmes/totika/Introduction'

export const metadata: Metadata = {
    title: 'CHASNZ – Tōtika Programme',
  }

const page = () => {
  return (
    <>
    <Header />
    <Introduction />
    </>

  )
}

export default page