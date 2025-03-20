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
      className="relative overflow-hidden h-[600px] md:h-[800px] mt-12 lg:mt-32"
    >
      <div 
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
        style={{
          backgroundImage: `url('/programmes/leadon/parallax.jpg')`,
          transform: `translateY(${calculateBackgroundPosition()}px)`,
        }}
      />
      <div className="uppercase relative z-10 flex items-center justify-center text-center h-full text-white text-4xl md:text-4xl lg:text-6xl font-bold">
        Looking after our frontline leaders
      </div>
    </section>
  );
};

export default ParallaxSection;