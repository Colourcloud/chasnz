import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative header-gradient" id="news-header">
            <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-center justify-center gap-10">
                <div className="header-text-block flex flex-col gap-8 text-center w-full lg:w-3/5 z-30">
                  <h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[--primary-colour]'>NEWSROOM</h4>
                  <h1 className='text-4xl lg:text-5xl font-bold'>Latest articles and expert insights from the industry.</h1>
                  <p className='text-base md:text-xl font-light'>Keep up with innovative safety solutions, new legislative updates and success stories from across the sector</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header