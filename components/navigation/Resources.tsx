import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Resources = () => {
  return (
    <>
    <div className="site-wrapper">
    <div className="programmes-menu flex flex-row gap-20 pt-20 pb-24">
                        <div className="mega-menu_left">
                            <div className="navigation-image w-[400px] h-[400px]">
                                <Image src="/navigation/programmes/resource-image.jpg" alt="work should not hurt" width='400' height='400' className='object-cover'></Image>
                            </div>
                        </div>
                        <div className="mega-menu_right w-full">
                            <div className="w-3/4">
                                <h4 className='text-black text-3xl font-bold'>Resources to get you work-site ready</h4>
                            </div>
                            <div className="mega-menu_right_list mt-10 flex flex-row gap-14 flex-wrap">
                                <div className="mega-menu_right_list_items">
                                    <a href="/general-resources/"><h6 className='text-black font-semibold text-xl underline hover:text-[--primary-colour]'>General resources</h6></a>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="/constructsafe#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>ConstructSafe</a></li>
                                        <li><a href="/energy-wheel/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Energy Based Safety</a></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                <a href="/work-should-not-hurt/"><h6 className='text-black font-semibold text-xl underline hover:text-[--primary-colour]'>Work Should Not Hurt</h6></a>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                    <li><a href="/work-should-not-hurt/trades/brick-blocklaying#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Brick & Blocklaying</a></li>
                                    <li><a href="/work-should-not-hurt/trades/building#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Building</a></li>
                                    <li><a href="/work-should-not-hurt/trades/concrete#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Concrete Services</a></li>
                                    <li><a href="/work-should-not-hurt/trades/electricians#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Electricians</a></li>
                                    <li><a href="/work-should-not-hurt/trades/flooring#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Flooring</a></li>
                                    <li><a href="/work-should-not-hurt/trades/glazing#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Glazing</a></li>
                                    <li><a href="/work-should-not-hurt/trades/manage-support#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Management & Support</a></li>
                                    <li><a href="/work-should-not-hurt/trades/painting#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Painting</a></li>
                                    <li><a href="/work-should-not-hurt/trades/plumbing-gasfitting-drainlaying#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Plumbing, Gasfitting & Drainlaying</a></li>
                                    <li><a href="/work-should-not-hurt/trades/roofing#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Roofing</a></li>
                                    <li><a href="/work-should-not-hurt/trades/scaffolding#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Scaffolding</a></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                    <a href="/data-tools-and-insights/"><h6 className='text-black font-semibold text-xl underline hover:text-[--primary-colour]'>Data tools & insights</h6></a>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="/data-tools-and-insights/measuring-health-and-safety/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Measuring health & safety</a></li>
                                        <li><a href="/analysis-insights/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Analysis & insights</a></li>
                                    </ul>
                                </div>
                            </div>
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

export default Resources