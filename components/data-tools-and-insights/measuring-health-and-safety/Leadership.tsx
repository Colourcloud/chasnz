import React from 'react'
import Link from 'next/link'
import HubSpotForm from '@/components/common/HubspotForm'

const Leadership = () => {
  return (
    <section className="leadership-tool py-20 lg:py-32">
        <div className="content-wrapper">
            <div className='border-b-2 border-[--primary-colour]'>
                <div className="section-text w-full md:w-4/5 flex flex-col gap-6 py-8">
                    <h2 className='text-4xl lg:text-5xl text-[--primary-colour] font-semibold'>Client Leadership Framework Tool</h2>
                    <p className='text-base lg:text-xl'>This is a free online diagnostic tool. The results will help you to understand your company and learn how to improve your company&apos;s leadership framework</p>
                </div>
            </div>
            
            <div className="section-form mt-12 flex flex-col md:flex-row justify-between gap-16">
                <div className="section-text flex flex-col gap-6 w-full md:w-3/5">
                    <p>CHASNZ&apos;s priority is to improve the lives of workers in the New Zealand construction industry by reducing harm and improving health, safety and well-being.</p>
                    <p>How we direct our efforts most effectively is often about getting good signals from our business as to what is going right and what needs exta attention.</p>
                    <p>CHASNZ has made these simple but effective <Link href="http://cms.chasnz.org/wp-content/uploads/2024/05/ClientLeadershipFrameworkPresentation_CHASNZ.pdf" target="_blank" className='text-[--primary-colour] font-medium'>tools available for free</Link> use across the New Zealand construction sector. They can be used to gain an independent view as to how health and safety is perceived by the workforce and used as tools to pinpoint risk areas and drive improvement.</p>
                </div>
                <div className='w-full md:w-2/5'>
                    <HubSpotForm portalId="40083784" formId="8c59871d-b5ab-4bcd-8e34-3f2893cb1009" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Leadership