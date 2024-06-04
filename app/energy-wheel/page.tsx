import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/energy-wheel/Header'
import Introduction from '@/components/energy-wheel/Introduction'

export const metadata: Metadata = {
    title: 'CHASNZ – Energy Wheel',
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