import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/programmes/constructsafe/Header'
import Introduction from '@/components/programmes/constructsafe/Introduction'
import Resources from '@/components/programmes/constructsafe/Resources'
import Videos from '@/components/programmes/constructsafe/Videos'
import Rick from '@/components/programmes/constructsafe/Rick'


export const metadata: Metadata = {
    title: 'CHASNZ – ConstructSafe',
  }

const page = () => {
  return (
    <>
    <Header />
    <Introduction />
    <Videos />
    <Rick />
    <Resources />
    </>

  )
}

export default page