"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { frameworksData } from './frameworkData';
import FrameworkModal from './FrameworkModal';

// Framework data array


const Frameworks = () => {
  const [selectedFramework, setSelectedFramework] = useState<typeof frameworksData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);

  // Preload all framework cover images when component mounts
  useEffect(() => {
    const preloadImages = () => {
      // Create an array to track which images have been preloaded
      const preloaded: string[] = [];
      
      frameworksData.forEach(framework => {
        if (framework.coverimage) {
          // Create an HTMLImageElement to preload the image
          const img = document.createElement('img');
          img.src = framework.coverimage;
          img.onload = () => {
            preloaded.push(framework.coverimage);
            // Update state when an image is loaded
            setPreloadedImages(prev => [...prev, framework.coverimage]);
          };
        }
      });
    };
    
    preloadImages();
  }, []);

  // Handle opening a framework modal
  const handleOpenFramework = (framework: typeof frameworksData[0]) => {
    setSelectedFramework(framework);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  // Clean up body styles when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Function to check if a cover image is preloaded
  const isImagePreloaded = (coverimage: string) => {
    return preloadedImages.includes(coverimage);
  };

  return (
   <section className='py-16 lg:py-32' id="frameworks">
    <div className="site-wrapper">
        <div className="flex flex-col gap-6 max-w-4xl">
            <h4 className='text-2xl md:text-4xl lg:text-5xl font-semibold max-w-2xl !leading-tight'>Download our <span className='text-[--primary-colour]'>competency framework documents</span></h4>
            <p className='text-black text-base font-light lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus  aliquam ipsum ut egestas. Praesent non lobortis tellus. Donec mattis  lacinia orci, vitae cursus ex pulvinar vel. Vestibulum viverra ante eget sollicitudin lacinia. Vestibulum mollis</p>
        </div>
        
        {/* Hidden preload container for Next.js Image optimization */}
        <div className="hidden">
          {frameworksData.map((framework, index) => 
            framework.coverimage && (
              <Image 
                key={`preload-${index}`}
                src={framework.coverimage}
                alt=""
                width={1}
                height={1}
                priority={index < 4} // Prioritize loading the first few cover images
              />
            )
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mt-16">
            {frameworksData.map((framework, index) => (
                <div 
                  key={index} 
                  className="framework-card relative min-h-[200px] md:min-h-[400px] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => handleOpenFramework(framework)}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <Image 
                            src={framework.image} 
                            alt={framework.title} 
                            width={800} 
                            height={800} 
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 z-10">
                        <h6 className='text-white text-sm md:text-xl font-medium'>{framework.title}</h6>
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/* Framework Modal */}
    {isModalOpen && selectedFramework && (
      <FrameworkModal 
        framework={selectedFramework} 
        onClose={handleCloseModal} 
        isPreloaded={selectedFramework.coverimage ? isImagePreloaded(selectedFramework.coverimage) : false}
      />
    )}
   </section>
  )
}

export default Frameworks