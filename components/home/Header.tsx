import React from 'react'
import Link from 'next/link'
import YouTubePlayer from '../common/YouTubePlayer'

const Header = () => {
  return (
    <div>
        <div className="home-header">
            <div className="introduction-video">
                <div className="header-text relative z-10 h-full flex flex-col justify-center items-center">
                    <div className='flex flex-col gap-8 items-center w-full md:w-2/3 text-center px-4 lg:px-0'>
                        <h1 className='text-4xl lg:text-6xl text-white font-bold'>Supporting the construction sectors to improve health and safety.</h1>
                        <p className='text-lg md:text-2xl font-base'>Our vision is to shift health and safety in the construction industry from inconsistent compliance to consistent competence to have health and safe workers as a natural outcome of good work.</p>
                    </div>
                </div>
        </div>
        </div>
        <div className="banner-image w-full h-28 bg-gray-400 flex items-center justify-center">Banner to go here</div>
    </div>
  )
}

export default Header