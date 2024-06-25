import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full hidden lg:block lg:w-[30%]">
                    
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-6xl text-[--dark-blue]'>Events</h4>
                    <p className='text-[--text-colour]'>Throughout the year we bring together leading experts to share the latest insights and trends in construction health and safety in New Zealand. Join us for exclusive webinars and events designed to keep you at the forefront of industry standards and best practices.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction