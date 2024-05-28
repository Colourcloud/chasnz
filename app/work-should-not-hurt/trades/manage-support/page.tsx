import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/manage-support/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/manage-support/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/manage-support/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'
import PowerbiFrame from '@/components/programmes/work-should-not-hurt/PowerbiFrame'

export const metadata: Metadata = {
  title: 'Management & Support - Work Should Not Hurt',
}


const page = () => {
  return (
    <>
        <Header />
        <Introduction />
        <PowerbiFrame src="https://app.powerbi.com/view?r=eyJrIjoiZTU0YWE2NzYtYzVkNy00YTJkLTg1NTItOGU0YjllMmNiMWQ2IiwidCI6ImI0OGExNmY2LTM3ZDUtNDU1NS05OTljLTgyNDU5ZjFjZWExOCJ9" />
        <Resources />
        <Subscribe />
    </>
  )
}

export default page