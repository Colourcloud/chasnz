import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const Linkedin = () => {
  return (
    <>
    <div className="linkedin-container pb-20 lg:pb-32">
        <div className="content-wrapper">
            <Script src="https://static.elfsight.com/platform/platform.js" />
            <div className="elfsight-app-490b5877-2563-4b67-aedb-abc2e104d9b6" data-elfsight-app-lazy></div>
        </div>
    </div>
    </>
  )
}

export default Linkedin
