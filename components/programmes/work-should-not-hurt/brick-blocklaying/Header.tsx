import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative" id="trades-brick-header">
            <div className="content-wrapper h-full">
              <div className="header-container flex flex-col h-full items-center justify-center gap-10">
                <div className="header-text-block flex flex-col gap-6 text-center w-full lg:w-3/4">
                  <h2 className='font-semibold text-3xl md:text-6xl lg:text-6xl'>Looking after our Brick &amp; Blocklayers</h2>
                  <p className='text-base md:text-xl font-medium'>The Work Should Not Hurt programme aims to make sure brick &amp; blocklayers can enjoy long, pain free careers and retire when they want to and not when forced to due to pain and injury.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header