'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HubSpotForm from './HubspotForm';

const ConsentForm: React.FC = () => {
  const [isCookieSet, setIsCookieSet] = useState<boolean>(false);

  useEffect(() => {
    const getCookie = (name: string): string | undefined => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
      }
    };

    const hubspotCookie = getCookie('hubspotutk');
    if (hubspotCookie) {
      setIsCookieSet(true);
    }
  }, []);

  if (isCookieSet) {
    return null; // or you can return some other component or message
  }

  return (
    <div className="consent-form-container justify-center items-center">
      <div className="consent-form w-full md:w-3/5 lg:w-[800px] bg-white h-[500px] rounded-lg flex flex-col md:flex-row">
        <div className="form-image w-full md:w-2/5 object-cover h-full">
          <Image src="/navigation/programmes/resource-image.jpg" alt="resource image" width={600} height={600} className="h-full w-full object-cover" />
        </div>
        <div className="form-content w-full md:w-3/5 p-8 flex flex-col gap-4">
          <h4 className="text-2xl font-semibold">Please fill out the following form to gain access to CHASNZ resources</h4>
          <p className="text-sm font-light">You will only need to fill out this form one time or until you clear your browser's cookie data</p>
          <div className="resource-consent-form">
            <HubSpotForm portalId="40083784" formId="101a34c4-946e-4e05-97d3-38e5bc390465" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsentForm;
