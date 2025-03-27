import React from 'react'
import Link from 'next/link'
import AnimatedText from '../ui/AnimateText'

const Contact = () => {
  return (
    <section className="bottom-contact py-16 lg:py-40 bg-black">
        <div className='max-w-5xl mx-auto text-center flex flex-col gap-6'>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <Link href="/health-and-safety-competency-frameworks" className="px-6 text-white text-sm font-medium py-3 rounded-full bg-[--primary-colour] self-center">Health and Safety Competency Frameworks</Link>
            <a href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/click?encryptedPayload=AVxigLJgnaxYQob24lcacaB0iDmzgI%2BWwqayyf%2FShSYPMOBvE3aEDzSDcKWN4kwI1yfI%2BiXV%2B3mLL8nZQ3pSIwTl0FZ4bMNiMQ8hxq1bpGGOpuds3K%2FWDFkoG4x8lXkeyE%2BhhwejIu14qilLcXCHEQq4EQYem5SV08VxH%2BoOrVz9bHlzleUB3tjtdWFoIAa40iMfC2no%2BghuyuppfpHZ2en%2BwalvvGZjokFm1Ab3Bk38BRyeYayq1C3lRDYj0nOF&portalId=40083784" target="_blank" rel="noopener" className="hs-inline-web-interactive-185733104253 px-6 text-white text-sm font-medium py-3 rounded-full bg-[--primary-colour] self-center" data-hubspot-cta-id="185733104253">Download the Mobile Plant Guidance</a>
          </div>
        <p className='text-white text-2xl font-semibold'>We are keen to hear any feedback from you and whether you need any other resources relating to Plant and Equipment. Please contact us on <a href="mailto:info@chasnz.org" className='text-[--primary-colour]'>info@chasnz.org</a></p>
        </div>
        
    </section>
  )
}

export default Contact