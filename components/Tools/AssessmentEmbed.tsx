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
        if (iframeRef.current) {
          iframeRef.current.height = event.data;
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