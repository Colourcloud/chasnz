import React from 'react'
import Link from 'next/link'
import YouTubePlayer from '../common/YouTubePlayer'
import Image from 'next/image'
import { FaCirclePlay } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
        <div className="home-header">
            <div className="introduction-video">
              <div className="site-wrapper h-full">
              <div className="header-text relative z-10 h-full flex flex-col justify-center pb-14 items-start">
                    <div className='flex flex-col gap-8 items-left w-full lg:w-1/3 text-left px-4 lg:px-0'>
                        <h1 className='text-4xl lg:text-5xl text-white font-semibold text-shadow-lg'><span className='text-white md:text-[#F6A21A] bg-[#F6A21A] md:bg-transparent px-1 md:px-0'>Have a hmmm</span> to stay injury-free in the workplace.</h1>
                        <p className='text-lg md:text-xl font-base'><span className='text-white md:text-[#F6A21A] bg-[#F6A21A] md:bg-transparent px-1 md:px-0'>We've partnered with ACC</span> on a suite of videos showcasing tips to stay injury-free so you can safely get the job done.</p>
                        <Link href="/having-a-hmmm"><p className='text-lg md:text-xl font-semibold flex flex-row gap-2 items-center'><FaCirclePlay className='text-[#F6A21A] text-3xl' /> Click here for more details</p></Link>
                    </div>
                </div>
              </div>
        </div>
        </div>

        <div className="content-wrapper">
          <div className="banner-image w-full flex flex-col gap-4 items-center justify-center mt-12">
            <Link href="/events/medical-cannabis-employers-and-employees-rights-and-responsibilties"><Image src="/common/webinar-2.jpg" className='hidden md:block' alt="energy based safety workshop banner" width={1921} height={150} /></Link>
            <Link href="/general-resources#resources"><Image src="/common/webinar.png" className='hidden md:block' alt="energy based safety workshop banner" width={1921} height={150} /></Link>
            <Link href="/events/medical-cannabis-employers-and-employees-rights-and-responsibilties"><Image src="/common/webinar-2-mobile.jpg" className='block md:hidden' alt="energy based safety workshop banner" width={1921} height={150} /></Link>
            <Link href="/general-resources#resources"><Image src="/common/webinar-mobile.png" className='block md:hidden' alt="energy based safety workshop banner" width={1921} height={150} /></Link>
          </div>
        </div>
        
    </div>
  )
}

export default Header