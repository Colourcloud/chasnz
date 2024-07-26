import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-[--dark-blue] text-2xl font-semibold'>ConstructSafe related content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="/constructsafe/book-assessment/">Book an assessment</Link></li>
                        <li><Link href="#resources">Learning resources</Link></li>
                        <li><Link href="http://myconstructsafe.kiwi/Login/TestCenter" target='_blank' className='flex flex-row items-center gap-2'>Log in to the portal <FiExternalLink /></Link></li>
                        <li><Link href="http://constructsafe.kiwi/check/profile" target='_blank' className='flex flex-row items-center gap-2'>Check a Profile <FiExternalLink /></Link></li>
                        <li><Link href="http://www.constructsafe.kiwi/Test/Worker.html" target='_blank' className='flex flex-row items-center gap-2'>Individual Pre-registration <FiExternalLink /></Link></li>
                        <li><Link href="http://www.constructsafe.kiwi/Test/Company.html" target='_blank' className='flex flex-row items-center gap-2'>Free company access sign-up <FiExternalLink /></Link></li>
                        <li><Link href="http://www.constructsafe.kiwi/SignUp/NewTestCenter.html" target='_blank' className='flex flex-row items-center gap-2'>Become an assessment provider <FiExternalLink /></Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-5xl text-[--dark-blue]'>Book an assessment</h4>
                    <p className='text-[--dark-blue] text-xl lg:text-2xl font-semibold'>How much does an assessment cost?</p>
                    <p className='text-[--text-colour]'>ConstructSafe receives $60 for every Knowledge Assessment completed &#40;with the exception of free Foundation Knowledge Assessment re-tests&#41;.</p>
                    <p className='text-[--text-colour]'>Our Assessment Providers charge something on top of the $60 to cover their own cost etc and pricing varies from provider to provider, so shop around &#40;approximate range $90-$140&#41;.</p>
                    <p className='text-[--dark-blue] text-xl lg:text-2xl font-semibold'>Preparing your people for a ConstructSafe knowledge assessment</p>
                    
                    <div className="text-block">
                        <p className='text-[--primary-colour] text-xl font-semibold'>Difficulty</p>
                        <p className='text-[--text-colour]'>Knowledge Assessments are challenging; they have been designed that way on purpose. Your people must be adequately prepared!</p>
                    </div>
                    <div className="text-block">
                        <p className='text-[--primary-colour] text-xl font-semibold'>Revision</p>
                        <p className='text-[--text-colour]'>Encourage your people to read through their training material prior to their assessment. Some employers run a specific session before the assessment to help with the preparation.</p>
                    </div>
                    <div className="text-block">
                        <p className='text-[--primary-colour] text-xl font-semibold'>Training</p>
                        <p className='text-[--text-colour]'>It is essential that you find a training programme that aligns with the assessment your people are taking.</p>
                    </div>
                    <div className="text-block">
                        <p className='text-[--primary-colour] text-xl font-semibold'>Support</p>
                        <p className='text-[--text-colour]'>There must be no negative stigma associated with not being successful with the assessments. Each candidate receives a personal feedback report; ensure your people receive adequate coaching and learning before they repeat an assessment to maximise their chances of success.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction