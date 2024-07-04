import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/roofing/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/roofing/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/roofing/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'
import PowerbiFrame from '@/components/programmes/work-should-not-hurt/PowerbiFrame'

export const metadata: Metadata = {
  title: 'Roofing - Work Should Not Hurt',
}


const page = () => {
  return (
    <>
        <Header />
        <Introduction />
        <Resources />
        <PowerbiFrame src="https://app.powerbi.com/view?r=eyJrIjoiZmNhYjFhZWEtYjU1My00YzY2LTkwZTYtZThkOTViZDRhMTk2IiwidCI6ImI0OGExNmY2LTM3ZDUtNDU1NS05OTljLTgyNDU5ZjFjZWExOCJ9" />
        <Subscribe />
    </>
  )
}

export default page