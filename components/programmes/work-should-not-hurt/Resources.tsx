import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs";

const Resources = () => {
  return (
   <section className="resource-section pb-20 lg:pb-32 bg-white">
    <div className="content-wrapper">
        <div className="resource-container">
            <div className="resource-heading">
                <h4 className='text-2xl font-semibold'>Browse “Work Should Not Hurt” resources to get you site-ready</h4>
            </div>
        </div>
    </div>
    <div className="resourcec-filters py-8 bg-gray-100 w-full mt-10 overflow-x-scroll">
        <div className="content-wrapper flex items-center flex-row gap-6 lg:gap-16">
            <p className='font-medium text-sm text-gray-500 whitespace-nowrap'>Filter by type:</p>
            <ul className='flex flex-row gap-6 lg:gap-16 text-gray-600 items-center'>
                <li className='whitespace-nowrap'>All</li>
                <li className='whitespace-nowrap'>Guidance</li>
                <li className='whitespace-nowrap'>Posters</li>
                <li className='whitespace-nowrap'>Research &amp; Innovation</li>
                <li className='whitespace-nowrap'>Toolbox Talks</li>
            </ul>
        </div>
    </div>

    <div className="resource-layout mt-10">
            <div className="content-wrapper">
                <div className="resource-grid">
                <div className="resource-card flex flex-row items-center justify-between pr-0 lg:pr-6">
                        <div className='flex flex-row gap-3 items-center'>
                        <div className="resource-image">
                            <Image src="/programmes/wsnh/trade-images/resources/1.webp" alt="building image" width='300' height='300'></Image>
                        </div>
                        <div className="resource-card_information flex flex-col gap-2 p-6">
                            <div>
                                <h4 className='text-lg md:text-xl font-medium'>Guide to site access requirements</h4>
                                <p className='text-sm font-light hidden md:block'>To address inconsistency of people entering and working on our construction sites, CHASNZ worked...</p>
                            </div>
                            <span className='text-sm font-light'>August 24, 2023</span>
                        </div>
                        </div>
                        <div className="card-cta hidden lg:block">
                            <span className='text-2xl'><BsArrowRight /></span>
                        </div>
                    </div>
                    <div className="resource-card flex flex-row items-center justify-between pr-0 lg:pr-6">
                        <div className='flex flex-row gap-3 items-center'>
                        <div className="resource-image">
                            <Image src="/programmes/wsnh/trade-images/resources/2.webp" alt="building image" width='300' height='300'></Image>
                        </div>
                        <div className="resource-card_information flex flex-col gap-2 p-6">
                            <div>
                                <h4 className='text-lg md:text-xl font-medium'>Guide to site access requirements</h4>
                                <p className='text-sm font-light hidden md:block'>To address inconsistency of people entering and working on our construction sites, CHASNZ worked...</p>
                            </div>
                            <span className='text-sm font-light'>August 24, 2023</span>
                        </div>
                        </div>
                        <div className="card-cta hidden lg:block">
                            <span className='text-2xl'><BsArrowRight /></span>
                        </div>
                    </div>
                    <div className="resource-card flex flex-row items-center justify-between pr-0 lg:pr-6">
                        <div className='flex flex-row gap-3 items-center'>
                        <div className="resource-image">
                            <Image src="/programmes/wsnh/trade-images/resources/3.webp" alt="building image" width='300' height='300'></Image>
                        </div>
                        <div className="resource-card_information flex flex-col gap-2 p-6">
                            <div>
                                <h4 className='text-lg md:text-xl font-medium'>Guide to site access requirements</h4>
                                <p className='text-sm font-light hidden md:block'>To address inconsistency of people entering and working on our construction sites, CHASNZ worked...</p>
                            </div>
                            <span className='text-sm font-light'>August 24, 2023</span>
                        </div>
                        </div>
                        <div className="card-cta hidden lg:block">
                            <span className='text-2xl'><BsArrowRight /></span>
                        </div>
                    </div>
                    <div className="resource-card flex flex-row items-center justify-between pr-0 lg:pr-6">
                        <div className='flex flex-row gap-3 items-center'>
                        <div className="resource-image">
                            <Image src="/programmes/wsnh/trade-images/resources/4.webp" alt="building image" width='300' height='300'></Image>
                        </div>
                        <div className="resource-card_information flex flex-col gap-2 p-6">
                            <div>
                                <h4 className='text-lg md:text-xl font-medium'>Guide to site access requirements</h4>
                                <p className='text-sm font-light hidden md:block'>To address inconsistency of people entering and working on our construction sites, CHASNZ worked...</p>
                            </div>
                            <span className='text-sm font-light'>August 24, 2023</span>
                        </div>
                        </div>
                        <div className="card-cta hidden lg:block">
                            <span className='text-2xl'><BsArrowRight /></span>
                        </div>
                    </div>
                    <div className="resource-card flex flex-row items-center justify-between pr-0 lg:pr-6">
                        <div className='flex flex-row gap-3 items-center'>
                        <div className="resource-image">
                            <Image src="/programmes/wsnh/trade-images/resources/5.webp" alt="building image" width='300' height='300'></Image>
                        </div>
                        <div className="resource-card_information flex flex-col gap-2 p-6">
                            <div>
                                <h4 className='text-lg md:text-xl font-medium'>Guide to site access requirements</h4>
                                <p className='text-sm font-light hidden md:block'>To address inconsistency of people entering and working on our construction sites, CHASNZ worked...</p>
                            </div>
                            <span className='text-sm font-light'>August 24, 2023</span>
                        </div>
                        </div>
                        <div className="card-cta hidden lg:block">
                            <span className='text-2xl'><BsArrowRight /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Resources