// components/AssessmentEmbed.tsx
'use client'

import { useEffect, useRef } from 'react'

interface AssessmentEmbedProps {
  userEmail?: string;
}

export default function AssessmentEmbed({ userEmail = 'trevor@webstruxure.co.nz' }: AssessmentEmbedProps) {
  const iframeRef = useRef<HTMLEmbedElement>(null);

  useEffect(() => {
    try {
      const appOrigin = window.location.origin;
      const childOrigin = "https://dev.chasnz.dotnous.co.nz";
      const iFrameSrc = `${childOrigin}/assessment.aspx?parentOrigin=${appOrigin}&email=${userEmail}`;
      
      if (iframeRef.current) {
        iframeRef.current.src = iFrameSrc;
      }

      const handleMessage = (event: MessageEvent) => {
        if (!iframeRef.current) return;
        
        // Make sure the message is from the expected origin
        if (event.origin !== childOrigin) return;

        // Handle the height value
        const height = event.data;
        if (typeof height === 'number' || typeof height === 'string') {
          iframeRef.current.height = String(height);
        } else {
          console.warn('Received unexpected height format:', height);
        }
      };

      window.addEventListener("message", handleMessage);

      return () => {
        window.removeEventListener("message", handleMessage);
      };
    } catch (exception) {
      console.error(exception);
    }
  }, [userEmail]);

  return (
    <embed
      ref={iframeRef}
      id="iframe_content_wrapper"
      style={{ width: '100%' }}
    />
  );
}