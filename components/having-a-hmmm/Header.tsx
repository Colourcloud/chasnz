import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative header-gradient" id="having-a-hmmm-header">
          <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-center justify-center gap-6 relative z-10 text-center">
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold !leading-tight max-w-6xl mx-auto'>Welcome to our &apos;Have a hmmm&apos; page. In partnership with ACC and featuring the very talented Kiko and Kat.</h1>
                    <div className='flex flex-row items-center gap-4 flex-wrap'>
                        <Image src="/having-a-hmmm/wsnh-logo.svg" alt="Work should not hurt logo" className='w-[150px] md:w-[250px]' width={250} height={250} />
                        <Image src="/having-a-hmmm/acc-logo.svg" alt="Acc logo" className='w-[150px] md:w-[250px]' width={250} height={250} />
                    </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header