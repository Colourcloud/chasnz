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
                    <h2 className='text-xl md:text-2xl lg:text-5xl font-semibold'>Get ready for <span className='text-[--primary-colour]'>Friday 7th March.</span></h2>
                    <p className='text-base md:text-lg font-light'>We are sponsoring an in-person event and we want you to join us for one of the most dynamic Masterclass events you've attended!</p>
                </div>
                <div className='w-full lg:w-1/2 relative overflow-hidden rounded-lg'>
                    <Image src="/events/communication-and-culture/booking-image.jpg" alt="Acc logo" className='rounded-lg overflow-hidden' width={1000} height={1000} />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col gap-4 h-56 justify-end">
                     <div className="flex flex-col">
                        <h6 className='text-white text-2xl font-semibold'>Formosa Golf Resort, Auckland</h6>
                        <span className='text-white text-lg font-light'>110 Jack Lachlan Drive, Beachlands</span>
                     </div>
                     <div className="flex flex-col gap-2">
                        <h6 className='text-white text-xl font-semibold'>Friday 7th March, 9am to 4pm</h6>
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