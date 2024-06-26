import React from 'react'
import { Metadata } from 'next'
import Navigation from '@/components/common/Navigation'
import Subscribe from '@/components/common/Subscribe'
import Header from '@/components/about/Header'
import Introduction from '@/components/about/Introduction'
import Board from '@/components/about/Board'
import Team from '@/components/about/Team'
import Milestones from '@/components/about/Milestones'

export const metadata: Metadata = {
    title: 'CHASNZ – Learn more about chasnz',
  }

  

const page = () => {
  return (
   <>
   <Navigation />
   <Header />
   <Introduction />
    <Milestones />
   <Board />
   <Team />
   <Subscribe />
   </>
  )
}

export default page