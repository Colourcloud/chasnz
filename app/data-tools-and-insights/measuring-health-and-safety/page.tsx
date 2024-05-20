import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/data-tools-and-insights/measuring-health-and-safety/Header'
import Introduction from '@/components/data-tools-and-insights/measuring-health-and-safety/Introduction'
import Subscribe from '@/components/common/Subscribe'
import Leadership from '@/components/data-tools-and-insights/measuring-health-and-safety/Leadership'
import Survey from '@/components/data-tools-and-insights/measuring-health-and-safety/Survey'

export const metadata: Metadata = {
    title: 'CHASNZ – Measuring Health & Safety',
  }

const page = () => {
  return (
    <>
    <Header />
    <Introduction />
    <Leadership />
    <Survey />
    <Subscribe />
    </>
  )
}

export default page