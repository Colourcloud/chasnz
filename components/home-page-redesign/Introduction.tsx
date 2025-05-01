'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedText from '../ui/AnimateText'
import { motion, useInView } from 'framer-motion'

const Introduction = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { 
      clipPath: 'inset(0 100% 0 0)',
      opacity: 0 
    },
    show: { 
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const paragraph = {
    hidden: { 
      opacity: 0,
      y: 40
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className='py-16 lg:py-32'>
        <div className="site-wrapper">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-24 items-center">
                <div className="flex flex-col gap-5 w-full lg:w-2/5">
                    <AnimatedText><h2 className='text-2xl md:text-3xl lg:text-5xl font-semibold !leading-8'>We keep tradies safe and Site-Ready in all construction sectors</h2></AnimatedText>
                    <motion.p 
                      variants={paragraph}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.5 }}
                      className='text-base lg:text-lg font-light'
                    >
                      Tradies are a diverse group of skilled workers essential to the functioning and development of the country&apos;s infrastructure and economy.
                    </motion.p>
                    <motion.p 
                      variants={paragraph}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.8 }}
                      className='text-base lg:text-lg font-light'
                    >
                      We help tradies all around the country by providing curated learning material and resources to help you get site-ready and remain safe in your workplace
                    </motion.p>
                </div>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-3/5"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex flex-col gap-5 mt-12">
                        <motion.div variants={item} className="w-full rounded-md overflow-hidden">
                            <Image 
                                src="/home/introduction-image-1.jpg" 
                                alt="Introduction" 
                                width={500}
                                height={375}
                                className='w-full h-auto object-cover'
                                priority
                            />
                        </motion.div>
                        <motion.div variants={item} className="w-full rounded-md overflow-hidden">
                            <Image 
                                src="/home/introduction-image-2.jpg" 
                                alt="Introduction" 
                                width={500}
                                height={375}
                                className='w-full h-auto object-cover'
                            />
                        </motion.div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <motion.div variants={item} className="w-full rounded-md overflow-hidden">
                            <Image 
                                src="/home/introduction-image-3.jpg" 
                                alt="Introduction" 
                                width={500}
                                height={375}
                                className='w-full h-auto object-cover'
                            />
                        </motion.div>
                        <motion.div variants={item} className="w-full rounded-md overflow-hidden">
                            <Image 
                                src="/home/introduction-image-4.jpg" 
                                alt="Introduction" 
                                width={500}
                                height={375}
                                className='w-full h-auto object-cover'
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Introduction