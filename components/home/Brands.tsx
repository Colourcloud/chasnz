import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const Brands = () => {
  return (
    <Marquee className='overflow-hidden max-w-[1920px] mx-auto flex flex-row gap-6 py-10 h-[150px]'>
                <div className="brand-container w-[125px] object-contain ml-20">
                    <Image src="/home/brands/safety-future.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/auckland-council.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/downer.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/fletchers.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/worksafe.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/acc.png" alt="" width={125} height={200} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/safety-future.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/auckland-council.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/downer.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/fletchers.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/worksafe.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/acc.png" alt="" width={125} height={200} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[125px] object-contain ml-16">
                    <Image src="/home/brands/safety-future.png" alt="" width={200} height={100} className='w-full'></Image> 
                </div>
      </Marquee>
  )
}

export default Brands