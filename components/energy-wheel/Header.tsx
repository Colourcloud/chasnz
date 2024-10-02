import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="programmes-header relative header-gradient" id="energy-wheel-header">
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover hidden invisible md:visible md:block"
          src="/energy-wheel/header-video.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          className="absolute top-0 left-0 w-full h-full object-cover md:hidden md:invisible"
          src="/energy-wheel/header-video-mobile.webm"
          autoPlay
          loop
          muted
          playsInline
        /> */}
        <div className="content-wrapper relative h-full">
          <div className="header-container flex flex-col h-full items-center justify-center gap-10">
            <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold'>Energy Based <span className="text-[--primary-colour]">Safety</span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
