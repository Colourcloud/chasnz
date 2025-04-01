'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const LowLoaderGuide = () => {
  return (
    <section className='py-16 lg:py-32'>
        <div className="site-wrapper">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 items-center">
                <div className="flex flex-col gap-5 w-full lg:w-2/4">
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Safe use and maintenance of low loader ramps for loading and unloading equipment</h2>
                    <p className='text-base font-semibold'>We have just released a new guide to help owners, operators, maintainers, and designers of low-loader trailers manage ramp operation and maintenance risks.</p>
                    <p className='text-base font-light'>Low-loaders are road-going trailers with low deck heights, designed to allow vehicles and mobile plant - including overweight or over-dimension loads - to be driven on and off via rear ramps. These ramps pose significant hazards, such as uncontrolled drops or crush injuries, which can lead to serious injuries or fatalities &#40;SIFs&#41;.</p>
                    <p className='text-base font-light'>Using Energy-Based safety, this guide identifies ramp hazards exceeding 1,500 joules - most likely to cause serious injuries or fatalities &#40;SIFs&#41; - and suggests controls to eliminate or minimise them. It targets Person Conducting a Business or Undertaking &#40;PCBUs&#41; under the Health and Safety at Work Act 2015 &#40;HSWA&#41;, offering flexibility to adapt Direct Controls &#40;eliminating or mitigating energy&#41; or Alternative Controls &#40;addressing human error&#41; to specific operations.</p>
                    <p className='text-base font-semibold'>The guide includes the following contents:</p>
                    <ul className='list-disc list-inside flex flex-row gap-3 flex-wrap'>
                        <li>Health and Safety at Work</li>
                        <li>Low-Loader Ramps - High Energy Hazards</li>
                        <li>Controlling Ramp - Related High-Energy Hazards</li>
                        <li>Supporting Tools</li>
                        <li>Information Sources and Attachments</li>
                    </ul>
                    <a href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/click?encryptedPayload=AVxigLL4XDoiKAeiuSDi%2FMF1qW2iFN16qXC8hp3AmTN31ej5A0dM4AJyss7b%2F1D75Bmj3e%2BXJJKwxjnKb2QYslFkQ0qWNF7mRg6cG%2FJZ6urAAWj5iksfoCfh72TJbKaVV%2FD7s2Vl5zmoTcrCQ3waSj3ggJJjniKSpwDKIYRBm5tPtNVOZt7unCh5c1kK3q5CFTQuRllxNsCzu9Dl78Oo1i2Z7l5gZjjeG%2BD00CxMZKKAD2g9AwOsLXPTSnBDoCIhToZdhWX3PwfNHw%3D%3D&portalId=40083784" target="_blank" rel="noopener" className="hs-inline-web-interactive-188011515261 px-6 text-white text-sm font-medium py-3 rounded-full bg-[--primary-colour] self-start" data-hubspot-cta-id="188011515261">Download Guide</a>
                </div>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1, ease: "easeOut" }} className="w-full lg:w-2/4" >
                    <Image  src="/mobile-safety/low-loader-guide.jpg" alt="Low-Loader Guide" className="w-full rounded-lg" width={1200} height={1200} priority={true} />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default LowLoaderGuide