'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

export {};
declare global {
  interface Window {
    hbspt: any; // Adjust according to the expected structure
  }
}


const Subscribe: React.FC = () => {
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
          formId: "cc8b593f-0a60-4e03-907f-1878964967f6",
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
    <>
      <section className="subscribe">
        <div className="content-wrapper">
            <div className="subscribe-wrapper py-60 flex flex-col justify-center items-center gap-5">
                <h4 className='text-white font-bold text-3xl lg:text-5xl'>Let's work better.</h4>
                <Link href="#" className='text-white text-xl font-medium flex flex-row items-center gap-2'>
                  Get in contact <span><IoIosArrowDroprightCircle /></span>
                </Link>
            </div>
        </div>
      </section>
      <section className="subscript-form py-20 bg-[--primary-colour]">
        <div className="content-wrapper">
          <div className='flex flex-col items-center justify-center'>
            <h4 className='text-white text-3xl lg:text-4xl font-semibold text-center'>Never miss an update</h4>
            <div className="hubspot-form" ref={hubspotFormRef} id="hubspotForm">
              {/* The HubSpot form will be injected here */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
