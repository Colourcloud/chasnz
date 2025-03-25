import React from 'react'
import { Metadata } from 'next'
import Navigation from '@/components/common/Navigation';
import Subscribe from '@/components/common/Subscribe';
import HeaderNew from '@/components/programmes/leadon/HeaderNew';
import IntroductionNew from '@/components/programmes/leadon/IntroductionNew';
import Videos from '@/components/programmes/leadon/Videos';
import ParallaxSection from '@/components/programmes/leadon/Parallax';
import Gallery from '@/components/programmes/leadon/Gallery';
import HorizontalScrollSection from '@/components/programmes/leadon/Horiz';
import MobileHoriz from '@/components/programmes/leadon/MobileHoriz';

export const metadata: Metadata = {
    title: "CHASNZ - Lead On. Programme",
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
      title: "CHASNZ - Lead On. Programme",
      description: "Shifting health and safety in construction from inconsistent compliance to consistent competence.",
      url: "https://www.chasnz.org/leadon", // Replace with your actual URL
      siteName: "CHASNZ",
      images: [
        {
          url: "https://www.chasnz.org/social/leadon.png", // Replace with your actual image URL
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
      title: "CHASNZ - Lead On. Programme",
      description: "Shifting health and safety in construction from inconsistent compliance to consistent competence.",
      images: ["https://www.chasnz.org/social/leadon.png"], // Replace with your actual image URL
    },
  };

const page = () => {
  return (
    <>
    <Navigation />
    <HeaderNew />
    <IntroductionNew />
    <Videos />
    <ParallaxSection />
    <Gallery />
    <HorizontalScrollSection />
    <MobileHoriz />
    <Subscribe />
    </>
  )
}

export default page