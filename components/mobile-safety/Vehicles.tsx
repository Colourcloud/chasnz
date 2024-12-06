'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from '../ui/AnimateText'
import { motion } from 'framer-motion';

const Vehicles = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className="flex flex-col gap-6 max-w-6xl mx-auto text-center">
        <AnimatedText type="letter">
          <h2 className='text-2xl md:text-4xl lg:text-6xl font-semibold'>
            Types of Mobile Plant in Construction
          </h2>
        </AnimatedText>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className='text-black text-base md:text-lg font-base'
        >
          Plant encompasses vehicles, machinery, equipment, tools, vessels, and even aircraft used across various industries. In construction, this includes cranes, hoists, cutting and grinding tools, compressors, and earthmoving or excavation machinery. A subset of this is Mobile Plant, which refers specifically to movable equipment commonly used on construction sites, such as:
        </motion.p>
      </div>
    </section>
  )
}

export default Vehicles