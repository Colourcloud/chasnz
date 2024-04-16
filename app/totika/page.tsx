import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/programmes/totika/Header'
import Introduction from '@/components/programmes/totika/Introduction'
import Video from '@/components/programmes/totika/Video'
import Casestudies from '@/components/programmes/totika/Casestudies'
import Subscribe from '@/components/common/Subscribe'

export const metadata: Metadata = {
    title: 'CHASNZ – Tōtika Programme',
  }

const page = () => {
  return (
    <>
    <Header />
    <Introduction />
    <Video />
    <Casestudies />
    <Subscribe />
    </>

  )
}

export default page