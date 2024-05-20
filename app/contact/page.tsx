import React from 'react'
import Header from '@/components/contact/Header'
import { Metadata } from 'next'
import HubSpotForm from '@/components/common/HubspotForm'

export const metadata: Metadata = {
    title: 'CHASNZ – Get in touch',
  }


const page = () => {
  return (
    <>
   <Header />
   <section className="contact-form py-20 lg:py-32">
        <div className="content-wrapper">
            <div className='content-cotainer flex flex-col md:flex-row gap-16'>
                <div>
                    <h4 className='text-2xl md:text-4xl font-semibold text-[--primary-colour] pb-6'>Please fill out the form below to get in touch with us:</h4>
                    <HubSpotForm portalId="40083784" formId="f0215bd9-ea56-4b7e-a45c-22a93935798a" />
                </div>
                <div className="more-info flex flex-col gap-4 p-6 bg-[--primary-colour] text-white self-start sticky top-4">
                    <h6 className='font-bold'>Want to know more?</h6>
                    <p>We know it&apos;s easier to have a chat live, so give us a call on</p>
                    <p className='font-bold'>0800 CHASNZ</p>
                    <p className='font-bold'>0800 242 769</p>
                </div>
            </div>
        </div>
   </section>
    </>
  )
}

export default page