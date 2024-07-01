import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header header-gradient relative" id="contact-header">
            <div className="content-wrapper h-full">
              <div className="header-container flex flex-col h-full items-center justify-center gap-10">
                <div className="header-text-block flex flex-col gap-6 text-center w-full lg:w-3/4 relative z-10">
                  <h2 className='font-bold text-3xl md:text-6xl lg:text-8xl'>Get in touch</h2>
                  <p className='text-base md:text-xl font-medium'>For more information about supporting the New Zealand construction industry, contact us.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header