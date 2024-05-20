import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/data-tools-and-insights/measuring-health-and-safety/Header'
import Introduction from '@/components/data-tools-and-insights/measuring-health-and-safety/Introduction'
import Subscribe from '@/components/common/Subscribe'
import Leadership from '@/components/data-tools-and-insights/measuring-health-and-safety/Leadership'

export const metadata: Metadata = {
    title: 'CHASNZ – Measuring Health & Safety',
  }

const page = () => {
  return (
    <>
    <Header />
    <Introduction />
    <Leadership />
    <Subscribe />
    </>
  )
}

export default page