import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative" id="news-header">
            <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-center justify-center lg:justify-end gap-10">
                <div className="programme-logo w-3/4 lg:w-full flex justify-center lg:justify-start lg:pb-8">
                    <Image src="/logo.svg" alt="chasnz logo" width='400' height='300' className='w-[275px] xl:w-[400px]'></Image>
                </div>
                {/* <div className="header-text-block flex flex-col gap-6 text-center w-full lg:w-3/4">
                  <p className='text-base md:text-xl font-medium'>Tōtika was developed to address inefficiencies in the procurement process caused by the lack of a common pre-qualification standard</p>
                </div> */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header