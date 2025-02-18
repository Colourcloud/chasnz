import React from 'react'
import { Metadata } from 'next'
import Navigation from '@/components/common/Navigation'
import Header from '@/components/having-a-hmmm/Header'
import Introduction from '@/components/having-a-hmmm/Introduction'
import Videos from '@/components/having-a-hmmm/Videos'
import Slider from '@/components/having-a-hmmm/Slider'
import Subscribe from '@/components/common/Subscribe'

export const metadata: Metadata = {
  title: 'CHASNZ - Have a Hmmm',
  description: 'ACCs Have a hmmmm campaign encourages people to stop and think about the consequences of injury before acting.',
}

const page = () => {
  return (
    <>
    <Navigation />
    <Header />
    <Introduction />
    <Videos />
    <Slider />
    <Subscribe />
    </>
  )
}

export default page