"use client"

import React, { useState, useEffect } from 'react'
import AnimatedText from '../ui/AnimateText'
import Image from 'next/image'
import { IoClose } from "react-icons/io5";
import { frameworksData } from './frameworkData';

// Framework data array


const Frameworks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState<typeof frameworksData[0] | null>(null);
  const [animateModal, setAnimateModal] = useState(false);

  const handleOpenFramework = (framework: typeof frameworksData[0]) => {
    setSelectedFramework(framework);
    setIsOpen(true);
    // Add small delay to trigger the animation after the modal is rendered
    setTimeout(() => {
      setAnimateModal(true);
    }, 10);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setAnimateModal(false);
    // Add delay to match the animation duration before hiding the modal
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  // Clean up the body style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
   <section className='py-16 lg:py-32' id="frameworks">
    <div className="site-wrapper">
        <div className="flex flex-col gap-6 max-w-4xl">
            <h4 className='text-2xl md:text-4xl lg:text-5xl font-semibold max-w-2xl !leading-tight'>Download our <span className='text-[--primary-colour]'>competency framework documents</span></h4>
            <p className='text-black text-base font-light lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus  aliquam ipsum ut egestas. Praesent non lobortis tellus. Donec mattis  lacinia orci, vitae cursus ex pulvinar vel. Vestibulum viverra ante eget sollicitudin lacinia. Vestibulum mollis</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {frameworksData.map((framework, index) => (
                <div 
                  key={index} 
                  className="framework-card relative min-h-[400px] rounded-lg overflow-hidden cursor-pointer"
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
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <h6 className='text-white text-lg md:text-xl font-medium'>{framework.title}</h6>
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/* Custom Modal */}
    {isOpen && (
      <div className="fixed inset-0 z-50">
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${animateModal ? 'opacity-90' : 'opacity-0'}`}
          onClick={handleCloseModal}
        ></div>
        
        {/* Modal Content */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-xl h-[95vh] transform transition-transform duration-300 ease-in-out overflow-auto ${animateModal ? 'translate-y-0' : 'translate-y-full'}`}
        >
            <div className="frameworks-modal-cover w-full h-[600px] relative flex flex-col justify-center items-center">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src={selectedFramework?.coverimage || selectedFramework?.image || ''}
                        alt={selectedFramework?.title || 'Framework cover'}
                        width={1920}
                        height={1080}
                        priority
                        className="object-cover h-full w-full"
                        sizes="100vw"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <span className='text-white text-sm font-medium cursor-pointer z-10 absolute top-10 right-10' onClick={handleCloseModal}><IoClose className='text-2xl' /></span>
                
                <div className="flex flex-col gap-6 relative z-10">
                    <h6 className='text-white text-2xl md:text-4xl lg:text-6xl font-medium max-w-3xl text-center'>{selectedFramework?.title}</h6>
                    <div className={`hs-web-interactive-inline px-6 text-white text-sm font-medium py-3 rounded-full bg-[--primary-colour] self-center`} data-hubspot-wrapper-cta-id={selectedFramework?.download?.trackingId}>
                        <a 
                          href={selectedFramework?.download?.link} 
                          className={`hs-inline-web-interactive-${selectedFramework?.download?.trackingId}`} 
                          target="_blank" 
                          rel="noopener" 
                          data-hubspot-cta-id={selectedFramework?.download?.trackingId}
                        >
                          Download Framework
                        </a>
                    </div>
                </div>
            </div>
          <div className="p-6 md:p-8 max-w-5xl mt-10 mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">What is {selectedFramework?.title}?</h2>
            <p className="text-black text-base font-light">{selectedFramework?.introduction}</p>
            <div className="flex flex-col lg:flex-row gap-8 justify-between mt-12">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <h6 className='text-[--primary-colour] text-lg font-medium'>{selectedFramework?.candidates?.title}</h6>
                        <p className='text-black text-base font-light'>{selectedFramework?.candidates?.content}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h6 className='text-[--primary-colour] text-lg font-medium'>{selectedFramework?.framework?.title}</h6>
                        <p className='text-black text-base font-light'>{selectedFramework?.framework?.content}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h6 className='text-[--primary-colour] text-lg font-medium'>{selectedFramework?.knowledge?.title}</h6>
                        {selectedFramework?.knowledge?.content && Array.isArray(selectedFramework.knowledge.content) ? (
                            selectedFramework.knowledge.content.map((item, index) => (
                                <p key={index} className='text-black text-base font-light'>{item}</p>
                            ))
                        ) : (
                            <p className='text-black text-base font-light'>{selectedFramework?.knowledge?.content}</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {selectedFramework?.experience && (
                        <div className="flex flex-col gap-3">
                            <h6 className='text-[--primary-colour] text-lg font-medium'>{selectedFramework?.experience?.title}</h6>
                            {selectedFramework?.experience?.content && Array.isArray(selectedFramework.experience.content) ? (
                                selectedFramework.experience.content.map((item, index) => (
                                    <p key={index} className='text-black text-base font-light'>{item}</p>
                                ))
                            ) : (
                                <p className='text-black text-base font-light'>{selectedFramework?.experience?.content}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
          </div>
        </div>
      </div>
    )}
   </section>
  )
}

export default Frameworks