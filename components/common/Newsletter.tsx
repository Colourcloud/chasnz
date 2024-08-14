'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";

const Newsletter: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '40083784',
          formId: '78b53e0a-b49b-4c2c-a8f6-40025faaebc5',
          target: '#hubspot-form', // Ensure the form is rendered inside this div
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  const handleCloseForm = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="newsletter-container relative w-full max-w-3xl mx-auto p-4">
        <div className="newsletter-content flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="newsletter-image w-full md:w-2/5">
            <Image
              src="/common/form-image.jpg"
              alt="resource image"
              width={600}
              height={600}
              className="w-full h-[160px] md:h-full object-cover"
            />
          </div>
          <div className="newsletter-form w-full md:w-3/5 p-8 relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <IoClose />
            </button>
            <h4 className="text-3xl font-semibold">Be the first to know</h4>
            <p className="text-sm font-light">Join our mailing list for construction health and safety updates.</p>
            <div id="hubspot-form" className="mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
