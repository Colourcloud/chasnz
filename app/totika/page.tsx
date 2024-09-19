import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/programmes/totika/Header'
import Introduction from '@/components/programmes/totika/Introduction'
import Video from '@/components/programmes/totika/Video'
import Casestudies from '@/components/programmes/totika/Casestudies'
import Subscribe from '@/components/common/Subscribe'
import Partners from '@/components/programmes/totika/Partners'
import Prequalification from '@/components/programmes/totika/Prequalification'

export const metadata: Metadata = {
  title: "CHASNZ - Tōtika Programme",
  description: "Our Vision is to shift health and safety in the construction industry from inconsistent compliance to consistent competence, and to have healthy and safe workers as a natural outcome of good work.",
  keywords: [
    "construction safety",
    "health and safety",
    "workplace safety",
    "CHASNZ",
    "New Zealand construction",
    "safety compliance",
    "worker health",
    "construction industry",
    "safety standards",
    "occupational health"
  ],
  openGraph: {
    title: "CHASNZ - Tōtika Programme",
    description: "Shifting health and safety in construction from inconsistent compliance to consistent competence.",
    url: "https://www.chasnz.org/totika", // Replace with your actual URL
    siteName: "CHASNZ",
    images: [
      {
        url: "https://www.chasnz.org/social/totika.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Totika Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHASNZ - Tōtika Programme",
    description: "Shifting health and safety in construction from inconsistent compliance to consistent competence.",
    images: ["https://www.chasnz.org/social/totika.png"], // Replace with your actual image URL
  },
};

const page = () => {
  return (
    <>
    <Header />
    <Introduction />
    <Video />
    <Casestudies />
    <Prequalification />
    <Partners />
    <Subscribe />
    </>

  )
}

export default page