import React from 'react'
import Navigation from '@/components/common/Navigation'
import Header from '@/components/home-page-redesign/Header'
import Introduction from '@/components/home-page-redesign/Introduction'
import NewsFeed from '@/components/common/NewsFeed'
import HeaderBanner from '@/components/home-page-redesign/HeaderBanner'
const page = () => {
  return (
    <>
    <NewsFeed />
    <Navigation />
    <Header />
    <HeaderBanner />
    <Introduction />
    </>
  )
}

export default page