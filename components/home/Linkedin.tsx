import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { FaLinkedin } from "react-icons/fa";

const Linkedin = () => {
  return (
    <>
    <div className="linkedin-container pb-20 lg:pb-32">
        <div className="content-wrapper">
          <div className="text-block py-12">
            <h6 className='flex flex-row items-center text-4xl font-semibold gap-2'><FaLinkedin className='text-[#0077B5]'/> Our latest Linkedin post:</h6>
          </div>
            <Script src="https://static.elfsight.com/platform/platform.js" />
            <div className="elfsight-app-490b5877-2563-4b67-aedb-abc2e104d9b6" data-elfsight-app-lazy></div>
        </div>
    </div>
    </>
  )
}

export default Linkedin
