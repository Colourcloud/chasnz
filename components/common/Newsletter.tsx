'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HubSpotFormWrapper from './HubspotFormWrapper';
import { IoClose } from "react-icons/io5";

const Newsletter: React.FC = () => {
  const [shouldShowForm, setShouldShowForm] = useState<boolean>(true);

  useEffect(() => {
    const getCookie = (name: string): string | undefined => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const isCookieSet = Boolean(
      getCookie('newsletterCookie') ||
      getCookie('newsletterCloseCookie') ||
      getCookie('chasnz-resource-cookie')
    );

    setShouldShowForm(!isCookieSet);
  }, []);

  const handleFormSubmit = () => {
    console.log('Form has been submitted');
    alert('Form has been submitted');
    document.cookie = "newsletterCookie=true; path=/; max-age=31536000"; // 1 year
    setShouldShowForm(false);
  };

  const handleCloseForm = () => {
    document.cookie = "newsletterCloseCookie=true; path=/; max-age=1209600"; // 2 weeks
    setShouldShowForm(false);
  };

  if (!shouldShowForm) return null;

  return (
    <div className="consent-form-container justify-center items-center">
      <div className="consent-form relative w-full overflow-hidden md:w-3/5 lg:w-[800px] bg-white h-auto md:h-[500px] rounded-lg flex flex-col md:flex-row">
        <div className="form-image w-full md:w-2/5 object-cover h-full">
          <Image src="/common/form-image.jpg" alt="resource image" width={600} height={600} className="h-[160px] md:h-full w-full object-[50%,30%] object-cover" />
        </div>
        <div className="form-content w-full md:w-3/5 p-8 flex flex-col gap-4">
          <h4 className="text-3xl font-semibold">Be the first to know</h4>
          <p className="text-sm font-light">Join our mailing list for construction health and safety updates.</p>
          <button onClick={handleCloseForm} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 focus:outline-none">
            <IoClose />
          </button>
          <div className="resource-consent-form">
            <HubSpotFormWrapper
              portalId="40083784"
              formId="78b53e0a-b49b-4c2c-a8f6-40025faaebc5"
              onFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
