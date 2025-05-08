import React from 'react'
import Navigation from '@/components/common/Navigation'
import Header from '@/components/home/Header'
import Introduction from '@/components/home/Introduction'
import Programmes from '@/components/home/Programmes'
import NewsFeed from '@/components/common/NewsFeed'
import HeaderBanner from '@/components/home/HeaderBanner'
import Subscribe from '@/components/common/Subscribe'
import ParallaxSection from '@/components/home/Parallax'
import Gallery from '@/components/home/Gallery'
import Statistics from '@/components/home/Statistics'
import Resources from '@/components/home/Resources'
import News from '@/components/home/News'
import Linkedin from '@/components/home/Linkedin'


const page = () => {
  return (
    <>
    <NewsFeed />
    <Navigation />
    <Header />
    {/* <HeaderBanner /> */}
    {/* <Introduction /> */}
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