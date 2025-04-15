import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/events/masterclass-on-contractor-health-and-safety-management-exploration/Header'
import Introduction from '@/components/events/masterclass-on-contractor-health-and-safety-management-exploration/Introduction'
import Topics from '@/components/events/masterclass-on-contractor-health-and-safety-management-exploration/Topics'
import Schedule from '@/components/events/masterclass-on-contractor-health-and-safety-management-exploration/Schedule'
import Subscribe from '@/components/common/Subscribe'
import BookingCta from '@/components/events/masterclass-on-contractor-health-and-safety-management-exploration/BookingCta'
import Navigation from '@/components/common/Navigation'
import Video from '@/components/events/masterclass-on-contractor-health-and-safety-management-exploration/Video'

export const metadata: Metadata = {
    title: 'Masterclass on Contractor Health and Safety Management Exploration | CHASNZ',
    description: 'Calling all Health and Safety Practitioners and Procurement Managers! Masterclass on Contractor Health and Safety Management Exploration. Interactive presentations from 5 expert guest-speakers.',
  }

const page = () => {
  return (
    <>
    <Navigation />
    <Header />
    <Introduction />
    <Video />
    <Topics />
    <Schedule />
    <BookingCta />
    <Subscribe />
    </>
  )
}

export default page