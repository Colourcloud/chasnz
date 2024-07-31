import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-[--dark-blue] text-2xl font-semibold'>Data tools &amp; insights content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="/data-tools-and-insights/measuring-health-and-safety/">Measuring health & safety</Link></li>
                        <li><Link href="/data-tools-and-insights/measuring-health-and-safety#leadership">Leadership framework tool</Link></li>
                        <li><Link href="/data-tools-and-insights/measuring-health-and-safety#survey">Confidential safety climate survey</Link></li>
                        <li><Link href="http://cms.chasnz.org/wp-content/uploads/2024/05/ConstructionLeadingHealthSafetyandWell-BeingIndicators_CHASNZ_.pdf" target="_blank">Lead & lag indicators</Link></li>
                        <li><Link href="/analysis-insights/" className='flex flex-row items-center gap-2'>Analysis &amp; insights</Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-5xl text-[--dark-blue]'>Data tools &amp; insights</h4>
                    <p className='text-[--text-colour]'>CHASNZ has created some simple but effective tools available for free use across the New Zealand construction sector. These can be used to gain an independent view as to how health and safety is perceived by the workforce and used as tools to pinpoint risk areas and drive improvement.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction