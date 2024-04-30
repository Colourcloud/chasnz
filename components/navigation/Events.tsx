import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Events = () => {
  return (
    <>
    <div className="site-wrapper">
    <div className="programmes-menu flex flex-row gap-20 pt-20 pb-24">
                        <div className="mega-menu_left">
                            <div className="navigation-image w-[400px] h-[400px]">
                                <Image src="/events/navigation-image.jpg" alt="work should not hurt" width='400' height='400' className='object-cover'></Image>
                            </div>
                        </div>
                        <div className="mega-menu_right w-full">
                            <div className="w-3/4">
                                <h4 className='text-black text-3xl font-bold'>Take part in events brought to you by Chasnz</h4>
                            </div>
                            <div className="mega-menu_right_list mt-10 flex flex-row gap-14 flex-wrap">
                                <div className="mega-menu_right_list_items">
                                    <h6 className='text-black font-semibold text-xl'>Events</h6>
                                    <ul className='text-base flex flex-col gap-4 mt-4'>
                                        <li><a href="/events" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>View our events</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    </>
  )
}

export default Events