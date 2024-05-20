import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full hidden lg:block lg:w-[30%]">
                    
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-6xl'>News &amp; Updates</h4>
                    <p className='text-[--text-colour]'>Here, you'll find timely updates on new safety protocols, industry standards, and best practices aimed at ensuring the wellbeing of New Zealand's workforce. Our commitment is to keep you informed about the most relevant and impactful changes in health and safety regulations, helping you stay ahead in creating safer work environments.</p>
                    <p className='text-[--text-colour]'>Stay tuned for articles, expert insights, and announcements about our upcoming workshops and training sessions. Whether it's innovative safety solutions, new legislative updates, or success stories from across the sector, this section is designed to provide you with valuable information that supports our shared goal of enhancing workplace safety. Thank you for visiting, and we look forward to keeping you updated.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction