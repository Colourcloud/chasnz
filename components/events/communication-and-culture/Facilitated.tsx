import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link'

const Facilitated = () => {
  return (
    <div className="py-16 lg:py-32 bg-[--dark-blue]">
        <div className="site-wrapper">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-6 w-full md:w-4/6 mx-auto text-center">
                    <h6 className='text-3xl md:text-4xl lg:text-4xl font-semibold text-white !leading-tight'>The event will be facilitated by <br /> <span className='text-[--primary-colour]'>Helen Lingard,</span> <span className='text-[--primary-colour]'>Stephen Harvey</span> and <span className='text-[--primary-colour]'>Derek Toner</span></h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  <div className="facility-card rounded-lg overflow-hidden relative">
                      <Image src="/events/communication-and-culture/helen.jpg" alt='Helen Lingard' width={800} height={800} />
                      <div className="facility-card-gradient absolute bottom-0 left-0 right-0 h-32 p-8 gap-2 flex flex-row justify-between items-center">
                        <div className='flex flex-col'>
                          <h6 className='text-2xl text-white font-semibold'>Dist. Prof Helen Lingard</h6>
                          {/* <p className='text-base text-white font-medium'>CHASNZ, CEO</p> */}
                        </div>
                      </div>
                  </div>
                  <div className="facility-card rounded-lg overflow-hidden relative">
                      <Image src="/events/communication-and-culture/stephen-harvey.jpg" alt='Stephen Harvey' width={800} height={800} />
                      <div className="facility-card-gradient absolute bottom-0 left-0 right-0 h-32 p-8 gap-2 flex flex-row justify-between items-center">
                        <div className='flex flex-col'>
                          <h6 className='text-2xl text-white font-semibold'>Stephen Harvey</h6>
                        </div>
                      </div>
                  </div>

                  <div className="facility-card rounded-lg overflow-hidden relative">
                      <Image src="/events/communication-and-culture/darek-toner.jpg" alt='Derek Toner' width={800} height={800} />
                      <div className="facility-card-gradient absolute bottom-0 left-0 right-0 h-32 p-8 gap-2 flex flex-row justify-between items-center">
                        <div className='flex flex-col'>
                          <h6 className='text-2xl text-white font-semibold'>Derek Toner</h6>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facilitated