'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedText from '@/components/ui/AnimateText'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const IntroductionNew = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  // Base variant for paragraphs
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  }
  
  // First paragraph variant
  const firstParagraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  }
  
  // Second paragraph variant with delay
  const secondParagraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6
      }
    }
  }
  
  return (
    <section className="py-12 lg:py-32">
        <div className="site-wrapper">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-center" ref={sectionRef}>
                <div className='flex flex-col gap-4 md:gap-6 w-full lg:w-2/5'>
                    <AnimatedText><h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold'>Empowering Frontline Leaders for Safer Workplaces</h2></AnimatedText>
                    <motion.p 
                        className='text-base font-light md:text-lg text-[--text-colour]'
                        variants={firstParagraphVariant}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        CHASNZ is working with the industry to develop our frontline leaders to build the capacity and capabilities that our frontline need to lead the safe execution of work.
                    </motion.p>
                    <motion.p 
                        className='text-base font-light md:text-lg text-[--text-colour]'
                        variants={secondParagraphVariant}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        The Lead On. programme recognises the key role frontline leaders have in making a difference with how work is done and provides a framework for supervisors to develop leadership skills and capability for more effective onsite safety management.
                    </motion.p>
                </div>
                <div className='w-full lg:w-1/2 relative'>
                    <Image 
                        src="/programmes/leadon/introduction-image.jpg" 
                        alt="Leadon team member standing in front of a whiteboard" 
                        width={1000} 
                        height={1000} 
                        className="w-full h-auto"
                    />
                    <motion.div 
                        className="absolute top-0 right-0 bottom-0 bg-white w-full h-full origin-right"
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: isInView ? 0 : 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default IntroductionNew