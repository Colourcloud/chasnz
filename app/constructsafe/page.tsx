import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/programmes/constructsafe/Header'
import Introduction from '@/components/programmes/constructsafe/Introduction'
import Resources from '@/components/programmes/constructsafe/Resources'
import Videos from '@/components/programmes/constructsafe/Videos'
import Rick from '@/components/programmes/constructsafe/Rick'


export const metadata: Metadata = {
  title: "CHASNZ - ConstructSafe",
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
    title: "CHASNZ - World Class Construction Health and Safety",
    description: "Shifting health and safety in construction from inconsistent compliance to consistent competence.",
    url: "https://www.chasnz.org/constructsafe", // Replace with your actual URL
    siteName: "CHASNZ",
    images: [
      {
        url: "https://www.chasnz.org/social/constructsafe.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "ConstructSafe Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHASNZ - World Class Construction Health and Safety",
    description: "Shifting health and safety in construction from inconsistent compliance to consistent competence.",
    images: ["https://www.chasnz.org/social/constructsafe.png"], // Replace with your actual image URL
  },
};

const page = () => {
  return (
    <>
    <Header />
    <Introduction />
    <Videos />
    <Resources />
    </>

  )
}

export default page