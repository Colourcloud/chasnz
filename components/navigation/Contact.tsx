import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className="site-wrapper">
    <div className="programmes-menu flex flex-row gap-20 pt-20 pb-24">
                        <div className="mega-menu_left">
                            <div className="navigation-image w-[400px] h-[400px]">
                                <Image src="/navigation/contact-image.jpg" alt="contact us" width='400' height='400' className='object-cover'></Image>
                            </div>
                        </div>
                        <div className="mega-menu_right w-full">
                            <div className="w-3/4">
                                <h4 className='text-black text-3xl font-bold'>Want to know more?</h4>
                            </div>
                            <div className="mega-menu_right_list mt-10 flex flex-row gap-14 flex-wrap">
                                
                                <div className="mega-menu_right_list_items">
                                    <ul className='text-base flex flex-col gap-4'>
                                        <li><a href="/contact/" className='text-black font-semibold text-xl hover:text-[--primary-colour] underline'>Get in touch</a></li>
                                    </ul>
                                </div>
                                <div className="mega-menu_right_list_items">
                                    <h6 className='text-black font-semibold text-xl'>Contact Information:</h6>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li className='text-gray-700 font-light py-1'><a href="mailto:info@chasnz.org" className='underline'>Info@chasnz.org</a></li>
                                        <li className='text-gray-700 font-light py-1'>0800 CHASNZ</li>
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

export default Contact