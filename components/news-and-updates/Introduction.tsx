import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <section className='py-16 lg:py-32 border-b'>
      <div className="site-wrapper">
        <div className="flex flex-col gap-6 max-w-4xl mx-auto text-center">
          <h2 className='text-2xl md:text-4xl lg:text-4xl font-semibold'>Take a look at our latest articles below</h2>
          <p className='text-base md:text-lg'>Here, you'll find timely updates on new safety protocols, industry  standards, and best practices aimed at ensuring the wellbeing of New  Zealand's workforce.</p>
        </div>
      </div>
    </section>
  )
}

export default Introduction