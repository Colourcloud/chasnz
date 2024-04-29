import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
    <div className="programmes-header relative" id="events-header">
        <div className="content-wrapper relative h-full">
          <div className="header-container flex flex-col h-full items-center justify-center gap-10">
            <div className="header-text-block flex flex-col gap-6 text-center w-full lg:w-3/4">
              <h1 className='text-4xl lg:text-8xl font-bold'>Events</h1>
              <p className='text-base md:text-2xl font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget auctor justo. Suspendisse in auctor nisi. Proin hendrerit varius enim.</p>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Header