import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link'

const Facilitated = () => {
  return (
    <div className="py-16 lg:py-32">
        <div className="site-wrapper">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-6 w-full md:w-4/6 mx-auto text-center">
                    <h6 className='text-3xl md:text-4xl lg:text-5xl font-semibold !leading-tight'>The workshops will be facilitated by <span className='text-[--primary-colour]'>Chris Alderson</span> and <span className='text-[--primary-colour]'>Jon Harper-Slade</span></h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                  <div className="facility-card rounded-lg overflow-hidden relative">
                      <Image src="/events/energy-safety/chris-alderson.jpg" alt='' width={800} height={800} />
                      <div className="facility-card-gradient absolute bottom-0 left-0 right-0 h-32 p-8 gap-2 flex flex-row justify-between items-center">
                        <div className='flex flex-col'>
                          <h6 className='text-2xl text-white font-semibold'>Chris Alderson</h6>
                          <p className='text-base text-white font-medium'>CHASNZ, CEO</p>
                        </div>
                        <Link href="" target='_blank'><FaLinkedin className='text-white text-3xl hover:text-[#0072b1]' /></Link>
                      </div>
                  </div>
                  <div className="facility-card rounded-lg overflow-hidden relative">
                      <Image src="/events/energy-safety/jon-harper-slade.jpg" alt='' width={800} height={800} />
                      <div className="facility-card-gradient absolute bottom-0 left-0 right-0 h-32 p-8 gap-2 flex flex-row justify-between items-center">
                        <div className='flex flex-col'>
                          <h6 className='text-2xl text-white font-semibold'>Jon Harper-Slade</h6>
                          <p className='text-base text-white font-medium'>GM Health & Safety Innovation, CHASNZ</p>
                        </div>
                        <Link href="" target='_blank'><FaLinkedin className='text-white text-3xl hover:text-[#0072b1]' /></Link>
                      </div>
                  </div>

                  <div className="facility-card rounded-lg overflow-hidden relative">
                      <Image src="/events/energy-safety/chris-polaczuk.webp" alt='' width={800} height={800} />
                      <div className="facility-card-gradient absolute bottom-0 left-0 right-0 h-32 p-8 gap-2 flex flex-row justify-between items-center">
                        <div className='flex flex-col'>
                          <h6 className='text-2xl text-white font-semibold'>Chris Polaczuk</h6>
                          <p className='text-base text-white font-medium'>Ergonomics Programme Manager, CHASNZ</p>
                        </div>
                        <Link href="" target='_blank'><FaLinkedin className='text-white text-3xl hover:text-[#0072b1]' /></Link>
                      </div>
                  </div>

                  <div className="facility-card rounded-lg overflow-hidden relative">
                      <Image src="/events/energy-safety/stephven-kolose.webp" alt='' width={800} height={800} />
                      <div className="facility-card-gradient absolute bottom-0 left-0 right-0 h-32 p-8 gap-2 flex flex-row justify-between items-center">
                        <div className='flex flex-col'>
                          <h6 className='text-2xl text-white font-semibold'>Dr Stephven Kolose</h6>
                          <p className='text-base text-white font-medium'>Principal Ergonomist</p>
                        </div>
                        <Link href="" target='_blank'><FaLinkedin className='text-white text-3xl hover:text-[#0072b1]' /></Link>
                      </div>
                  </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Facilitated