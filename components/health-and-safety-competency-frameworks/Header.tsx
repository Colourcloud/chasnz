'use client';
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../common/Navigation';
import AnimatedText from '../ui/AnimateText';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Transform values based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  return (
    <>
      <div className='bg-black h-[100px]'>
        <Navigation />
      </div>
      <section className="bg-black">
        <div className='py-16 lg:py-32 relative overflow-hidden max-w-[1920px] mx-auto'>
            <div className="section-block relative z-10 flex flex-col h-full items-center justify-center">
                <div className="section-text max-w-6xl mx-auto flex flex-col gap-6 text-center px-4 lg:px-0">
                    <AnimatedText type="word">
                    <h1 className='text-3xl md:text-4xl lg:text-7xl text-white font-semibold tracking-tight'>
                        Health and Safety Competency Framework Documents
                    </h1>
                    </AnimatedText>
                    <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className='text-white text-base md:text-lg font-base'
                    >
                    Developed from existing New Zealand and International Best Practice.
                    </motion.p>
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className='mt-6'
                    >
                    <a href="#frameworks" className="px-6 text-white text-sm font-medium py-3 rounded-full bg-[--primary-colour] self-center">Download Competency Frameworks</a>
                    </motion.div>
                    
                </div>
            </div>

            <div className="vehicle-marquee mt-16 lg:mt-24">
                <Marquee gradient={false} className='max-w-max'>
                    <Image src="/health-and-safety-frameworks/asphalt.jpg" className='w-[200px] md:w-[400px] mx-2 lg:mx-4 h-full rounded-md' alt="asphalt" width={600} height={600} />
                    <Image src="/health-and-safety-frameworks/bulldozer.jpg" className='w-[200px] md:w-[400px] mx-2 lg:mx-4 h-full rounded-md' alt="bulldozer" width={600} height={600} />
                    <Image src="/health-and-safety-frameworks/carpenter.jpg" className='w-[200px] md:w-[400px] mx-2 lg:mx-4 h-full rounded-md' alt="carpenter" width={600} height={600} />
                    <Image src="/health-and-safety-frameworks/dump-truck.jpg" className='w-[200px] md:w-[400px] mx-2 lg:mx-4 h-full rounded-md' alt="dump truck" width={600} height={600} />
                    <Image src="/health-and-safety-frameworks/electrician.jpg" className='w-[200px] md:w-[400px] mx-2 lg:mx-4 h-full rounded-md' alt="electrician" width={600} height={600} />
                    <Image src="/health-and-safety-frameworks/excavator.jpg" className='w-[200px] md:w-[400px] mx-2 lg:mx-4 h-full rounded-md' alt="excavator" width={600} height={600} />
                    <Image src="/health-and-safety-frameworks/grader.jpg" className='w-[200px] md:w-[400px] mx-2 lg:mx-4 h-full rounded-md' alt="grader" width={600} height={600} />
                    <Image src="/health-and-safety-frameworks/dumper.jpg" className='w-[200px] md:w-[400px] mx-2 lg:mx-4 h-full rounded-md' alt="dumper" width={600} height={600} />
                </Marquee>
            </div>

        </div>
      </section>
    </>
  );
};

export default Header;