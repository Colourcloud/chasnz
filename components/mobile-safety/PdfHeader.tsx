'use client'

import React from 'react'
import AnimatedText from '../ui/AnimateText'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PdfHeader = () => {
  const containerRef = useRef(null)
  const paragraphRef = useRef(null)
  
  const isParagraphInView = useInView(paragraphRef, { once: true })
  const isContainerInView = useInView(containerRef, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5  // Add this line to delay the paragraph animation
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className='py-16 lg:py-32 mobile-safety-download px-4'>
      <div className="max-w-6xl mx-auto text-center flex flex-col gap-6 h-full justify-center">
        <AnimatedText type='letter'>
          <h3 className='text-4xl md:text-4xl lg:text-6xl font-semibold text-white'>
            Mobile Plant Safety guidance
          </h3>
        </AnimatedText>

        <motion.p 
          ref={paragraphRef}
          variants={paragraphVariants}
          initial="hidden"
          animate={isParagraphInView ? "visible" : "hidden"}
          className='text-base md:text-2xl lg:text-xl text-white'
        >
          Within the Mobile Plant Safety guidance - you will find insightful detailed information on how to implement a machine safety management system for companies including jobs to undertake for each critical category:
        </motion.p>

        <motion.div 
          ref={containerRef}
          className="flex flex-row flex-wrap gap-6 max-w-6xl mx-auto justify-center mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isContainerInView ? "visible" : "hidden"}
        >
          {[
            "Before procuring mobile plant",
            "When managing mobile plant",
            "Record keeping for each item of mobile plant",
            "Record keeping for work activities"
          ].map((text, index) => (
            <motion.div 
              key={index}
              className="flex flex-col gap-4 items-center w-[45%] md:w-[20%]"
              variants={itemVariants}
            >
              <span className='w-10 h-10 flex justify-center items-center rounded-full bg-[--primary-colour] text-white font-semibold text-xl'>
                {index + 1}
              </span>
              <p className='text-white text-lg md:text-lg font-semibold'>
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PdfHeader