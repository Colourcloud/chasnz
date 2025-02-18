import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export const metadata: Metadata = {
    title: 'CHASNZ – Tōtika Programme',
  }

const ProgrammesNew = () => {
  return (
    <>
    <div className="site-wrapper">
        <div className="programmes-menu flex flex-row gap-8 pt-20 pb-24 relative">

            <div className="programme-tile flex flex-col gap-4">
                <div className="tile-image">
                <a href="/constructsafe/">
                    <Image src="/navigation/programmes/constructsafe-banner.jpg" alt="" className='' width={350} height={200} />
                </a>
                </div>
                <ul className='text-base flex flex-col gap-4 mt-4'>
                    <li><a href="/constructsafe/book-assessment/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Book an assessment</a></li>
                    <li><a href="/constructsafe#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Resources</a></li>
                </ul>
            </div>

            <div className="programme-tile flex flex-col gap-4">
                <div className="tile-image">
                <a href="/leadon/">
                    <Image src="/navigation/programmes/leadon-banner.jpg" alt="" className='' width={350} height={200} />
                </a>
                </div>
                <ul className='text-base flex flex-col gap-4 mt-4'>
                    <li><a href="/leadon/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Information for Managment</a></li>
                    {/* <li><a href="/leadon/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Register your Frontline Leader</a></li>
                    <li><a href="/leadon/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Information for Supervisors</a></li> */}
                </ul>
            </div>

            <div className="programme-tile flex flex-col gap-4">
                <div className="tile-image">
                <a href="/totika/">
                    <Image src="/navigation/programmes/totika-banner.jpg" alt="" className='' width={350} height={200} />
                </a>
                </div>
                <ul className='text-base flex flex-col gap-4 mt-4'>
                    <li><a href="/totika/contractor-suppliers" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Contractors and suppliers</a></li>
                    <li><a href="/totika/#case-studies" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Case Studies</a></li>
                    <li><a href="https://www.totika.org/totika/signup" target="_blank" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Register for the Tōtika scheme</a></li>
                    <li><a href="https://www.totika.org/totika-scheme-scheme-resources" target="_blank" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Tōtika scheme resources</a></li>
                </ul>
            </div>
            
            <div className="programme-tile flex flex-col gap-4">
                <div className="tile-image">
                <a href="/work-should-not-hurt/">
                    <Image src="/navigation/programmes/wsnh-banner.jpg" alt="" className='' width={350} height={200} />
                </a>
                </div>
                <ul className='text-base flex flex-col gap-4 mt-4'>
                    <li><a href="/work-should-not-hurt#trades" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Trade specific information</a></li>
                    <li><a href="/work-should-not-hurt/foundation-assessment-toolkit-musculoskeletal-injuries" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Foundation Assessment Toolkit: Musculoskeletal Injuries</a></li>
                    <li>
                        <a href="/have-a-hmmm" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Have a hmmm in the workplace</a>
                        <div className='flex flex-col'>
                            <span className='text-xs text-gray-500 font-light'>In partnership with ACC</span>
                        </div>
                    </li>
                    <li><a href="/work-should-not-hurt/get-involved" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Get Involved</a></li>
                    <li>
                        <a href="/work-should-not-hurt/wsnh-injury-dashboard" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>
                        CHASNZ Claims and Injuries dashboard
                        <div className='flex flex-col'>
                            <span className='text-xs text-gray-500'>Provided by ACC</span>
                            <Image src="/footer/acclogo.svg" alt='' width={175} height={100} />
                        </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="dropdown-footer w-full py-6 border-t">
        <div className="site-wrapper flex flex-row gap-2 items-center justify-end">
            <p className='text-sm font-light'>Follow us on our socials:</p>
            <ul className='flex flex-row gap-3 items-center'>
                <li className='social-icon'><Link href="https://www.linkedin.com/company/construction-health-and-safety-nz-chasnz?originalSubdomain=nz" target="_blank"><FaLinkedin className='text-2xl text-[#0077B5]'/></Link></li>
                <li className='social-icon'><Link href="https://www.youtube.com/channel/UCddHM1cm6NXMe_JrxejeCrw" target="_blank"><FaYoutube className='text-2xl text-[#FF0000]'/></Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default ProgrammesNew