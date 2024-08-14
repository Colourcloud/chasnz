'use client'

import { useEffect } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({ portalId, formId, region = 'na1' }) => {
  const uniqueId = `hubspotForm-${portalId}-${formId}`;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#${uniqueId}`
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script when the component is unmounted
      document.body.removeChild(script);
    };
  }, [portalId, formId, region, uniqueId]);

  return <div id={uniqueId}></div>;
};

export default HubSpotForm;
