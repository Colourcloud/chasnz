import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";

const Trades = () => {
  return (
    <section className="trades-section py-20 lg:py-32 bg-white">
        <div className="content-wrapper">
                <div className="trades-text w-full lg:w-3/4 flex flex-col gap-6">
                    <h4 className='text-3xl lg:text-4xl font-semibold'>We&apos;re doing the ground work to understand the challenges faced by our trades</h4>
                    <p className='text-xl font-medium'>Browse our list of trade related material below:</p>
                </div>
            <div className="trades-container flex flex-row mt-14 justify-between gap-16">
                <div className="trades-list w-full lg:w-[35%]">
                    <ul className='flex flex-col text-xl font-semibold'>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Building <span className='text-2xl'><BsArrowRight /></span></Link></li>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Scaffolding <span className='text-2xl'><BsArrowRight /></span></Link></li>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Roofing <span className='text-2xl'><BsArrowRight /></span></Link></li>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Plumbing, gasfitting & drainlaying <span className='text-2xl'><BsArrowRight /></span></Link></li>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Brick & blocklaying <span className='text-2xl'><BsArrowRight /></span></Link></li>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Painting <span className='text-2xl'><BsArrowRight /></span></Link></li>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Glazing <span className='text-2xl'><BsArrowRight /></span></Link></li>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Electricians <span className='text-2xl'><BsArrowRight /></span></Link></li>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Flooring <span className='text-2xl'><BsArrowRight /></span></Link></li>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Concrete Services <span className='text-2xl'><BsArrowRight /></span></Link></li>
                        <li><Link href="#" className='py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between'>Management & Support <span className='text-2xl'><BsArrowRight /></span></Link></li>
                    </ul>
                </div>
                <div className="trade-description flex-col gap-6 w-full lg:w-[65%] hidden md:flex">
                    <div className="trade-image">
                        <Image src="/programmes/wsnh/trade-images/building.jpg" alt="building image" width='800' height='800'></Image>
                    </div>
                    <div className="trade-information flex flex-col gap-4">
                        <h4 className='text-2xl font-semibold'>Building</h4>
                        <p>We have worked onsite alongside Builders to identify practical solutions to help you reduce the chance of pain and injury. It&apos;s about working smarter, not harder.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trades