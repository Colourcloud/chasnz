import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Programmes = () => {
  return (
    <>
    <div className="site-wrapper">
    <div className="programmes-menu flex flex-row gap-20 pt-20 pb-24">
                        <div className="mega-menu_left">
                        <div className="navigation-image w-[400px] h-[400px]">
                                <Image src="/navigation/programmes/wsnh-image.jpg" alt="work should not hurt" width='400' height='400' className='object-cover'></Image>
                            </div>
                        </div>
                        <div className="mega-menu_right w-full">
                            <div className="w-3/4">
                                <h4 className='text-black text-3xl font-bold'>Rethinking injury prevention powered by a human approach.</h4>
                            </div>
                            <div className="mega-menu_right_list mt-10 flex flex-row gap-14 flex-wrap">
                                <div className="mega-menu_right_list_items">
                                    <h6 className='text-black font-semibold text-xl underline'>Work should not hurt</h6>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><Link href="/work-should-not-hurt" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>What is “Work should not hurt”</Link></li>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Trade specific information</Link></li>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Analysis & Insights</Link></li>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Get Involved</Link></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                    <h6 className='text-black font-semibold text-xl underline'>Tōtika</h6>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Introduction to Tōtika</Link></li>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Contractors and suppliers</Link></li>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Register for the Tōtika scheme</Link></li>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Tōtika scheme resources</Link></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                    <h6 className='text-black font-semibold text-xl underline'>Lead On.</h6>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Learn About Lead On.</Link></li>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Information for Managment</Link></li>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Register your Frontline Leader</Link></li>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Information for Supervisors</Link></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                    <h6 className='text-black font-semibold text-xl underline'>ConstructSafe</h6>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Learn About ConstructSafe</Link></li>
                                        <li><Link href="/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Book an assessment</Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
    </>
  )
}

export default Programmes