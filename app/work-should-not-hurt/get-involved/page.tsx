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
                        <li><Link href="/work-should-not-hurt#resources">Resources</Link></li>
                        <li><Link href="/work-should-not-hurt/wsnh-injury-dashboard">CHASNZ Claims and Injuries dashboard</Link></li>
                        <li><Link href="/work-should-not-hurt/foundation-assessment-toolkit-musculoskeletal-injuries">Foundation Assessment Toolkit: Musculoskeletal Injuries</Link></li>
                        <li><Link href="/have-a-hmmm">Have a hmmm in the workplace</Link></li>
                        <li><Link href="/work-should-not-hurt/get-involved">Get Involved</Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-6xl'>Get Involved!</h4>
                    <p className='text-[--text-colour] font-semibold'>Your ideas and input is vital to our success:</p>
                    <ul className='flex flex-col gap-2 text-[--text-colour] list-disc list-inside'>
                        <li>Use the WSNH Foundation Toolkit to start you off on your injury prevention journey</li>
                        <li>Share your ideas for injury prevention with us</li>
                        <li>Invite our Ergonomists to observe work on your site</li>
                        <li>Become a Work Should Not Hurt Ambassador</li>
                        <li>Participate in our research and trials</li>
                        <li>Follow and like us on <a href="https://www.instagram.com/workshouldnothurt/" target="_blank" className="underline text-[--primary-colour]">Instagram</a> and <a href="https://www.youtube.com/@WorkShouldNotHurt" target="_blank" className="underline text-[--primary-colour]">YouTube</a></li>
                    </ul>
                    <GetinvoledForm />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page