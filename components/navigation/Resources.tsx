import React from 'react'
import a from 'next/link'
import Image from 'next/image'

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
                                    <h6 className='text-black font-semibold text-xl'>Trade Resources</h6>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="/work-should-not-hurt/trades/building#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Building</a></li>
                                        <li><a href="/work-should-not-hurt/trades/scaffolding#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Scaffolding</a></li>
                                        <li><a href="/work-should-not-hurt/trades/roofing#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Roofing</a></li>
                                        <li><a href="/work-should-not-hurt/trades/plumbing-gasfitting-drainlaying#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Plumbing, gasfitting & drainlaying</a></li>
                                        <li><a href="/work-should-not-hurt/trades/brick-blocklaying#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Brick & Blocklaying</a></li>
                                        <li><a href="/work-should-not-hurt/trades/painting#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Painting</a></li>
                                        <li><a href="/work-should-not-hurt/trades/glazing#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Glazing</a></li>
                                        <li><a href="/work-should-not-hurt/trades/electricians#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Electricians</a></li>
                                        <li><a href="/work-should-not-hurt/trades/flooring#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Flooring</a></li>
                                        <li><a href="/work-should-not-hurt/trades/concrete#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Concrete Services</a></li>
                                        <li><a href="/work-should-not-hurt/trades/manage-support#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Management & Support</a></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                    <a href="/general-resources/"><h6 className='text-black font-semibold text-xl underline hover:text-[--primary-colour]'>General Resources</h6></a>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="/work-should-not-hurt#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Work Should Not Hurt</a></li>
                                        <li><a href="/constructsafe#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>ConstructSafe</a></li>
                                        <li><a href="#" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Energy Wheel</a></li>
                                    </ul>
                                </div>

                                <div className="mega-menu_right_list_items">
                                    <a href="/data-tools-and-insights/"><h6 className='text-black font-semibold text-xl underline hover:text-[--primary-colour]'>Data Tools & Insights</h6></a>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="/data-tools-and-insights/whakatipu/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Whakatipu</a></li>
                                        <li><a href="/data-tools-and-insights/measuring-health-and-safety/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Measuring Health & Safety</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    </>
  )
}

export default Resources