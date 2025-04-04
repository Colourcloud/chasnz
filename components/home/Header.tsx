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
              <div className="header-text relative z-10 h-full flex flex-col lg:flex-row justify-center items-center gap-6 mt-4 md:mt-20 lg:mt-0">
                    <div className='flex flex-col gap-8 items-left w-full lg:w-2/5 text-left px-4 lg:px-0'>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl text-white font-semibold text-shadow-lg'>Download our detailed <span className='text-[--primary-colour]'>Mobile Plant Guidance</span> and <span className='text-[--primary-colour]'>Low Loader Guidance</span> for the construction plant and equipment sector</h1>
                        <Link href="/mobile-safety"><p className='text-lg md:text-xl font-semibold flex flex-row gap-2 items-center'><FaCirclePlay className='text-[--primary-colour] text-3xl' /> Click here for more details</p></Link>
                    </div>
                    <div className="w-full lg:w-2/4 relative flex flex-row gap-5">
                        <Image src="/home/mobile-plant-safety-cover.jpg" className='w-full' alt="mobile plant guidance" width={1921} height={150} />
                        <Image src="/home/low-loader-cover.jpg" className='w-full' alt="low loader guidance" width={1921} height={150} />
                    </div>
                </div>
              </div>
        </div>
        </div>

        <div className="content-wrapper">
          <div className="banner-image w-full flex flex-col gap-4 items-center justify-center mt-12">
            <Link href="/leadon"><Image src="/common/webinar.gif" className='' alt="energy based safety workshop banner" width={1921} height={150} /></Link>
          </div>
        </div>
        
    </div>
  )
}

export default Header