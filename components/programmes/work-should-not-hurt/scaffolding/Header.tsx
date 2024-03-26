import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative" id="trades-scaffolding-header">
            <div className="content-wrapper h-full">
              <div className="header-container flex flex-col h-full items-center justify-center gap-10">
                <div className="header-text-block flex flex-col gap-6 text-center w-full">
                  <h2 className='font-semibold text-3xl md:text-6xl lg:text-8xl'>Looking after our Scaffolders</h2>
                  <p className='text-base md:text-xl font-light'>The Work Should Not Hurt programme aims to make sure tradespeople can enjoy long, pain free careers and retire when they want to and not when forced to due to pain and injury.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header