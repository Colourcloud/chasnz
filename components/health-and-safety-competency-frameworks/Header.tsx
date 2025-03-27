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
                    <h1 className='text-4xl md:text-4xl lg:text-7xl text-white font-semibold tracking-tight'>
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
                <Marquee gradient={false} speed={40} autoFill={true} delay={0}>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/asphalt.jpg" className='object-cover w-full h-full' alt="asphalt" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/bulldozer.jpg" className='object-cover w-full h-full' alt="bulldozer" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/carpenter.jpg" className='object-cover w-full h-full' alt="carpenter" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/dump-truck.jpg" className='object-cover w-full h-full' alt="dump truck" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/dumper.jpg" className='object-cover w-full h-full' alt="dumper" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/electrician.jpg" className='object-cover w-full h-full' alt="electrician" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/excavator.jpg" className='object-cover w-full h-full' alt="excavator" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/grader.jpg" className='object-cover w-full h-full' alt="grader" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/health-and-safety.jpg" className='object-cover w-full h-full' alt="health and safety" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/loader.jpg" className='object-cover w-full h-full' alt="loader" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/roller.jpg" className='object-cover w-full h-full' alt="roller" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/rotary-broom.jpg" className='object-cover w-full h-full' alt="rotary broom" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/scaffolding.jpg" className='object-cover w-full h-full' alt="scaffolding" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/scraper.jpg" className='object-cover w-full h-full' alt="scraper" width={800} height={800} />
                    </div>
                    <div className="aspect-square overflow-hidden max-w-[400px] mx-3">
                        <Image src="/health-and-safety-frameworks/telehandler.jpg" className='object-cover w-full h-full' alt="telehandler" width={800} height={800} />
                    </div>
                </Marquee>
            </div>

        </div>
      </section>
    </>
  );
};

export default Header;