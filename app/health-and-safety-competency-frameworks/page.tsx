import React from 'react'
import Header from '@/components/health-and-safety-competency-frameworks/Header'
import Introduction from '@/components/health-and-safety-competency-frameworks/Introduction'
import Frameworks from '@/components/health-and-safety-competency-frameworks/Frameworks'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Health and Safety Competency Frameworks | CHASNZ',
  description: 'We have developed a range of Health and Safety Competency framework documents for the Trades Sector, allowing those who design and contribute to construction health and safety training content to align with ConstructSafe Trades Health and Safety Competency assessment for specific trades.',
}

const page = () => {
  return (
   <>
    <Header />
    <Introduction />
    <Frameworks />
    <Subscribe />
   </>
  )
}

export default page