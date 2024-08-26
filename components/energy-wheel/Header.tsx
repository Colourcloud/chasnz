import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="programmes-header relative header-gradient" id="energy-wheel-header">
        <video
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
        />
        <div className="content-wrapper relative h-full">
          <div className="header-container flex flex-col h-full items-center justify-center lg:justify-end gap-10">
            <div className="programme-logo w-3/4 lg:w-full flex justify-center lg:justify-start lg:pb-8 z-10">
              {/* Your content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
