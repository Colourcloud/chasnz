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
                    <div className='flex flex-col gap-8 items-left w-full lg:w-2/4 text-left px-4 lg:px-0'>
                      <span className='text-black bg-[#F6A21A] text-sm uppercase font-bold py-2 px-3 self-start'>Free Tool</span>
                        <h1 className='text-4xl lg:text-6xl text-white font-bold text-shadow-lg'><span className='text-[#F6A21A]'>WSNH Foundation</span> Assessment Toolkit</h1>
                        <p className='text-lg md:text-xl font-base'>Assess your organisation&apos;s ability to recognise and <span className='text-[#F6A21A]'>address musculoskeletal injuries in your workplace</span> and you&apos;ll get your very own detailed report</p>
                        <Link href="/work-should-not-hurt/foundation-assessment-toolkit-musculoskeletal-injuries"><p className='text-lg md:text-xl font-semibold flex flex-row gap-2 items-center'><FaCirclePlay className='text-[#F6A21A] text-3xl' /> Click here for more details</p></Link>
                    </div>
                    <div className="w-full lg:w-2/4 rounded-lg border-2 border-[#F6A21A] overflow-hidden relative">
                      <div className="absolute top-0 right-0 bg-[#F6A21A] text-black uppercase text-xs md:text-sm rounded-bl-lg px-3 md:px-4 py-1 md:py-2 font-bold z-10"><span>New Tool</span></div>
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className='w-full relative'
                      >
                        <source src="/home/wsnh-assessment-graphic.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                </div>
              </div>
        </div>
        </div>

        <div className="content-wrapper">
          <div className="banner-image w-full flex flex-col gap-4 items-center justify-center mt-12">
            <Link href="/leadon"><Image src="/common/webinar.jpg" className='hidden md:block' alt="energy based safety workshop banner" width={1921} height={150} /></Link>
            <Link href="/leadon"><Image src="/common/webinar-mobile.jpg" className='block md:hidden' alt="energy based safety workshop banner" width={1921} height={150} /></Link>
          </div>
        </div>
        
    </div>
  )
}

export default Header