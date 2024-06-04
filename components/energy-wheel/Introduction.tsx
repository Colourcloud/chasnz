import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-black text-2xl font-semibold'>Energy Wheel Content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="#">Navigation Item</Link></li>
                        <li><Link href="#resources">Navigation Item</Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-5xl'>Energy Wheel</h4>
                    <p className='text-black text-xl lg:text-2xl font-semibold'>The CHASNZ Energy Wheel Guide to High Energy Hazards</p>
                    <p className='text-[--text-colour]'>The energy wheel is a simple tool used to help improve hazard recognition. If you can see more hazards, then you can avoid or work safely around them. Remember a hazard is something that has the potential to hurt you. The energy wheel runs through ten different categories of energy and describes potential &apos;high&apos; energy hazards, direct controls, and supporting controls associated with each hazard.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction