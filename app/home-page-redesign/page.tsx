import React from 'react'
import Navigation from '@/components/common/Navigation'
import Header from '@/components/home-page-redesign/Header'
import Introduction from '@/components/home-page-redesign/Introduction'
import Programmes from '@/components/home-page-redesign/Programmes'
import NewsFeed from '@/components/common/NewsFeed'
import HeaderBanner from '@/components/home-page-redesign/HeaderBanner'
import Subscribe from '@/components/common/Subscribe'
import ParallaxSection from '@/components/home-page-redesign/Parallax'
import Gallery from '@/components/home-page-redesign/Gallery'
import Statistics from '@/components/home-page-redesign/Statistics'
import Resources from '@/components/home-page-redesign/Resources'
import News from '@/components/home-page-redesign/News'
import Linkedin from '@/components/home/Linkedin'


const page = () => {
  return (
    <>
    <NewsFeed />
    <Navigation />
    <Header />
    <HeaderBanner />
    <Introduction />
    <Programmes />
    <ParallaxSection />
    <Gallery />
    <Statistics />
    <Resources />
    <News />
    <Linkedin />
    <Subscribe />
    </>
  )
}

export default page