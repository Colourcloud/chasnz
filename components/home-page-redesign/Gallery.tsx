'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -500])

  return (
    <section className='py-16 lg:py-40'>
        <div className="site-wrapper">
            <div className="flex flex-col gap-6 text-center">
                <h6 className='text-2xl md:text-4xl lg:text-5xl font-semibold'><span className='text-white bg-[--primary-colour] px-2'>Rethinking Safety</span> Across the Industry</h6>
                <p className='text-base md:text-lg max-w-4xl mx-auto font-light'>The construction industry is made up of people from all walks of life, working across a wide range of environments, from city builds to rural projects. At CHASNZ, we&apos;re proud to stand alongside every part of the sector, supporting safer, healthier workplaces no matter where the work happens.</p>
            </div>
        </div>
        <div ref={containerRef} className="leadon-gallery mt-12 max-w-[2560px] mx-auto overflow-hidden">
            <motion.div 
                className="flex gap-4"
                style={{ x }}
            >
                <div className="relative w-[200px] md:w-[600px] flex-shrink-0 rounded-sm overflow-hidden">
                    <Image src="/programmes/wsnh/trade-images/brick.jpg" alt="Brick Laying" className='w-full h-full object-cover' width={1000} height={700} />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <p className="absolute bottom-6 left-6 text-white font-medium text-lg lg:text-xl">Brick Laying</p>
                </div>
                <div className="relative w-[200px] md:w-[600px] flex-shrink-0 rounded-sm overflow-hidden">
                    <Image src="/programmes/wsnh/trade-images/building.jpg" alt="Building" className='w-full h-full object-cover' width={1000} height={700} />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <p className="absolute bottom-6 left-6 text-white font-medium text-lg lg:text-xl">Building</p>
                </div>
                <div className="relative w-[200px] md:w-[600px] flex-shrink-0 rounded-sm overflow-hidden">
                    <Image src="/programmes/wsnh/trade-images/concrete.jpg" alt="Concrete" className='w-full h-full object-cover' width={1000} height={700} />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <p className="absolute bottom-6 left-6 text-white font-medium text-lg lg:text-xl">Concrete</p>
                </div>
                <div className="relative w-[200px] md:w-[600px] flex-shrink-0 rounded-sm overflow-hidden">
                    <Image src="/programmes/wsnh/trade-images/electricians.jpg" alt="Electricians" className='w-full h-full object-cover' width={1000} height={700} />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <p className="absolute bottom-6 left-6 text-white font-medium text-lg lg:text-xl">Electricians</p>
                </div>
                <div className="relative w-[200px] md:w-[600px] flex-shrink-0 rounded-sm overflow-hidden">
                    <Image src="/programmes/wsnh/trade-images/flooring.jpg" alt="Flooring" className='w-full h-full object-cover' width={1000} height={700} />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <p className="absolute bottom-6 left-6 text-white font-medium text-lg lg:text-xl">Flooring</p>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Gallery