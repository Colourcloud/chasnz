import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/programmes/work-should-not-hurt/building/Header'
import Head from 'next/head'
import Navigation from '@/components/common/Navigation'
import Introduction from '@/components/programmes/work-should-not-hurt/building/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/building/Resources'
import Subscribe from '@/components/common/Subscribe'

const page = () => {
  return (
    <>
        <Header />
        <Introduction />
        <Resources />
        <Subscribe />
    </>
  )
}

export default page