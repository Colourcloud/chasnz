// components/HubSpotFormWrapper.tsx

import React, { useEffect } from 'react';

interface HubSpotFormWrapperProps {
  portalId: string;
  formId: string;
  onFormSubmit: () => void;
}

const HubSpotFormWrapper: React.FC<HubSpotFormWrapperProps> = ({ portalId, formId, onFormSubmit }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          target: `#hubspotForm-${formId}`,
          onFormSubmit,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [portalId, formId, onFormSubmit]);

  return <div id={`hubspotForm-${formId}`} />;
};

export default HubSpotFormWrapper;
