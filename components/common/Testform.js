'use client'

import { useEffect } from 'react';

const Testform = () => {
  useEffect(() => {
    // Create a script element to load the HubSpot forms script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.onload = () => {
      // Once the script is loaded, create the form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '40083784',
          formId: '78b53e0a-b49b-4c2c-a8f6-40025faaebc5',
        });
      }
    };
    // Append the script to the document head
    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="hubspotForm"></div>;
};

export default Testform;
