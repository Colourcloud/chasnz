import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/building/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/building/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/building/Resources'
import Subscribe from '@/components/common/Subscribe'
import PowerbiFrame from '@/components/programmes/work-should-not-hurt/PowerbiFrame'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building - Work Should Not Hurt',
}


const page = () => {
  return (
    <>
        <Header />
        <Introduction />
        <PowerbiFrame src="https://app.powerbi.com/view?r=eyJrIjoiMTg3Y2IyMmQtN2MyOC00NmQ2LWJjZTctODM4YjQwMDEyYjZkIiwidCI6ImI0OGExNmY2LTM3ZDUtNDU1NS05OTljLTgyNDU5ZjFjZWExOCJ9" />
        <Resources />
        <Subscribe />
    </>
  )
}

export default page