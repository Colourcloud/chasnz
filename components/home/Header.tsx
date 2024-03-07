import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <div className="home-header">
            <div className="introduction-video">
                <div className="video-wrapper absolute">
                <video autoPlay muted loop id="myVideo">
                    <source src="chas.mp4" type="video/mp4" />
                 </video>
                </div>
                <div className="header-text relative z-10 h-full flex flex-col justify-center items-center">
                    <div className='flex flex-col gap-6 items-center w-2/3 text-center'>
                        <h1 className='text-8xl text-white font-bold'>A Catalyst For Change</h1>
                        <p className='text-3xl text-white font-medium'>Guiding our people and places in a different way to create better work, better lives and a better future.</p>
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Header