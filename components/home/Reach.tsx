import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const Reach = () => {
  return (
    <>
    <section className="national-reach py-20 lg:py-32">
        <div className="content-wrapper h-full">
            <div className="section-content flex flex-col h-full justify-end">
                <div className="section-text text-white w-full md:w-3/5 flex flex-col gap-4">
                    <h4 className='text-4xl font-bold lg:text-8xl'>A National Reach</h4>
                    <p>The construction industry has 250,000 workers who make up the sector. At CHASNZ we maintain a national reach, from high rise construction to laying the foundations of the milking shed. This is how we are achieving our goal to raise the standard of health and safety culture and performance across the construction industry in New Zealand.</p>
                </div>
            </div>
        </div>
    </section>
    <Marquee className='overflow-hidden border border-b-2 border-b-gray-200 max-w-[1920px] mx-auto flex flex-row gap-6 py-10 h-[150px]'>
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
    </>
    
  )
}

export default Reach