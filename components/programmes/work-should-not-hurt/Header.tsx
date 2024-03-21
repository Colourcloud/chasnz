import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative" id="work-should-not-hurt-header">
            <div className="content-wrapper">
              <div className="programmes-header_container">
                <div className="header-block-box absolute bottom-0 right-0 bg-white pt-12 lg:pt-16 px-4 md:px-16 lg:px-32">
                  <div className='flex flex-col gap-6 w-full border-b-2 border-gray-200 pb-4'>
                    <h2 className='text-black text-4xl lg:text-6xl font-semibold'>Work Should Not Hurt</h2>
                    <p className='text-[--text-colour] font-base'>The Work Should Not Hurt programme aims to make sure tradespeople can enjoy long, pain free careers and retire when they want to and not when forced to due to pain and injury.</p>
                  </div>
               </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header