import React from 'react'
import { Metadata } from 'next'
import Navigation from '@/components/common/Navigation'
import Footer from '@/components/common/Footer'
import Subscribe from '@/components/common/Subscribe'
import AssessmentEmbed from '@/components/tools/AssessmentEmbed'
import AssessmentConsentForm from '@/components/tools/AssessmentConsentForm'

export const metadata: Metadata = {
    title: 'CHASNZ - Foundation Assessment Toolkit: Musculoskeletal Injuries',
}

const page = () => {
  return (
    <>
    <AssessmentConsentForm />
    <Navigation />
    <section className="h-[100px] bg-black"></section>
    <section className="min-h-screen bg-white">
          <AssessmentEmbed />
      </section>
    <Subscribe />
    </>
  )
}

export default page