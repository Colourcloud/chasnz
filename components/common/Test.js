'use client'

import { useEffect, useRef } from 'react';

const Test = () => {
  const formCreated = useRef(false);

  useEffect(() => {
    if (!formCreated.current) {
      const script = document.createElement('script');
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.src = "//js.hsforms.net/forms/embed/v2.js";

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "40083784",
            formId: "78b53e0a-b49b-4c2c-a8f6-40025faaebc5"
          });
          formCreated.current = true;
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      {/* The form will be embedded here */}
    </div>
  );
};

export default Test;
