import React from 'react'
import Link from 'next/link'
import Header from '@/components/programmes/totika/Header'
import { FiExternalLink } from "react-icons/fi";
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CHASNZ – Contractor & Suppliers',
  }


const page = () => {
  return (
    <>
    <Header />
        <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
            <div className="content-wrapper">
                <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                    <div className="programme-navigation w-full lg:w-[30%]">
                        <h4 className='text-black text-2xl font-semibold'>Tōtika related content:</h4>
                        <ul className='flex flex-col gap-6 underline text-[--totika-blue] mt-6 text-lg'>
                            <li><Link href="#">Info for contractors and suppliers</Link></li>
                            <li><Link href="/totika/#case-studies">Case studies</Link></li>
                            <li><Link href="https://www.totika.org/totika/signup" target='_blank' className='flex flex-row items-center gap-2'>Register for the Tōtika scheme <FiExternalLink /></Link></li>
                            <li><Link href="https://www.totika.org/totika-scheme-scheme-resources" target='_blank' className='flex flex-row items-center gap-2'>Tōtika scheme resources <FiExternalLink /></Link></li>
                        </ul>
                    </div>
                    <div className="programme-text flex flex-col gap-10 w-full lg:w-[70%] ml-0 lg:ml-[8rem]">
                    <div className="text-block flex flex-col gap-4">
                        <h4 className='font-bold text-4xl lg:text-6xl'>Contractors and suppliers</h4>
                        <p className='text-[--totika-blue] text-xl lg:text-2xl font-semibold'>Why register with Tōtika?</p>
                        <p className='text-[--text-colour]'>It&apos;s free and will only take 2-3 minutes of your time</p>
                        <p className='text-[--text-colour]'>Reduce your pre-qualification burden down to a single Tōtika endorsed approach that you choose</p>
                        <p className='text-[--text-colour]'>Obtain pre-qualified status with many clients/buyers across NZ</p>
                    </div>
                    <div className="text-block flex flex-col gap-4">
                        <p className='text-[--totika-blue] text-xl lg:text-2xl font-semibold'>How does it work?</p>
                        <p className='text-[--text-colour]'>Tōtika is an &apos;umbrella&apos; scheme; we have independently approved NZ&apos;s major pre-qualification assessment providers to provide a central contractor/supplier register</p>
                        <p className='text-[--text-colour]'>We also recognise major certification and assessment schemes as an alternative to pre-qualification assessment</p>
                    </div>
                    <div className="text-block flex flex-col gap-4">
                        <p className='text-[--totika-blue] text-xl lg:text-2xl font-semibold'>What do I do next? </p>
                        <p className='text-[--primary-colour]'><a href="https://www.totika.org/totika/signup" target="_blank">Click here to sign up for free</a></p>
                        <p className='text-[--primary-colour]'><a href="https://www.totika.org/cat" target="_blank">Work out which Supplier category you are</a></p>
                        <p className='text-[--text-colour]'>Fill in your dashboard with your company details</p>
                        <p className='text-[--text-colour]'>Complete and upload proof of a Tōtika-recognised assessment to your dashboard</p>
                    </div>
                    <div className="text-block flex flex-col gap-4">
                        <p className='text-[--totika-blue] text-xl lg:text-2xl font-semibold'>What assessments do we recognise?</p>
                        <ul className='text-lg text-[--text-colour] leading-8 list-disc pl-4'>
                            <li>Tōtika prequalification assessments from our four member schemes</li>
                            <li>Non-Tōtika prequalification assessments from our four member schemes completed before the 1st of September 2021. Note: these assessments will only provide a &apos;Developing&apos; grading.</li>
                            <li>ISO 45001 certifications accredited by an <a href="https://iaf.nu/en/accreditation-bodies/" target="_blank" className='text-[--primary-colour]'>IAF Accreditation Body Member</a></li>
                            <li>SafePlus onsite assessments and Q-Safe assessments (dependent on your supplier category)</li>
                            <li>Plus more! Please see our <a href="https://www.totika.org/totika-scheme-scheme-resources" target='_blank' className='text-[--primary-colour]'>Scheme rules</a> for more information on which assessments we recognise.</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page