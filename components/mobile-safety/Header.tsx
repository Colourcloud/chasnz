'use client';
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../common/Navigation';
import AnimatedText from '../ui/AnimateText';
import Link from 'next/link';

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
          <div className="section-text max-w-5xl mx-auto flex flex-col gap-6 text-center">
            <AnimatedText type="letter">
              <h1 className='text-4xl md:text-4xl lg:text-8xl text-white font-semibold tracking-tight'>
                Mobile Plant Safety
              </h1>
            </AnimatedText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className='text-white text-base md:text-lg font-base'
            >
              We have developed various guidance and tools for construction plant and equipment sector.
              The use of Mobile Plant in construction is common and carries with it significant hazards
              that can affect both operators of Mobile Plant and those working around them.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className='mt-12'
              >
              <Link href="http://cms.chasnz.org/wp-content/uploads/2024/12/CHASNZ-Guide-to-Mobile-Plant-Safety.pdf" target='_blank' className='px-6 text-white text-sm font-medium py-3 rounded-full bg-[--primary-colour] self-center'>Download Presentation</Link>
            </motion.div>
            
          </div>
          <motion.div
            className="section-image w-full md:w-4/5 max-w-[1920px] mx-auto mt-24 rounded-lg overflow-hidden relative"
            style={{
              scale,
              opacity
            }}
          >
            <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/mobile-safety/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Header;