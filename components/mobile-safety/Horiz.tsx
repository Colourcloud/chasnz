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
  list?: string[]; // Optional array of list items
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
  gap = 6,
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
      title: 'Mobile Plant Safety in Construction',
      image: '/mobile-safety/slide-images/cover.jpg',
      description: [
        'CHASNZ and industry; working together to achieve consistent site access standards and safer worksites for everyone.',
        'When considering the question of what is reasonably practicable in the context of the HSWA the regulator and courts will apply relevant legislation, approved codes of practice',
        'CHASNZ is seen by WorkSafe NZ as a provider of industry guidance for the construction industry.'
      ]
    },
    {
      id: 2,
      title: 'Introduction',
      image: '/mobile-safety/slide-images/introduction.jpg',
      description: [
        'The use of Mobile Plant in construction is common and carries with it significant hazards that can affect both operators of Mobile Plant and those working around them.',
        'Under the Health and Safety at Work Act 2015, duties are placed on those who control work sites, those who own mobile plant, and those who operate it.',
        'This guide has been created to assist these parties in planning, selecting, operating, maintaining and responsibly retiring mobile plant in a construction setting.'
      ]
    },
    {
      id: 3,
      title: 'Types of Mobile Plant',
      image: '/mobile-safety/slide-images/types-of-mobile.jpg',
      description: [
        'Plant includes any vehicle, machinery, equipment, tool, vessel and/or aircraft etc. Examples in construction include cranes and hoists, cutting and grinding equipment, compressors, and earthmoving and excavation machinery.',
        'Mobile Plant is a sub sector of this group and includes a variety of machines, including common construction equipment like:'
      ],
      list: [
        'Asphalt pavers',
        'Mobile cranes',
        'Concrete pump trucks',
        'Mobile elevated work platforms',
        'Excavators',
        'Rollers',
        'Loaders',
        'Telehandlers'
      ]
    },
    {
      id: 4,
      title: 'Machine design safety considerations',
      image: '/mobile-safety/placeholder.webp',
      description: [
        'To best understand this, your company should undertake a risk assessment to determine the best type of machine, or machines to suit the needs of the expected work activity.',
        'When importing machinery, the buyer should verify that the manufacturing standard of the machine meets the current New Zealand, or International standard for manufacture. These can be found by visiting www.standards.govt.nz.',
        'As part of a risk assessment process, particularly when considering a specific machine that is not newly manufactured, consideration must be given to the safety features of the machine in comparison to newly manufactured equipment.'
      ]
    },
    {
      id: 5,
      title: 'Plant safety considerations for those controlling work areas',
      image: '/mobile-safety/placeholder.webp',
      description: [
        'The Act places duties on those who control work areas. Often in construction these are not the companies who operate mobile plant within the work site.',
        'Those who control work areas are not always competent in assessing the requirement of mobile plant to undertake a specific task, and so there are cross over duties between the work area controller and the machine operator (or mobile plant owner).',
        'Prior to selecting types of mobile plant for use in a work area, steps should be taken to ensure that any mobile plant in a work area is firstly safe to be operated.'
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
              className="flex-shrink-0 bg-white border rounded-lg overflow-hidden slider-box"
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
                  <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">{item.title}</h2>
                  
                  <div className="space-y-4">
                    {item.description.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 text-sm md:text-base">
                        {paragraph}
                      </p>
                    ))}
                    {item.list && item.list.length > 0 && (
                      <ul className="list-disc pl-4 flex flex-row flex-wrap gap-5">
                        {item.list.map((listItem, index) => (
                          <li key={index} className="text-gray-700 text-sm md:text-base">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
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