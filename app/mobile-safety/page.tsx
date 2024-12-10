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
        <section className='py-32 max-w-6xl mx-auto'>
            <h6 className='text-3xl text-center pb-12'>EXAMPLE PDF TO VIEW</h6>
            <iframe
            src="https://docs.google.com/gview?url=https://cms.chasnz.org/wp-content/uploads/2024/11/WSNH_TBT_ALL_HAVS_V2.1.pdf&embedded=true"
            style={{ width: '100%', height: '700px' }}
            frameBorder="0"
            title="PDF Viewer"
          ></iframe>
        </section>
    </section>
    </>
  )
}

export default page