import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-[--dark-blue] text-2xl font-semibold'>Project Whakatipu Content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="#whatis">What is Project Whakatipu?</Link></li>
                        <li><Link href="#objectives">Objectives</Link></li>
                        <li><Link href="#principles">Key Principles</Link></li>
                        <li><Link href="#support">Support</Link></li>
                        <li><Link href="http://cms.chasnz.org/wp-content/uploads/2024/05/ConstructionLeadingHealthSafetyandWell-BeingIndicators_CHASNZ_.pdf" target='_blank'>Lead & Lag Indicators</Link></li>
                        <li><Link href="https://www.hse.gov.uk/construction-dashboard/" target='_blank' className='flex flex-row items-center gap-2'>Resources <FiExternalLink /></Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-5xl text-[--dark-blue]'>Project Whakatipu</h4>
                    <p className='text-[--text-colour]'>Many organisations have a wealth of data that could prove useful for understanding how to achieve better health and safety performance. Project Whakatipu is an industry project to create a data lake asset for all New Zealand to benefit from. Organisations will share data in a safe, confidential way and therefore create a large data set, from which data scientists will seek actionable insight around what matters in creating a healthier and safer construction industry.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction