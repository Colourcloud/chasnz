import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative header-gradient" id="energy-based-safety-header">
          <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-center justify-center gap-6 relative z-10 text-center">
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold !leading-tight max-w-6xl mx-auto'>Take part in our <span className='text-[--primary-colour]'>FREE</span> Energy Based Safety Workshops in November. Limited Spaces, Register Now!</h1>
                    <div className='flex flex-col gap-4 mt-6'>
                      <h6 className='text-xl md:text-3xl font-semibold'>What is Energy Based Safety?</h6>
                      <ul className="flex flex-col gap-4 items-center justify-center">
                        <li className='text-lg md:text-xl font-semibold'>Energy Wheel</li>
                        <li className='text-lg md:text-xl font-semibold'>Low Energy v High Energy Hazards</li>
                        <li className='text-lg md:text-xl font-semibold'>High Energy Control Assessments</li>
                      </ul>
                   </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header