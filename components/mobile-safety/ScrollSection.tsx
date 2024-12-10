'use client'

import Image from 'next/image';
import AnimatedText from '../ui/AnimateText';
import { motion } from 'framer-motion'

const Services = () => {
    const serviceContent = [
        {
            image: '/mobile-safety/compentent-workers.jpg',
            title: 'Form a group of competent workers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla accumsan nulla, id luctus neque dictum ac. Fusce vel elit iaculis, egestas nulla quis, feugiat nulla'
        },
        {
            image: '/mobile-safety/measure.jpg',
            title: 'Agree on a standard to measure',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla accumsan nulla, id luctus neque dictum ac. Fusce vel elit iaculis, egestas nulla quis, feugiat nulla'
        },
        {
            image: '/mobile-safety/train.jpg',
            title: 'Develop and deliver materials to train workers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla accumsan nulla, id luctus neque dictum ac. Fusce vel elit iaculis, egestas nulla quis, feugiat nulla'
        },
        {
            image: '/mobile-safety/train.jpg',
            title: 'Measure worker knowledge as a minimum standard',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla accumsan nulla, id luctus neque dictum ac. Fusce vel elit iaculis, egestas nulla quis, feugiat nulla'
        },
        {
            image: '/mobile-safety/train.jpg',
            title: 'Measure worker application of skill to exceed a standard',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla accumsan nulla, id luctus neque dictum ac. Fusce vel elit iaculis, egestas nulla quis, feugiat nulla'
        }
    ];

    return (
        <div className='bg-[--dark-blue] py-24 lg:py-32 relative'>
                <div className="marquee absolute flex top-[20%] z-[1] w-full h-16 overflow-hidden bg-[url('/mobile-safety/tape-bg.svg')] bg-repeat-x">
                    <div className="marquee-content whitespace-nowrap animate-marquee flex items-center">
                        {[...Array(25)].map((_, i) => (
                        <span key={i} className="inline-block px-4 text-[#FEC400] font-bold text-2xl transform">
                            SAFETY
                        </span>
                        ))}
                    </div>
                </div>

                <div className="marquee-two absolute flex top-[40%] z-[1] w-full h-16 overflow-hidden bg-[url('/mobile-safety/tape-bg.svg')] bg-repeat-x">
                    <div className="marquee-content whitespace-nowrap animate-marquee flex items-center">
                        {[...Array(25)].map((_, i) => (
                        <span key={i} className="inline-block px-4 text-[#FEC400] font-bold text-2xl transform">
                            WARNING
                        </span>
                        ))}
                    </div>
                </div>

                <div className="marquee absolute flex top-[60%] z-[1] w-full h-16 overflow-hidden bg-[url('/mobile-safety/tape-bg.svg')] bg-repeat-x">
                    <div className="marquee-content whitespace-nowrap animate-marquee flex items-center">
                        {[...Array(25)].map((_, i) => (
                        <span key={i} className="inline-block px-4 text-[#FEC400] font-bold text-2xl transform">
                            SAFETY
                        </span>
                        ))}
                    </div>
                </div>

                <div className="marquee-two absolute flex top-[80%] z-[1] w-full h-16 overflow-hidden bg-[url('/mobile-safety/tape-bg.svg')] bg-repeat-x">
                    <div className="marquee-content whitespace-nowrap animate-marquee flex items-center">
                        {[...Array(25)].map((_, i) => (
                        <span key={i} className="inline-block px-4 text-[#FEC400] font-bold text-2xl transform">
                            WARNING
                        </span>
                        ))}
                    </div>
                </div>
            <div className="max-w-6xl mx-auto px-4">
                {/* Desktop View */}
                <div className="hidden md:flex md:flex-col gap-72">
                    
                    {serviceContent.map((content, index) => (
                        <div key={index} className="relative flex flex-row items-center gap-10 z-10">
                            <div className="w-2/5 flex flex-col gap-6">
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-24 w-24 bg-[--primary-colour] rounded-lg"
                                />
                                <AnimatedText>
                                    <h4 className='text-white text-4xl font-semibold'>{content.title}</h4>
                                </AnimatedText>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                    className='text-white text-base md:text-lg font-base'
                                >
                                    {content.description}
                                </motion.p>
                            </div>
                            <motion.div 
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 1 }} // Requires 70% of element to be visible
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="w-3/5"
                            >
                                <Image 
                                    src={content.image} 
                                    alt={content.title} 
                                    className="w-full rounded-lg" 
                                    width={1200} 
                                    height={1200}
                                    priority={true}
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <section className='mobile-services-layout pb-40 visible md:invisible flex gap-16 flex-col md:hidden'>
                    <div className="content-block flex flex-col gap-8">
                            <Image src="/mobile-safety/compentent-workers.jpg" alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image>
                        <div className="content-text flex flex-col gap-4">
                            <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-16 w-16 bg-[--primary-colour] rounded-lg"
                                />
                            <AnimatedText><h4 className='text-white text-2xl font-semibold'>Form a group of competent workers</h4></AnimatedText>
                            <p className='text-white text-base'>Just because they&apos;re pre-built does not mean you lose the freedom to make your website your own. Our template websites are still highly customisable to suit your brand and capture your uniqueness.</p>
                        </div>
                    </div>
                    <div className="content-block flex flex-col gap-8">
                            <Image src="/mobile-safety/measure.jpg" alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image>
                        <div className="content-text flex flex-col gap-4">
                            <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-16 w-16 bg-[--primary-colour] rounded-lg"
                                />
                            <AnimatedText><h4 className='text-white text-2xl font-semibold'>Agree on a standard to measure</h4></AnimatedText>
                            <p className='text-white text-base'>We have a large collection of pre-designed elements & templates that have already been tried & tested for a large range of different industries. This allows our clients to save time & cost for their projects</p>
                        </div>
                    </div>
                    <div className="content-block flex flex-col gap-8">
                            <Image src="/mobile-safety/train.jpg" alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image>
                        <div className="content-text flex flex-col gap-4">
                            <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-16 w-16 bg-[--primary-colour] rounded-lg"
                                />
                            <AnimatedText><h4 className='text-white text-2xl font-semibold'>Develop and deliver materials to train workers</h4></AnimatedText>
                            <p className='text-white text-base'>We&apos;re constantly improving and upgrading our templates and components to make sure they stay up to date with the ever-evolving digital world.</p>
                        </div>
                    </div>
                    <div className="content-block flex flex-col gap-8">
                            <Image src="/mobile-safety/train.jpg" alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image>
                        <div className="content-text flex flex-col gap-4">
                            <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-16 w-16 bg-[--primary-colour] rounded-lg"
                                />
                            <AnimatedText><h4 className='text-white text-2xl font-semibold'>Measure worker knowledge as a minimum standard</h4></AnimatedText>
                            <p className='text-white text-base'>We&apos;re constantly improving and upgrading our templates and components to make sure they stay up to date with the ever-evolving digital world.</p>
                        </div>
                    </div>
                    <div className="content-block flex flex-col gap-8">
                            <Image src="/mobile-safety/train.jpg" alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image>
                        <div className="content-text flex flex-col gap-4">
                            <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-16 w-16 bg-[--primary-colour] rounded-lg"
                                />
                            <AnimatedText><h4 className='text-white text-2xl font-semibold'>Measure worker application of skill to exceed a standard</h4></AnimatedText>
                            <p className='text-white text-base'>We&apos;re constantly improving and upgrading our templates and components to make sure they stay up to date with the ever-evolving digital world.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;