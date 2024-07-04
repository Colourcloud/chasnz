import React from 'react'
import Navigation from '@/components/common/Navigation'
import { Metadata } from 'next'
import Subscribe from '@/components/common/Subscribe'
import Header from '@/components/news-and-updates/Header'
import News from '@/components/news-and-updates/News'
import Introduction from '@/components/news-and-updates/Introduction'
import Newslist from '@/components/news-and-updates/Newslist'

export const metadata: Metadata = {
    title: 'CHASNZ – News & Updates',
  }


const page = () => {
  return (
    <>
    <Navigation />
    <Header />
    <Introduction />
    <News />
    <Newslist />
    <Subscribe />
    </>
  )
}

export default page