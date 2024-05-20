import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/data-tools-and-insights/Header'
import Introduction from '@/components/data-tools-and-insights/Introduction'
import Menus from '@/components/data-tools-and-insights/Menu'
import Subscribe from '@/components/common/Subscribe'

export const metadata: Metadata = {
    title: 'CHASNZ – Data Tools & Insights',
  }

const page = () => {
  return (
    <>
    <Header />
    <Introduction />
    <Menus />
    <Subscribe />
    </>
  )
}

export default page