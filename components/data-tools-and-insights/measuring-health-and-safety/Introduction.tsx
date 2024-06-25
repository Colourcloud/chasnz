import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-[--dark-blue] text-2xl font-semibold'>Measuring Health & Safety Content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="#leadership">Leadership framework tool</Link></li>
                        <li><Link href="#survey">Confidential safety climate survey</Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-5xl text-[--dark-blue]'>Measuring Health & Safety</h4>
                    <p className='text-[--text-colour]'>CHASNZ&apos;s priority is to improve the lives of workers in the New Zealand construction industry by reducing harm and improving health, safety and well-being. How we direct our efforts most effectively is often about getting good signals from our business as to what is going right and what needs exta attention.</p>
                    <p className='text-[--text-colour]'>How we direct our efforts most effectively is often about getting good signals from our business as to what is going right and what needs exta attention.</p>
                    <p className='text-[--text-colour]'>CHASNZ has made these simple but effective tools available for free use across the New Zealand construction sector. They can be used to gain an independent view as to how health and safety is perceived by the workforce and used as tools to pinpoint risk areas and drive improvement.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction