import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-black text-2xl font-semibold'>ConstructSafe related content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="#">Book an assessment</Link></li>
                        <li><Link href="#resources">Learning resources</Link></li>
                        <li><Link href="http://myconstructsafe.kiwi/Login/TestCenter" target='_blank' className='flex flex-row items-center gap-2'>Log in to the portal <FiExternalLink /></Link></li>
                        <li><Link href="http://constructsafe.kiwi/check/profile" target='_blank' className='flex flex-row items-center gap-2'>Check a Profile <FiExternalLink /></Link></li>
                        <li><Link href="http://www.constructsafe.kiwi/Test/Worker.html" target='_blank' className='flex flex-row items-center gap-2'>Individual Pre-registration <FiExternalLink /></Link></li>
                        <li><Link href="http://www.constructsafe.kiwi/Test/Company.html" target='_blank' className='flex flex-row items-center gap-2'>Free company access sign-up <FiExternalLink /></Link></li>
                        <li><Link href="http://www.constructsafe.kiwi/SignUp/NewTestCenter.html" target='_blank' className='flex flex-row items-center gap-2'>Become an assessment provider <FiExternalLink /></Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-5xl'>Introduction to ConstructSafe</h4>
                    <p className='text-[--text-colour]'>In the same way that a drivers licence proves the competency of a driver, ConstructSafe proves the health and safety competency of our workforce. It provides assurance that every worker onsite understands the same things, in order to carry out their jobs safely.</p>
                    <p className='text-[--text-colour]'>ConstructSafe creates a more competent workforce with the confidence in their capability to do their jobs safely.</p>
                    <p className='text-[--text-colour]'>A genuine first for New Zealand, ConstructSafe is providing consistent health and safety competency standards for Construction. Because ConstructSafe is developed and owned by industry, it is creating a more competent workforce and in turn driving a more efficient industry.</p>
                    <p className='text-black text-xl lg:text-2xl font-semibold'>What is ConstructSafe?</p>
                    <p className='text-[--text-colour]'>The Foundation Health & Safety Assessment is the minimum required knowledge of construction health & safety. It takes 30mins and consists of questions related to basic health and safety and is designed for EVERYONE working on a construction site. Questions are also in audio to help eliminate language barriers.</p>
                    <p className='text-[--text-colour]'>Specialist Trades and Occupation Assessments are also available; excavator, roller, paver, supervisors and many more.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction