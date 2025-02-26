import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative header-gradient" id="communication-and-culture-header">
          <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-center justify-center gap-6 relative z-10 text-center max-w-4xl mx-auto">
                  <span className='text-base md:text-2xl lg:text-3xl font-semibold text-[--primary-colour]'>Free Event!</span>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight max-w-6xl mx-auto'>Wanted! People in front-line and second-line leadership roles in the Construction industry</h1>
                    <p className='text-base md:text-lg lg:text-xl font-light max-w-6xl mx-auto'>You are invited to our <span className='text-[--primary-colour] font-medium'>FREE</span> Masterclass Communication and Culture in-person event on Health and Safety Frontline Leadership in the Construction industry</p>
              </div>
            </div>
        </div>
        <div className='w-full text-center text-sm text-white py-3 px-6 bg-red-600'>Registrations for this in-person event in March is now closed as we have reached our maximum numbers.</div>
    </div>
  )
}

export default Header