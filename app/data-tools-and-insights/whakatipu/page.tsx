import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/data-tools-and-insights/whakatipu/Header'
import Introduction from '@/components/data-tools-and-insights/whakatipu/Introduction'
import Subscribe from '@/components/common/Subscribe'
import Whatis from '@/components/data-tools-and-insights/whakatipu/Whatis'
import Objectives from '@/components/data-tools-and-insights/whakatipu/Objectives'
import Principles from '@/components/data-tools-and-insights/whakatipu/Principles'
import Support from '@/components/data-tools-and-insights/whakatipu/Support'

export const metadata: Metadata = {
    title: 'CHASNZ – Project Whakatipu',
  }

const page = () => {
  return (
    <>
    <Header />
    <Introduction />
    <Whatis />
    <Objectives />
    <Principles />
    <Support />
    <Subscribe />
    </>
  )
}

export default page