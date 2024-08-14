'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HubSpotFormWrapper from './HubspotFormWrapper';

const ConsentForm: React.FC = () => {
  const [isCookieSet, setIsCookieSet] = useState<boolean>(false);
  const [initialCheckDone, setInitialCheckDone] = useState<boolean>(false);

  useEffect(() => {
    const getCookie = (name: string): string | undefined => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
      }
    };

    // const hubspotCookie = getCookie('hubspotutk');
    const chasnzCookie = getCookie('chasnz-resource-cookie');
    if ( chasnzCookie) {
      setIsCookieSet(true);
    }
    setInitialCheckDone(true);
  }, []);

  const handleFormSubmit = () => {
    console.log('Form has been submitted');
    alert('Form has been submitted');
    document.cookie = "chasnz-resource-cookie=true; path=/; max-age=31536000"; // Set cookie for 1 year
    setIsCookieSet(true);
    setTimeout(() => {
      window.location.reload();
    }, 500); // Add a small delay to ensure form submission completes
  };

  if (!initialCheckDone) {
    return null; // Render nothing until initial cookie check is done
  }

  if (isCookieSet) {
    return null; // Render nothing if cookies are set
  }

  return (
    <div className="consent-form-container justify-center items-center">
      <div className="consent-form w-full overflow-hidden md:w-3/5 lg:w-[800px] bg-white h-auto md:h-[500px] rounded-lg flex flex-col md:flex-row">
        <div className="form-image w-full md:w-2/5 object-cover h-full">
          <Image src="/common/form-image.jpg" alt="resource image" width={600} height={600} className="h-[160px] md:h-full w-full object-[50%,30%] object-cover" />
        </div>
        <div className="form-content w-full md:w-3/5 p-8 flex flex-col gap-4">
          <h4 className="text-2xl font-semibold">Please fill out the following form to gain access to CHASNZ resources</h4>
          <p className="text-sm font-light">You will only need to fill out this form one time or until you clear your browser cookie data</p>
          <div className="resource-consent-form">
            <HubSpotFormWrapper
              portalId="40083784"
              formId="101a34c4-946e-4e05-97d3-38e5bc390465"
              onFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentForm;
