import React from 'react'
import Navigation from '@/components/common/Navigation'
import { Metadata } from 'next'
import Subscribe from '@/components/common/Subscribe'
import Header from '@/components/events/Header'
import Events from '@/components/events/Events'
import Introduction from '@/components/events/Introduction'
import Eventlist from '@/components/events/Eventlist'

export const metadata: Metadata = {
    title: 'CHASNZ – Events',
  }


const page = () => {
  return (
    <>
    <Navigation />
    <Header />
    <Introduction />
    <Events />
    {/* <Eventlist /> */}
    <Subscribe />
    </>
  )
}

export default page