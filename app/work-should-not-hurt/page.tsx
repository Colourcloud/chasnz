import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import Navigation from '@/components/common/Navigation'
import Header from '@/components/programmes/work-should-not-hurt/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/Introduction'
import Trades from '@/components/programmes/work-should-not-hurt/Trades'
import Resources from '@/components/programmes/work-should-not-hurt/Resources'


export const metadata: Metadata = {
    title: 'CHASNZ – Work Should Not Hurt',
  }
  

const page = () => {
  return (
    <main className="">
        <Navigation />
        <Header />
        <Introduction />
        <Trades />
        <Resources />
    </main>
  )
}

export default page