import React from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <section className="partners py-20 lg:pt-60">
        <div className="site-wrapper">
            <div className="section-text flex flex-col gap-6 w-full lg:w-4/5">
                <span className='text-base font-semibold text-[--totika-blue]'>Supply Chain Leaders</span>
                <h4 className='text-2xl font-bold lg:text-6xl text-[--dark-blue]'>Recognising supply chain leaders</h4>
                <p className='text-xl font-medium text-[--dark-blue]'>Construction Health and Safety New Zealand</p>
            </div>
            <Marquee className='overflow-hidden'>
            <div className="brands flex flex-row gap-6 mt-10">
                <div className="brand-container w-[200px] h-[100px] object-contain">
                    <Image src="/programmes/totika/partners/at.png" alt="" width={100} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[200px] h-[100px] object-contain">
                    <Image src="/programmes/totika/partners/auckland-airport.png" alt="" width={100} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[200px] h-[100px] object-contain">
                    <Image src="/programmes/totika/partners/auckland-council.png" alt="" width={100} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[200px] h-[100px] object-contain">
                    <Image src="/programmes/totika/partners/prolabs.png" alt="" width={100} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[200px] h-[100px] object-contain">
                    <Image src="/programmes/totika/partners/downer.png" alt="" width={100} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[200px] h-[100px] object-contain">
                    <Image src="/programmes/totika/partners/st-john.png" alt="" width={100} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[200px] h-[100px] object-contain">
                    <Image src="/programmes/totika/partners/colliers.png" alt="" width={100} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[200px] h-[100px] object-contain">
                    <Image src="/programmes/totika/partners/fletcher.png" alt="" width={100} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[200px] h-[100px] object-contain">
                    <Image src="/programmes/totika/partners/fontera.png" alt="" width={100} height={100} className='w-full'></Image> 
                </div>
                <div className="brand-container w-[200px] h-[100px] object-contain">
                    <Image src="/programmes/totika/partners/fulton-hogan.png" alt="" width={100} height={100} className='w-full'></Image> 
                </div>
            </div>
            </Marquee>
        </div>
    </section>
  )
}

export default Partners