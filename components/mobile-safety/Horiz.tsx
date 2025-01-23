'use client'

// components/HorizontalScrollSection.tsx
import React, { useRef, useEffect, useState } from 'react';
import AnimatedText from '../ui/AnimateText';
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ScrollItem {
  id: number;
  title: string;
  image: string;
  description: string[];
}

interface HorizontalScrollSectionProps {
  items?: ScrollItem[];
  itemWidth?: string;
  itemHeight?: string;
  gap?: number;
  className?: string;
}

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({
  items = [],
  itemWidth = '80vw',
  itemHeight = '70vh',
  gap = 8,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState('400vh');

  useEffect(() => {
    const calculateHeight = () => {
      if (sectionRef.current) {
        // Get the total scrollable width
        const totalScrollWidth = sectionRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        
        // Calculate how many viewports wide the content is
        const widthRatio = totalScrollWidth / viewportWidth;
        
        // Set container height to ensure complete horizontal scroll
        // Add some extra viewport height to ensure complete scroll
        setContainerHeight(`${widthRatio * 100 + 100}vh`);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const section = sectionRef.current;
      
      if (!container || !section) return;
      
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      
      // Get the total scrollable width
      const totalScrollWidth = section.scrollWidth - window.innerWidth;
      
      // Calculate the progress through the section
      const scrollProgress = Math.min(Math.max(-containerTop / (container.offsetHeight - window.innerHeight), 0), 1);
      
      // Apply the transform
      const translateX = totalScrollWidth * scrollProgress;
      section.style.transform = `translateX(-${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultItems: ScrollItem[] = items.length ? items : [
    {
      id: 1,
      title: 'Form a group of competent workers',
      image: '/mobile-safety/placeholder.webp',
      description: [
        'Construction work sites present a range of hazards outside of plant operation and so it is important for work area controllers to consider minimum safety standards for competency to access a construction work site.'
      ]
    },
    {
      id: 2,
      title: 'Agree on a standard to measure',
      image: '/mobile-safety/placeholder.webp',
      description: [
        'The group should collectively decide the hazards and appropriate control measures that every worker must know, and demonstrate, to be safe in this job.'
      ]
    },
    {
      id: 3,
      title: 'Develop and deliver materials to train workers',
      image: '/mobile-safety/placeholder.webp',
      description: [
        'Work area controllers should have the ability to access both industry and company standards when considering minimum competency standards.'
      ]
    },
    {
      id: 4,
      title: 'Measure worker knowledge as a minimum standard',
      image: '/mobile-safety/placeholder.webp',
      description: [
        'As a minimum, it is recommended that each trained operator should be assessed to measure their understanding gained through training.'
      ]
    },
    {
      id: 5,
      title: 'Measure worker application of skill to exceed a standard',
      image: '/mobile-safety/placeholder.webp',
      description: [
        'Once an operator has demonstrated the minimum required knowledge of the standard by succeeding in a knowledge assessment, they should then demonstrate evidence that they are applying that knowledge at work.'
      ]
    },
    // ... you can add more items following this structure
  ];

  return (
    <section>
        {/* <div className="flex flex-col gap-6 max-w-6xl mx-auto text-left md:text-center px-4">
        <AnimatedText type="letter">
          <h2 className='text-4xl md:text-4xl lg:text-6xl font-semibold'>
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
      </div> */}


      <div 
      className={`relative ${className}`} 
      ref={containerRef}
      style={{ height: containerHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={sectionRef}
          className="flex will-change-transform"
          style={{ 
            gap: `${gap}rem`, 
            padding: `${gap}rem`,
          }}
        >
          {defaultItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 bg-white border rounded-lg overflow-hidden"
              style={{ 
                width: itemWidth, 
                height: itemHeight,
              }}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-[40%] h-[40%] md:h-full relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                
                <div className="w-full md:w-[60%] p-6 md:p-12 overflow-y-auto flex flex-col justify-center h-[60%] md:h-full">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{item.title}</h2>
                  
                  <div className="space-y-4">
                    {item.description.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 text-sm md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </section>
    
  );
};

export default HorizontalScrollSection;