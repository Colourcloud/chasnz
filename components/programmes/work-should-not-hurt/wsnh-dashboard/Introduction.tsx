import React from 'react'
import Link from 'next/link'

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-black text-2xl font-semibold text-[--dark-blue]'>WSHN related content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="/work-should-not-hurt#resources">Resources</Link></li>
                        <li><Link href="/work-should-not-hurt/wsnh-injury-dashboard">CHASNZ Claims and Injuries dashboard</Link></li>
                        <li><Link href="/work-should-not-hurt/foundation-assessment-toolkit-musculoskeletal-injuries">Foundation Assessment Toolkit: Musculoskeletal Injuries</Link></li>
                        <li><Link href="/have-a-hmmm">Have a hmmm in the workplace</Link></li>
                        <li><Link href="/work-should-not-hurt/get-involved">Get Involved</Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-5xl text-[--dark-blue]'>CHASNZ Claims and Injuries dashboard</h4>
                    <p className='text-[--text-colour]'>Our partner ACC have shared their claims data with us to show you the cost of claims and injuries to our industry. Explore our interactive data tool below to see what this data can tell you</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction