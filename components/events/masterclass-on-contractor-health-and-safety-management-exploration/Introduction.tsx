'use client'

import React from 'react'
import Image from 'next/image'
import BookingForm from './BookingForm'

const Introduction = () => {
  return (
    <section className="py-12 lg:py-32">
        <div className="site-wrapper">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-center">
                <div className='flex flex-col gap-6  w-full lg:w-2/5'>
                    <h2 className='text-xl md:text-2xl lg:text-5xl font-semibold'>You&apos;ll want to attend this <span className='text-[--primary-colour]'>FREE</span> in-person event!</h2>
                    <p className='text-base md:text-lg font-semibold'>We have limited numbers, so register quickly!</p>
                </div>
                <div className='w-full lg:w-1/2 relative overflow-hidden rounded-lg'>
                    <Image src="/events/masterclass-on-contractor-health/booking-card-image.jpg" alt="SOHO Hotel" className='rounded-lg overflow-hidden' width={1000} height={1000} />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col gap-4 h-72 justify-end">
                     <div className="flex flex-col">
                        <h6 className='text-white text-2xl font-semibold'>SOHO Hotel</h6>
                        <span className='text-white text-lg font-light'>180 Stoddard Road, Mount Roskill. Auckland 1041</span>
                     </div>
                     <div className="flex flex-col gap-2">
                        <h6 className='text-white text-xl font-semibold'>9am, Thursday 15th May 2025</h6>
                        {/* <button className='text-base text-[--primary-colour] font-semibold self-start'>Register Now</button> */}
                     </div>
                    </div>
                    {/* <div className="absolute top-0 right-0 bg-[--primary-colour] text-white py-3 px-6 rounded-bl-lg rounded-tr-lg">
                      <span className='text-sm font-semibold'>Not many spots left!</span>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <BookingForm onClose={() => {}} /> */}
    </section>
  )
}

export default Introduction