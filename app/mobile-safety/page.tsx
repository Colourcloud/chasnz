import React from 'react'
import Link from 'next/link'
import Header from '@/components/mobile-safety/Header'
import Vehicles from '@/components/mobile-safety/Vehicles'
import ScrollSection from '@/components/mobile-safety/ScrollSection'
import PdfHeader from '@/components/mobile-safety/PdfHeader'
import HorizontalScrollSection from '@/components/mobile-safety/Horiz'
import GreenParallax from '@/components/common/GreenParallax'
import VehiclesScroll from '@/components/mobile-safety/VehicleScroll'
import Subscribe from '@/components/common/Subscribe'
import Contact from '@/components/mobile-safety/Contact'
import MobileHorizontalScroll from '@/components/mobile-safety/MobileHoriz'

const page = () => {
  return (
    <>
    <section className='mobile-safety-content'>
        <Header />
        {/* <Vehicles /> */}
        <VehiclesScroll />
        <ScrollSection />
        <PdfHeader />
        <HorizontalScrollSection />
        <MobileHorizontalScroll />
        <Contact />
        <Subscribe />
    </section>
    </>
  )
}

export default page