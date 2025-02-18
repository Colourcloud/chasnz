import React from 'react'
import Navigation from '@/components/common/Navigation'
import Header from '@/components/events/communication-and-culture/Header'
import Introduction from '@/components/events/communication-and-culture/Introduction'
import BookingCta from '@/components/events/communication-and-culture/BookingCta'
import Facilitated from '@/components/events/communication-and-culture/Facilitated'
import Subscribe from '@/components/common/Subscribe'
import Moreinfo from '@/components/events/communication-and-culture/Moreinfo'
import Topics from '@/components/events/communication-and-culture/Topics'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CHASNZ - Communication and Culture Event',
  description: 'You are invited to our FREE Masterclass Communication and Culture in-person event on Health and Safety Frontline Leadership in the Construction industry',
}

const page = () => {
  return (
    <>
    <Navigation />
    <Header />
    <Introduction />
    <Moreinfo />
    <Topics />
    <Facilitated />
    <Subscribe />
    <BookingCta />
    </>
  )
}

export default page