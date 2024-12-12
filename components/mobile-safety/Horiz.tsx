'use client'

// components/HorizontalScrollSection.tsx
import React, { useRef, useEffect, useState } from 'react';
import AnimatedText from '../ui/AnimateText';
import { motion, AnimatePresence } from 'framer-motion'

interface ScrollItem {
  id: number;
  title: string;
  content?: React.ReactNode;
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
  itemHeight = '80vh',
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
    { id: 1, title: 'Section 1' },
    { id: 2, title: 'Section 2' },
    { id: 3, title: 'Section 3' },
    { id: 4, title: 'Section 4' },
    { id: 5, title: 'Section 5' },
  ];

  return (
    <section>
        <div className="flex flex-col gap-6 max-w-6xl mx-auto text-left md:text-center px-4">
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
      </div>


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
              className="flex-shrink-0 rounded-xl bg-gray-100 flex items-center justify-center"
              style={{ 
                width: itemWidth, 
                height: itemHeight,
              }}
            >
              {item.content ? (
                item.content
              ) : (
                <h2 className="text-4xl font-bold">{item.title}</h2>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>


    </section>
    
  );
};

export default HorizontalScrollSection;