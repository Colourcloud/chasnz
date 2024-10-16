import React from 'react'
import Image from 'next/image'

const Introduction = () => {
  return (
    <>
    <div className="introduction-section bg-white py-16 lg:py-32 border-b">
        <div className="site-wrapper">
            <div className="flex flex-col gap-6 w-full md:w-4/5">
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold !leading-tight'>Are you curious about Energy Based Safety? If you can&apos;t identify the hazard, then you don&apos;t know how exposed you are or how to control it.</h2>
                <p className='text-base md:text-lg text-[--text-colour]'>We launched our Energy Based Hazard Recognition program earlier this year and there has been huge interest in the resources we created as well as invitations to present the Energy program tool to a range of companies across the construction health and safety sector.</p>
                <p className='text-base md:text-lg text-[--text-colour]'>Chris Alderson &#40;CEO, CHASNZ&#41; and Jon Harper-Slade &#40;GM Health and Safety Innovation, CHASNZ&#41; are leading 3 x in-person FREE workshops in Auckland, Wellington and Christchurch in November.</p>
            </div>
        </div>
    </div>
    <div className="py-16 lg:py-32">
        <div className="site-wrapper">
            <div className="flex flex-col md:flex-row justify-between gap-16 items-center">
                <div className="flex flex-col gap-6 w-full md:w-2/4">
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold !leading-tight'>Learn about Energy Based Safety to help improve safety performance</h3>
                    <p className='text-base md:text-lg'>Ten different categories of energy appear on the energy wheel. The hazards people work in the presence of fit within these energy categories.  The wheel helps people find the hazards, which then allows us to focus on the 'high' energy hazards, ensuring as far as we can that direct controls are present before people start work.</p>
                    <p className='text-lg font-semibold md:text-xl text-[--text-colour]'>A few topics we wil be covering:</p>
                    <ul className='list-disc list-inside flex flex-col gap-2 text-[--text-colour]'>
                        <li>Examples of what we see and what we miss</li>
                        <li>Energy Wheel Tool - testing and scientific validation</li>
                        <li>Low energy and high energy hazards</li>
                        <li>Why some hazards are easy to identify and while others are often overlooked</li>
                        <li>High-Energy control assessment &#40;HECA&#41;</li>
                        <li>Measuring and monitoring</li>
                        <li>Direct and alternative controls</li>
                    </ul>
                </div>
                <div className='w-full md:w-2/4'>
                    <Image src="/events/energy-safety/energy-wheel.gif" alt="animated energy wheel image" width={600} height={600} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Introduction