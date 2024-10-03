import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/energy-wheel/Header'
import Introduction from '@/components/energy-wheel/Introduction'
import Flipbook from '@/components/energy-wheel/Flipbook'
import Resources from '@/components/energy-wheel/Resources'
import Subscribe from '@/components/common/Subscribe'
import Credits from '@/components/energy-wheel/Credits'

export const metadata: Metadata = {
    title: 'CHASNZ – Energy Based Safety',
  }

const page = () => {
  return (
    <>
    <Header />
    <Introduction />
    <Flipbook />
    <Resources />
    <Credits />
    <Subscribe />
    </>

  )
}

export default page