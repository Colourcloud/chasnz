import React from 'react'
import Link from 'next/link'
import VimeoPlayer from './Videoplayer'

const Header = () => {
  return (
    <div>
        <div className="home-header">
            <div className="introduction-video">
                <div className="video-wrapper absolute">
                    <VimeoPlayer videoId="920299291" autoplay={true} loop={true} title={false} byline={false} portrait={false} />
                </div>
                <div className="header-text relative z-10 h-full flex flex-col justify-center items-center">
                    <div className='flex flex-col gap-6 items-center w-2/3 text-center'>
                        <h1 className='text-4xl lg:text-6xl text-white font-bold'>We are your nationwide partner in Health & Safety for your workplace.</h1>
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Header