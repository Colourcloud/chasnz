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
                                <h4 className='text-black text-3xl font-bold'>Rethinking injury prevention powered by a human approach</h4>
                            </div>
                            <div className="mega-menu_right_list mt-10 flex flex-row gap-14 flex-wrap">
                                <div className="mega-menu_right_list_items">
                                    <a href="/work-should-not-hurt"><h6 className='text-black font-semibold text-xl underline hover:text-[--primary-colour]'>Work should not hurt</h6></a>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="/work-should-not-hurt#trades" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Trade specific information</a></li>
                                        <li><a href="/work-should-not-hurt/analysis-insights" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Analysis & Insights</a></li>
                                        <li><a href="/work-should-not-hurt/get-involved" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Get Involved</a></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                <a href="/totika"><h6 className='text-black font-semibold text-xl underline hover:text-[--primary-colour]'>Tōtika</h6></a>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="/totika/contractor-suppliers" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Contractors and suppliers</a></li>
                                        <li><a href="/totika/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Case Studies</a></li>
                                        <li><a href="https://www.totika.org/totika/signup" target="_blank" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Register for the Tōtika scheme</a></li>
                                        <li><a href="https://www.totika.org/totika-scheme-scheme-resources" target="_blank" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Tōtika scheme resources</a></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                    <a href="/leadon/"><h6 className='text-black font-semibold text-xl underline hover:text-[--primary-colour]'>Lead On.</h6></a>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="/leadon/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Information for Managment</a></li>
                                        <li><a href="/leadon/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Register your Frontline Leader</a></li>
                                        <li><a href="/leadon/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Information for Supervisors</a></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                    <a href="/constructsafe/"><h6 className='text-black font-semibold text-xl underline hover:text-[--primary-colour]'>ConstructSafe</h6></a>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="/constructsafe/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Book an assessment</a></li>
                                        <li><a href="/constructsafe#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Resources</a></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                    <h6 className='text-black font-semibold text-xl'>Initatives</h6>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="#" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Energy Wheel</a></li>
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