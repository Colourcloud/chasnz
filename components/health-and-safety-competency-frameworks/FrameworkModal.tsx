import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
import { frameworksData } from './frameworkData';

// Separate modal component for better organization
const FrameworkModal = ({ 
  framework, 
  onClose,
  isPreloaded = false
}: { 
  framework: typeof frameworksData[0]; 
  onClose: () => void;
  isPreloaded?: boolean;
}) => {
  // Animation state
  const [isVisible, setIsVisible] = useState(false);
  
  // Trigger animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Handle closing with animation
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${isVisible ? 'opacity-90' : 'opacity-0'}`}
        onClick={handleClose}
      />
      
      {/* Modal container */}
      <div 
        className={`fixed inset-x-0 bottom-0 top-0 lg:top-[5%] bg-white rounded-t-none lg:rounded-t-xl overflow-y-auto transform transition-transform duration-300 ease-in-out will-change-transform ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Modal header with cover image */}
        <div className="relative h-[350px] lg:h-[600px] w-full flex flex-col justify-center items-center">
          <div className="absolute inset-0">
            <Image 
              src={framework.coverimage || framework.image}
              alt={framework.title}
              width={1920}
              height={1080}
              priority={!isPreloaded}
              className="object-cover w-full h-full"
              sizes="100vw"
              quality={80}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          
          {/* Close button back in original position */}
          <button 
            className="absolute top-4 right-4 z-10 text-white p-2"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <IoClose className="text-2xl" />
          </button>
          
          {/* Title and download button */}
          <div className="flex flex-col gap-6 relative z-10 text-center px-4">
            <h2 className='text-white text-2xl md:text-4xl lg:text-6xl font-medium max-w-3xl'>{framework.title}</h2>
            {framework.download && (
              <div className="self-center">
                <a 
                  href={framework.download.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-white text-sm font-medium rounded-full bg-[--primary-colour] hover:bg-opacity-90 transition-opacity"
                  data-hubspot-cta-id={framework.download.trackingId}
                >
                  Download Framework
                </a>
              </div>
            )}
          </div>
        </div>
        
        {/* Modal content */}
        <div className="p-6 md:p-8 max-w-5xl mx-auto my-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">What is {framework.title}?</h2>
          <p className="text-black text-base font-light">{framework.introduction}</p>
          
          {/* Framework details in two columns on larger screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 pb-24">
            <div className="space-y-6">
              {/* Candidates section */}
              {framework.candidates && (
                <div className="space-y-3">
                  <h3 className='text-[--primary-colour] text-lg font-medium'>{framework.candidates.title}</h3>
                  <p className='text-black text-base font-light'>{framework.candidates.content}</p>
                </div>
              )}
              
              {/* Framework section */}
              {framework.framework && (
                <div className="space-y-3">
                  <h3 className='text-[--primary-colour] text-lg font-medium'>{framework.framework.title}</h3>
                  <p className='text-black text-base font-light'>{framework.framework.content}</p>
                </div>
              )}
              
              {/* Knowledge section */}
              {framework.knowledge && (
                <div className="space-y-3">
                  <h3 className='text-[--primary-colour] text-lg font-medium'>{framework.knowledge.title}</h3>
                  {Array.isArray(framework.knowledge.content) ? (
                    framework.knowledge.content.map((item, index) => (
                      <p key={index} className='text-black text-base font-light'>{item}</p>
                    ))
                  ) : (
                    <p className='text-black text-base font-light'>{framework.knowledge.content}</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              {/* Experience section */}
              {framework.experience && (
                <div className="space-y-3">
                  <h3 className='text-[--primary-colour] text-lg font-medium'>{framework.experience.title}</h3>
                  {Array.isArray(framework.experience.content) ? (
                    framework.experience.content.map((item, index) => (
                      <p key={index} className='text-black text-base font-light'>{item}</p>
                    ))
                  ) : (
                    <p className='text-black text-base font-light'>{framework.experience.content}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameworkModal; 