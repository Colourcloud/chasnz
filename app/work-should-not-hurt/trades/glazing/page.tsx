import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/glazing/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/glazing/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/glazing/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'
import PowerbiFrame from '@/components/programmes/work-should-not-hurt/PowerbiFrame'

export const metadata: Metadata = {
  title: 'Glazing - Work Should Not Hurt',
}


const page = () => {
  return (
    <>
        <Header />
        <Introduction />
        <PowerbiFrame src="https://app.powerbi.com/view?r=eyJrIjoiNjVlZjAzYzQtMGFiZS00Yjg5LWJiMjgtOTViYWJiYmI2YWQ1IiwidCI6ImI0OGExNmY2LTM3ZDUtNDU1NS05OTljLTgyNDU5ZjFjZWExOCJ9" />
        <Resources />
        <Subscribe />
    </>
  )
}

export default page