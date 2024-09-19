import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import Navigation from '@/components/common/Navigation'
import Header from '@/components/programmes/work-should-not-hurt/Header'
import Introduction from '@/components/programmes/work-should-not-hurt/Introduction'
import Trades from '@/components/programmes/work-should-not-hurt/Trades'
import Resources from '@/components/programmes/work-should-not-hurt/Resources'
import Subscribe from '@/components/common/Subscribe'


export const metadata: Metadata = {
  title: "CHASNZ - Work Should Not Hurt",
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
    title: "CHASNZ - Work Should Not Hurt",
    description: "Shifting health and safety in construction from inconsistent compliance to consistent competence.",
    url: "https://www.chasnz.org/work-should-not-hurt", // Replace with your actual URL
    siteName: "CHASNZ",
    images: [
      {
        url: "https://www.chasnz.org/social/wsnh.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Leadon Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHASNZ - Work Should Not Hurt",
    description: "Shifting health and safety in construction from inconsistent compliance to consistent competence.",
    images: ["https://www.chasnz.org/social/wsnh.png"], // Replace with your actual image URL
  },
};
  

const page = () => {
  return (
    <main className="">
        <Navigation />
        <Header />
        <Introduction />
        <Trades />
        <Resources />
        <Subscribe />
    </main>
  )
}

export default page