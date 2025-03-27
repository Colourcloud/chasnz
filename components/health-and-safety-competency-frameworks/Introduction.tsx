'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import AnimatedText from '../ui/AnimateText'

const Introduction = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  return (
    <section ref={sectionRef} className='py-16 lg:py-32 border-b'>
        <div className="site-wrapper">
            <div className="flex flex-col gap-8 lg:gap-16 lg:flex-row justify-between items-center">
                <div className="flex flex-col gap-6 w-full lg:w-2/5">
                    <AnimatedText type="word"><h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold'>Trades Health and safety competency</h2></AnimatedText>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.4 }} className='text-black text-base font-light' >
                        We have developed a range of Health and Safety Competency framework documents for the Trades Sector, allowing those who design and contribute to construction health and safety training content to align with ConstructSafe Trades Health and Safety Competency assessment for specific trades.
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.4 }} className='text-black text-base font-light' >
                        The intent is to make it easy for training content to meet the knowledge and aptitude requirements that candidates need to meet the standard. All of these frameworks are FREE to access. Please email us at <a href="mailto:info@chasnz.org">info@chasnz.org</a> with any queries or feedback.
                    </motion.p>
                </div>
                <div className="w-full lg:w-3/5">
                    <div className="grid grid-cols-12 gap-3">
                        {/* First large image (left side) */}
                        <motion.div 
                            className="col-span-12 md:col-span-6 h-[400px] lg:h-[600px]"
                            initial={{ opacity: 0, x: 100 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Image 
                                src="/health-and-safety-frameworks/asphalt.jpg" 
                                className="object-cover w-full h-full rounded-lg" 
                                alt="Road construction with asphalt" 
                                width={800} 
                                height={800} 
                            />
                        </motion.div>
                        {/* Two stacked images (right side) */}
                        <div className="col-span-12 md:col-span-6 grid grid-rows-2 gap-3 h-[400px] lg:h-[600px]">
                            <motion.div 
                                className="h-full"
                                initial={{ opacity: 0, x: 100 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <Image 
                                    src="/health-and-safety-frameworks/bulldozer.jpg" 
                                    className="object-cover w-full h-full rounded-lg" 
                                    alt="Bulldozer at construction site" 
                                    width={800} 
                                    height={400} 
                                />
                            </motion.div>
                            <motion.div 
                                className="h-full"
                                initial={{ opacity: 0, x: 100 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                <Image 
                                    src="/health-and-safety-frameworks/excavator.jpg" 
                                    className="object-cover w-full h-full rounded-lg" 
                                    alt="Excavator at construction site" 
                                    width={800} 
                                    height={400} 
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Introduction