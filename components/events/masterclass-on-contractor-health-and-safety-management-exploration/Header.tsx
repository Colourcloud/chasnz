import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative header-gradient" id="masterclass-on-contractor-health-and-safety-header">
          <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-center justify-center gap-6 relative z-10 text-center max-w-5xl mx-auto">
                  <span className='text-base md:text-2xl lg:text-3xl font-semibold text-[--primary-colour]'>Free Event!</span>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold !leading-tight max-w-6xl mx-auto'>Calling all Health and Safety Practitioners and Procurement Managers!</h1>
                    <p className='text-base md:text-lg lg:text-xl font-semibold max-w-6xl mx-auto'>Masterclass on Contractor Health and Safety Management Exploration</p>
                    <p className='text-base md:text-lg lg:text-xl font-semibold max-w-6xl mx-auto'>Interactive presentations from 5 expert guest-speakers</p>
              </div>
            </div>
        </div>
        {/* <div className='w-full text-center text-sm text-white py-3 px-6 bg-red-600'>Registrations for this in-person event in March is now closed as we have reached our maximum numbers.</div> */}
    </div>
  )
}

export default Header