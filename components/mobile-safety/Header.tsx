'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../common/Navigation';
import AnimatedText from '../ui/AnimateText';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  // Transform values based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  return (
    <>
      <div className='bg-[#1C242E] h-[100px]'>
        <Navigation />
      </div>
      <section className="bg-white py-16 lg:py-32 relative overflow-hidden max-w-[1920px] mx-auto">
        <div className="section-block relative z-10 flex flex-col h-full items-center justify-center">
          <div className="section-text max-w-5xl mx-auto flex flex-col gap-6 text-center">
            <AnimatedText type="letter">
              <h1 className='text-4xl md:text-4xl lg:text-8xl text-black font-semibold tracking-tight'>
                Mobile Plant Safety
              </h1>
            </AnimatedText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className='text-black text-base md:text-lg font-base'
            >
              We have developed various guidance and tools for construction plant and equipment sector. 
              The use of Mobile Plant in construction is common and carries with it significant hazards 
              that can affect both operators of Mobile Plant and those working around them.
            </motion.p>
          </div>
          <motion.div 
            className="section-image w-full md:w-4/5 max-w-[1920px] mx-auto mt-24 rounded-lg overflow-hidden"
            style={{
              scale,
              opacity
            }}
          >
            <Image 
              src="/mobile-safety/header-image.jpg" 
              alt='' 
              width={1920} 
              height={1080} 
              className='w-full max-h-[600px] object-cover' 
            />
          </motion.div>
        </div>
        <div className="marquee absolute flex bottom-0 w-full h-16 overflow-hidden bg-[url('/mobile-safety/tape-bg.svg')] bg-repeat-x">
          <div className="marquee-content whitespace-nowrap animate-marquee flex items-center">
            {[...Array(25)].map((_, i) => (
              <span key={i} className="inline-block px-4 text-[#FEC400] font-bold text-2xl transform">
                WARNING
              </span>
            ))}
          </div>
        </div>
        <div className="marquee-two absolute flex bottom-0 w-full h-16 overflow-hidden bg-[url('/mobile-safety/tape-bg.svg')] bg-repeat-x">
          <div className="marquee-content whitespace-nowrap animate-marquee flex items-center">
            {[...Array(25)].map((_, i) => (
              <span key={i} className="inline-block px-4 text-[#FEC400] font-bold text-2xl transform">
                SAFETY
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;