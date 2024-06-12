import React from 'react'
import Link from 'next/link'
import YouTubePlayer from '../common/YouTubePlayer'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="home-header">
            <div className="introduction-video">
                <div className="header-text relative z-10 h-full flex flex-col justify-center items-center">
                    <div className='flex flex-col gap-8 items-center w-full md:w-2/3 text-center px-4 lg:px-0 max-w-[1080px]'>
                        <h1 className='text-4xl lg:text-5xl text-white font-semibold'>Supporting the construction sectors to improve health and safety.</h1>
                        <p className='text-lg md:text-xl font-base'>Our vision is to shift health and safety in the construction industry from inconsistent compliance to consistent competence to have health and safe workers as a natural outcome of good work.</p>
                    </div>
                </div>
        </div>
        </div>
        <div className="banner-image w-full  flex items-center justify-center">
          <Link href="/events/"><Image src="/common/webinar.jpg" className='hidden invisible md:visible md:block' alt="banner image" width={1920} height={200} /></Link>
          <Link href="/events/"><Image src="/common/webinar-mobile.jpg" className='block visible md:invisible md:hidden' alt="banner image" width={1920} height={200} /></Link>
        </div>
    </div>
  )
}

export default Header