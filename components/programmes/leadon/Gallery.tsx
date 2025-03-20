import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const Gallery = () => {
  return (
    <section className='py-12 lg:py-32'>
        <div className="site-wrapper">
            <div className="flex flex-col gap-6 text-center">
                <h6 className='text-2xl md:text-4xl lg:text-5xl font-semibold'><span className='text-white bg-[#FF6600] px-2'>Lead On pilot.</span> A New Collaboration</h6>
                <p className='text-base md:text-lg max-w-4xl mx-auto'>The CHASNZ team was undeterred by the implementation woes and believed the leadership skills development had merit, but tweaks to the delivery were necessary, and people needed to experience it for themselves.</p>
            </div>
        </div>
        <div className="leadon-gallery mt-12">
        <Marquee gradientWidth={0}>
            <Image src="/programmes/leadon/gallery/gallery-1.jpg" alt="Slider image 1" className='w-[200px] md:w-[350px] mx-2 lg:mx-4' width={1000} height={1000} />
            <Image src="/programmes/leadon/gallery/gallery-2.jpg" alt="Slider image 1" className='w-[200px] md:w-[350px] mx-2 lg:mx-4' width={1000} height={1000} />
            <Image src="/programmes/leadon/gallery/gallery-3.jpg" alt="Slider image 1" className='w-[200px] md:w-[350px] mx-2 lg:mx-4' width={1000} height={1000} />
            <Image src="/programmes/leadon/gallery/gallery-4.jpg" alt="Slider image 1" className='w-[200px] md:w-[350px] mx-2 lg:mx-4' width={1000} height={1000} />
            <Image src="/programmes/leadon/gallery/gallery-5.jpg" alt="Slider image 1" className='w-[200px] md:w-[350px] mx-2 lg:mx-4' width={1000} height={1000} />
            <Image src="/programmes/leadon/gallery/gallery-6.jpg" alt="Slider image 1" className='w-[200px] md:w-[350px] mx-2 lg:mx-4' width={1000} height={1000} />
            <Image src="/programmes/leadon/gallery/gallery-7.jpg" alt="Slider image 1" className='w-[200px] md:w-[350px] mx-2 lg:mx-4' width={1000} height={1000} />
        </Marquee>
        </div>
    </section>
  )
}

export default Gallery