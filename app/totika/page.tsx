import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/programmes/totika/Header'
import Introduction from '@/components/programmes/totika/Introduction'
import Video from '@/components/programmes/totika/Video'
import Casestudies from '@/components/programmes/totika/Casestudies'
import Subscribe from '@/components/common/Subscribe'
import Partners from '@/components/programmes/totika/Partners'
import Prequalification from '@/components/programmes/totika/Prequalification'

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
    <Prequalification />
    <Partners />
    <Subscribe />
    </>

  )
}

export default page