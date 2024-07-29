import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative header-gradient" id="about-header">
            <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-center justify-end gap-10">
                <div className="header-text-block flex flex-col gap-6 text-center w-full lg:w-3/4 pb-[5rem] z-30">
                  <h1 className='text-4xl lg:text-8xl font-bold text-shadow'>What we stand for</h1>
                  <p className='text-base md:text-2xl font-medium'>Guiding our people and places in a different way to create better work, better lives and a better future.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header