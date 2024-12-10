import React from 'react'
import Link from 'next/link'
import Header from '@/components/mobile-safety/Header'
import Vehicles from '@/components/mobile-safety/Vehicles'
import ScrollSection from '@/components/mobile-safety/ScrollSection'
import PdfHeader from '@/components/mobile-safety/PdfHeader'

const page = () => {
  return (
    <>
    <section className='mobile-safety-content'>
        <Header />
        <Vehicles />
        <ScrollSection />
        <PdfHeader />
    </section>
    </>
  )
}

export default page