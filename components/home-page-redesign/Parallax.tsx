'use client'

import React, { useEffect, useRef, useState } from 'react';

const ParallaxSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxFactor = 0.3; // Lower values = slower parallax movement

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate background position based on scroll
  const calculateBackgroundPosition = () => {
    if (!sectionRef.current) return 0;
    
    // Get the section's position relative to the page
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTopRelativeToPage = rect.top + window.scrollY;
    
    // Calculate how far we've scrolled past the start of the section
    const scrollPastSection = window.scrollY - sectionTopRelativeToPage;
    
    // Apply parallax effect only when the section is in or near the viewport
    return scrollPastSection * parallaxFactor;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden h-[600px] md:h-[900px] mt-16 lg:mt-32"
    >
      <div 
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
        style={{
          backgroundImage: `url('/home/national-reach.jpg')`,
          transform: `translateY(${calculateBackgroundPosition()}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="px-4 lg:px-0 relative z-10 flex flex-col gap-6 items-center justify-center text-center h-full max-w-5xl mx-auto">
        <h6 className='text-white text-4xl md:text-4xl lg:text-6xl font-semibold'>Building a Safer Industry, <span className='text-[--primary-colour]'>Together</span></h6>
        <p className='text-white text-base md:text-lg lg:text-xl font-light'>The construction industry has 250,000 workers who make up the sector. At CHASNZ we maintain a national reach, from high rise construction to laying the foundations of the milking shed. This is how we are achieving our goal to raise the standard of health and safety culture and performance across the construction industry in New Zealand.</p>
      </div>
    </section>
  );
};

export default ParallaxSection;