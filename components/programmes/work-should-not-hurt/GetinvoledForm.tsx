'use client'

import React, { useEffect, useRef } from 'react';
export {};
declare global {
  interface Window {
    hbspt: any; // Adjust according to the expected structure
  }
}

const GetinvoledForm: React.FC = () => {
    const hubspotFormRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.charset = "utf-8";
        script.type = "text/javascript";
        script.async = true;
        script.onload = () => {
          // Ensure window.hbspt is available
          if (window.hbspt && hubspotFormRef.current) {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "40083784",
              formId: "4c1f16bc-6eaa-424b-bda8-97da3068ddf9",
              target: `#${hubspotFormRef.current.id}`
            });
          }
        };
    
        // Append the script to the 'hubspot-form' div if the ref is available
        hubspotFormRef.current?.appendChild(script);
    
        // Cleanup function to remove the script when the component unmounts
        return () => {
          if (hubspotFormRef.current) {
            hubspotFormRef.current.removeChild(script);
          }
        };
      }, []);

  return (
    <div className="hubspot-form w-full mt-10" ref={hubspotFormRef} id="hubspotForm">
              {/* The HubSpot form will be injected here */}
    </div>
  )
}

export default GetinvoledForm