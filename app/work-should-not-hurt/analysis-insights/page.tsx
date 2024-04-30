import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/programmes/work-should-not-hurt/Header'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'CHASNZ – Work Should Not Hurt - Get Involved',
  }

const page = () => {
  return (
    <>
    <Header />
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-black text-2xl font-semibold'>WSHN related content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="/work-should-not-hurt#trades">Trade Specific Information</Link></li>
                        <li><Link href="#">Analysis & Insights</Link></li>
                        <li><Link href="/work-should-not-hurt/get-involved">Get Involved</Link></li>
                        <li><Link href="/work-should-not-hurt#resources">Resources</Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 lg:ml-[8rem]">
                    <h4 className='font-bold text-4xl lg:text-6xl'>Analysis &amp; Insights</h4>
                    <p className='text-[--text-colour]'>Work Should Not Hurt is proud to partnership with ACC. Our shared goal is to make a difference in the lives of our tradespeople.</p>
                    <p className='text-[--text-colour]'>ACC data powers our programme; they have shared this data with us so we can share it with you.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page