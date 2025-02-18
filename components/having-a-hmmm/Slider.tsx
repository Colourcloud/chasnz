import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const Slider = () => {
  return (
    <section className="py-12 lg:py-32 bg-black">
        <div className="site-wrapper">
            <div className="flex flex-col gap-6 max-w-4xl">
                <h6 className="text-white text-2xl lg:text-4xl font-semibold">Work should not hurt.</h6>
                <p className="text-white text-base lg:text-lg font-light">Taking a moment to consider the risk and the consequences can allow us to work and play without injury. For more Have a Hmmm Videos go to: <br /> <a href="https://www.acc.co.nz/preventing-injury/have-a-hmmm" target='_blank' className="text-[--primary-colour] font-medium">https://www.acc.co.nz/preventing-injury/have-a-hmmm</a></p>
            </div>
        </div>
        <div className="mt-12 lg:mt-20 max-w-[1920px] mx-auto">
        <Marquee gradientWidth={0}>
            <Image src="/having-a-hmmm/slider-1.jpg" alt="Slider image 1" className='w-[350px] md:w-[500px] mx-4' width={1000} height={1000} />
            <Image src="/having-a-hmmm/slider-2.jpg" alt="Slider image 1" className='w-[350px] md:w-[500px] mx-4' width={1000} height={1000} />
            <Image src="/having-a-hmmm/slider-3.jpg" alt="Slider image 1" className='w-[350px] md:w-[500px] mx-4' width={1000} height={1000} />
            <Image src="/having-a-hmmm/slider-4.jpg" alt="Slider image 1" className='w-[350px] md:w-[500px] mx-4' width={1000} height={1000} />
        </Marquee>
        </div>
    </section>
  )
}

export default Slider