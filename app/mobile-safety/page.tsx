import React from 'react'
import Link from 'next/link'
import Header from '@/components/mobile-safety/Header'
import Vehicles from '@/components/mobile-safety/Vehicles'

const page = () => {
  return (
    <>
    <section className='mobile-safety-content'>
        <Header />
        <Vehicles />
    </section>
    </>
  )
}

export default page