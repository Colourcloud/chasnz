import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative" id="leadon-header">
          <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-center justify-center lg:justify-end gap-10">
                <div className="programme-logo w-3/4 lg:w-full flex justify-center lg:justify-start lg:pb-8">
                    <Image src="/programmes/logos/leadon.svg" alt="work should not hurt logo" width='400' height='300' className='w-[275px] xl:w-[350px]'></Image>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header