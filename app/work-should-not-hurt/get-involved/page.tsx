import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/programmes/work-should-not-hurt/Header'
import Link from 'next/link'
import GetinvoledForm from '@/components/programmes/work-should-not-hurt/GetinvoledForm'

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
                        <li><Link href="#">Get Involved</Link></li>
                        <li><Link href="/work-should-not-hurt#resources">Resources</Link></li>
                        <li><Link href="/work-should-not-hurt/wsnh-injury-dashboard">CHASNZ Claims and Injuries dashboard</Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-6xl'>Get Involved</h4>
                    <p className='text-[--text-colour]'>We can&apos;t do this on our own. Work Should Not Hurt is a participatory ergonomics programme. Put simply, this means actively involving workers in developing and implementing changes to the way work is done to improve productivity and reduce the risks to safety and health. Let&apos;s join forces to support your industry. Together we can take steps to reduce preventable sprains and strains in the construction industry.</p>
                    <GetinvoledForm />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page