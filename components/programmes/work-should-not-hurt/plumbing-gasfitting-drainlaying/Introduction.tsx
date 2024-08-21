import React from 'react'
import Link from 'next/link'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-black text-2xl font-semibold'>Other Trade Industries:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="/work-should-not-hurt/trades/building">Building</Link></li>
                        <li><Link href="/work-should-not-hurt/trades/roofing">Roofing</Link></li>
                        <li><Link href="/work-should-not-hurt/trades/glazing">Glazers</Link></li>
                        <li><Link href="/work-should-not-hurt/trades/brick-blocklaying">Brick & Blocklaying</Link></li>
                        <li><Link href="/work-should-not-hurt/trades/flooring">Flooring</Link></li>
                        <li><Link href="/work-should-not-hurt/trades/painting">Painting</Link></li>
                        <li><Link href="/work-should-not-hurt#trades" className='flex flex-row items-center gap-2'>View More <span><IoIosArrowDroprightCircle /></span></Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-8 lg:px-20">
                    <div className='pb-4 border-b-2'>
                        <div className="trade-stats w-full flex flex-col gap-6 md:flex-row justify-between">
                            <div className="trade-stat-container flex flex-col gap-3">
                                <h4 className='text-4xl lg:text-5xl font-semibold text-[--primary-colour] border-b-2 border-[--primary-colour] p-1'>39,000+</h4>
                                <p className='text-[--text-colour]'>Days off due to injury in 2020</p>
                            </div>
                            <div className="trade-stat-container flex flex-col gap-3">
                                <h4 className='text-4xl lg:text-5xl font-semibold text-[--primary-colour] border-b-2 border-[--primary-colour] p-1'>Plumbing</h4>
                                <p className='text-[--text-colour]'>Has the most strains and sprains of any trade</p>
                            </div>
                            <div className="trade-stat-container flex flex-col gap-3">
                                <h4 className='text-4xl lg:text-5xl font-semibold text-[--primary-colour] border-b-2 border-[--primary-colour] p-1'>Injuries</h4>
                                <p className='text-[--text-colour]'>Back, shoulder, wrist</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 mt-[3rem]'>
                        <h4 className='font-semibold text-5xl lg:text-6xl text-[--dark-blue] !leading-tight'>Plumbing, Gasfitting &amp; Drainlaying</h4>
                        <p className='text-[--text-colour]'>We have worked onsite alongside plumbers, gas fitters and drain layers to identify practical solutions to help you reduce the chance of pain and injury. Scroll down to view a wide range of resources to help you work smarter, not harder.</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h6 className='text-[--text-colour] font-semibold text-xl lg:text-2xl'>Explore the Work Should Not Hurt programme and discover how you can get involved in changing the way we work.</h6>
                        <p className='text-[--text-colour]'>The Work Should Not Hurt programme aims to make sure tradespeople can enjoy long, pain free careers and retire when they want to and not when forced to due to pain and injury. We publish a wide range of resources covering many work health and safety topics on working in the construction industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction