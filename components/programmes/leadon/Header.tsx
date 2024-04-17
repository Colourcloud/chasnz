import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative" id="leadon-header">
            <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-center justify-center gap-10">
                <div className="programme-logo w-3/4 lg:w-full flex justify-center">
                    <Image src="/programmes/logos/leadon.svg" alt="work should not hurt logo" width='400' height='300'></Image>
                </div>
                <div className="header-text-block flex flex-col gap-6 text-center w-full lg:w-3/4">
                  <p className='text-base md:text-xl font-medium'>Frontline leaders are the first line of protection and a last line of defence on our worksites.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header