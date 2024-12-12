'use client'

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GreenParallax = () => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to scale value
  // As user scrolls, scale will increase from 1 to 1.5
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.5, 1.5]);
  
  return (
    <div className="h-[70vh] w-full flex items-center justify-center overflow-hidden relative">
      <motion.div 
        className="bg-green-500 w-full h-full"
        style={{
          scale,
          transformOrigin: 'center center'
        }}
      />
    </div>
  );
};

export default GreenParallax;