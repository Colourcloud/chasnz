'use client'

import React, { useState, useEffect } from 'react'

const Header = () => {
  const industries = ["Construction", "Health & Safety", "Manufacturing", "Transport", "Energy"];
  const [currentIndustry, setCurrentIndustry] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="header-section w-full h-[90dvh] relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="absolute inset-0 min-w-full min-h-full object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/mobile-safety/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional overlay to darken the video and make text more readable */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col gap-3 items-center justify-center text-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 max-w-6xl mx-auto flex flex-col items-center">
            <div className="mb-2">
                Safer workplaces and stronger standards in
            </div>
            <div className="flex items-center justify-center w-full h-[1em]">
              <div className="relative w-full py-2 text-center text-[--primary-colour] overflow-hidden">
                {industries.map((industry, index) => (
                  <div 
                    key={industry}
                    className="absolute whitespace-nowrap transition-all duration-500" 
                    style={{ 
                      left: '50%', 
                      transform: `translateX(-50%) translateY(${currentIndustry === index ? '0' : '2rem'})`,
                      opacity: currentIndustry === index ? 1 : 0
                    }}
                  >
                    {industry}
                  </div>
                ))}
                <div className="opacity-0">{industries[industries.length - 1]}</div>
              </div>
            </div>
        </h1>
        <p className="text-base md:text-lg text-center max-w-3xl">
            Our vision is to shift health and safety in the construction industry from inconsistent compliance to consistent competence to have health and safe workers as a natural outcome of good work.
        </p>
      </div>
    </section>
  )
}

export default Header