import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from '@/components/common/Navigation'
import Header from '@/components/events/energy-based-safety/Header'
import Introduction from '@/components/events/energy-based-safety/Introduction'
import Subscribe from '@/components/common/Subscribe'
import Facilitated from '@/components/events/energy-based-safety/Facilitated'

export const metadata: Metadata = {
        title: 'CHASNZ – Energy Based Safety Workshops',
        description: 'Learn all about Energy Based Safety to help improve hazard recognition',
    }

const page = () => {
  return (
    <>
    <Navigation />
    <Header />
    <div className="book-now-button fixed bottom-0 left-0 right-0 w-full py-4 bg-[#1C242E] px-4 z-[999]">
        <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center'>
            <p className='text-white text-sm md:text-lg font-semibold'>Register for the workshops before spaces run out!</p>
            <button className='book-event-button resource-button transition-all duration-200 hover:bg-[#56D54F] !self-center'>Register Now</button>
        </div>
    </div>
    <Introduction />
    <div className="py-16 lg:py-24 bg-[--dark-blue]">
        <div className="site-wrapper">
            <div className="flex flex-col gap-8 justify-center items-center">
                <div className="w-full md:w-4/5 text-center">
                    <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold !leading-tight text-white'>We have 3 hour FREE workshops being held in <span className='text-[--primary-colour]'>Auckland,</span> <span className='text-[--primary-colour]'>Wellington</span> and <span className='text-[--primary-colour]'>Christchurch.</span></h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8 md:mt-16 max-w-7xl mx-auto">

                    <div className="grid-card rounded-lg overflow-hidden relative h-96" id="auckland-card">
                        <div className="absolute top-0 right-0 bg-[--primary-colour] flex flex-col justify-center items-center py-2 px-8 rounded-bl-lg">
                            <p className='text-white text-lg font-semibold'><span>XX</span>/100</p>
                            <span className='text-white text-xs'>Spots left</span>
                        </div>
                        <div className="absolute bottom-0 w-full bg-black/75 flex flex-col gap-5 text-left p-5 justify-between min-h-[195px]">
                            <div className='flex flex-col'>
                                <h5 className='text-2xl text-white font-semibold'>Auckland</h5>
                                <p className='text-sm text-white'>Royal Oaks Bowls, 146 Selwyn Street, Onehunga</p>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h6 className='text-lg text-white font-semibold'>Wednesday 6th November 2024</h6>
                                <p className='text-sm text-white'>8.30am to 12pm</p>
                                <button className='book-event-button text-[--primary-colour] font-semibold mt-3' id="auckland-button">Register Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid-card rounded-lg bg-black overflow-hidden relative h-96" id="wellington-card">
                        <div className="absolute top-0 right-0 bg-[--primary-colour] flex flex-col justify-center items-center py-2 px-8 rounded-bl-lg">
                            <p className='text-white text-lg font-semibold'><span>XX</span>/100</p>
                            <span className='text-white text-xs'>Spots left</span>
                        </div>
                        <div className="absolute bottom-0 w-full bg-black/75 flex flex-col gap-5 text-left p-5 justify-between min-h-[195px]">
                            <div className='flex flex-col'>
                                <h5 className='text-2xl text-white font-semibold'>Wellington</h5>
                                <p className='text-sm text-white'>Boulcott&apos;s Farm Heritage Golf Club. 33 Military Road. Boulcott.</p>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h6 className='text-lg text-white font-semibold'>Thursday 7th November 2024</h6>
                                <p className='text-sm text-white'>8.30am to 12pm</p>
                                <button className='book-event-button text-[--primary-colour] font-semibold mt-3' id="wellington-button">Register Now</button>
                            </div>
                        </div>
                    </div>

                   <div className="grid-card rounded-lg bg-black overflow-hidden relative h-96" id="christchurch-card">
                        <div className="absolute top-0 right-0 bg-[--primary-colour] flex flex-col justify-center items-center py-2 px-8 rounded-bl-lg">
                            <p className='text-white text-lg font-semibold'><span>XX</span>/100</p>
                            <span className='text-white text-xs'>Spots left</span>
                        </div>
                        <div className="absolute bottom-0 w-full bg-black/75 flex flex-col gap-5 text-left p-5 justify-between min-h-[195px]">
                            <div className='flex flex-col'>
                                <h5 className='text-2xl text-white font-semibold'>Christchurch</h5>
                                <p className='text-sm text-white'>Russley Golf Club and Function Centre, 428 Memorial Avenue</p>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h6 className='text-lg text-white font-semibold'>Monday 4th November 2024</h6>
                                <p className='text-sm text-white'>8.30am to 12pm</p>
                                <button className='book-event-button text-[--primary-colour] font-semibold mt-3' id="christchurch-button">Register Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <Facilitated />
    <Subscribe />
    </>
  )
}

export default page