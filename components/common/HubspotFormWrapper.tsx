// components/HubSpotFormWrapper.tsx

import React, { useEffect } from 'react';

interface HubSpotFormWrapperProps {
  portalId: string;
  formId: string;
  onFormSubmit: () => void;
}

const HubSpotFormWrapper: React.FC<HubSpotFormWrapperProps> = ({ portalId, formId, onFormSubmit }) => {
  useEffect(() => {
    const checkForHubSpot = setInterval(() => {
      if (window.hbspt && window.hbspt.forms) {
        window.hbspt.forms.create({
          portalId,
          formId,
          target: `#hubspotForm-${formId}`,
          onFormSubmit,
        });
        clearInterval(checkForHubSpot);
      }
    }, 100);

    return () => clearInterval(checkForHubSpot);
  }, [portalId, formId, onFormSubmit]);

  return <div id={`hubspotForm-${formId}`} />;
};

export default HubSpotFormWrapper;
