import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/painting/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/painting/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/painting/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'
import PowerbiFrame from '@/components/programmes/work-should-not-hurt/PowerbiFrame'

export const metadata: Metadata = {
  title: 'Painting - Work Should Not Hurt',
}


const page = () => {
  return (
    <>
        <Header />
        <Introduction />
        <PowerbiFrame src="https://app.powerbi.com/view?r=eyJrIjoiMzVlYmExOTMtY2FjNS00ZmNmLTllN2EtNTNkNmE1ZjVhMTkxIiwidCI6ImI0OGExNmY2LTM3ZDUtNDU1NS05OTljLTgyNDU5ZjFjZWExOCJ9" />
        <Resources />
        <Subscribe />
    </>
  )
}

export default page