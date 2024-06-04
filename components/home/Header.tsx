import React from 'react'
import Link from 'next/link'
import YouTubePlayer from '../common/YouTubePlayer'

const Header = () => {
  return (
    <div>
        <div className="home-header">
            <div className="introduction-video">
                <div className="video-wrapper absolute">
                    <YouTubePlayer videoId="bM4Qjier-jI" autoplay={true} muted={true} loop={true} controls={false} />
                </div>
                <div className="header-text relative z-10 h-full flex flex-col justify-center items-center">
                    <div className='flex flex-col gap-8 items-center w-2/3 text-center'>
                        <h1 className='text-4xl lg:text-6xl text-white font-bold'>We are your nationwide partner in Health & Safety for your workplace.</h1>
                        <p className='text-2xl font-base'>We provide evidence based robust guidance and tools to help you manage Health, Safety and Wellbeing harm in your business &#45; whatever size that is.</p>
                    </div>
                </div>
        </div>
        </div>
        <div className="banner-image w-full h-28 bg-gray-400 flex items-center justify-center">Banner to go here</div>
    </div>
  )
}

export default Header