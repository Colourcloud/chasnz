import React from 'react'
import Image from 'next/image'
import AnimatedText from '@/components/ui/AnimateText'

const HeaderNew = () => {
  return (
    <div>
        <div className="programmes-header relative header-gradient" id="leadon-header">
          <div className='absolute honeycomb-pattern_one'></div>
          <div className='absolute honeycomb-pattern_two'></div>
          <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-left justify-end lg:justify-center pb-[8rem] lg:pb-0 gap-6 relative z-10 text-left max-w-3xl">
                    <Image src="/programmes/logos/leadon.svg" alt="work should not hurt logo" width='400' height='300' className='w-[250px]'></Image>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold'>Frontline leaders are the first line of protection and a last line of defence on our worksites.</h1>
                    <p className='text-base md:text-lg'>The long-term aim of the Lead On programme is to enhance the skills of frontline leaders to improve safety across the construction sector.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderNew

{/* <Image src="/programmes/logos/leadon.svg" alt="work should not hurt logo" width='400' height='300' className='w-[275px] xl:w-[350px]'></Image> */}