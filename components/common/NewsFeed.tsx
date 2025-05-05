'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiBellAlert } from "react-icons/hi2";

const NewsFeed = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating button on bottom right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 bg-primary text-white px-4 py-3 rounded-md shadow-lg hover:bg-primary/90 transition-all z-30 flex items-center gap-2 cursor-pointer"
      >
        <HiBellAlert className='text-white' /> News & Updates
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-[998] transition-opacity duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding modal */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[600px] max-w-full bg-white shadow-lg z-[999] overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 relative">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col gap-1 py-3 border-b">
                <h2 className="text-2xl font-semibold">News & Updates</h2>
                <p className='text-sm font-light'>Below you can find recent News, events and updates from the CHASNZ team</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 absolute top-3 right-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            {/* You can add your news and updates content here */}
            <div className="border-b pb-4 news-feed-item">
              <span className="text-xs text-gray-500 mb-2 block">April 1, 2024</span>
              <h3 className="font-semibold mb-2 text-lg flex flex-col gap-1"><span className='text-xs py-1 px-2 bg-[--primary-colour] self-start text-white'>New Tool</span> WSNH Foundation Assessment Toolkit</h3>
              <p className="text-gray-700 text-sm font-light">Assess your organisation's ability to recognise and address musculoskeletal injuries in your workplace and you'll get your very own detailed report.</p>
              <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden mt-4">
                
              </div>
            </div>
            
            <div className="border-b pb-4 news-feed-item">
              <span className="text-xs text-gray-500 mb-2 block">April 1, 2024</span>
              <h3 className="font-semibold mb-2 text-lg flex flex-col gap-1"><span className='text-xs py-1 px-2 bg-[--primary-colour] self-start text-white'>New Resource</span> Health and Safety Competency Framework Documents</h3>
              <p className="text-gray-700 text-sm font-light">We have developed a range of Health and Safety Competency framework documents for the Trades Sector, allowing those who design and contribute to construction health and safety training content to align with ConstructSafe Trades Health and Safety Competency assessment for specific trades.</p>
              <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden mt-4">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsFeed