import React from 'react'
import Header from '@/components/programmes/work-should-not-hurt/brick-blocklaying/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/brick-blocklaying/Introduction'
import Resources from '@/components/programmes/work-should-not-hurt/brick-blocklaying/Resources'
import Subscribe from '@/components/common/Subscribe'
import { Metadata } from 'next'
import PowerbiFrame from '@/components/programmes/work-should-not-hurt/PowerbiFrame'

export const metadata: Metadata = {
  title: 'Brick & Blocklaying - Work Should Not Hurt',
}


const page = () => {
  return (
    <>
        <Header />
        <Introduction />
        <PowerbiFrame src="https://app.powerbi.com/view?r=eyJrIjoiOTMwYmFjN2EtZDhkZC00NzllLWI3YmEtYThmNTdhN2ZmMzIwIiwidCI6ImI0OGExNmY2LTM3ZDUtNDU1NS05OTljLTgyNDU5ZjFjZWExOCJ9" />
        <Resources />
        <Subscribe />
    </>
  )
}

export default page