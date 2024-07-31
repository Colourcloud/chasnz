import React from 'react'
import Image from 'next/image'

const Introduction = () => {
  return (
    <section className='py-20 lg:py-32'>
        <div className="content-wrapper">
            <div className="introduction-content flex flex-col lg:flex-row gap-16 items-center">
                <div className="text-content w-full lg:w-2/4">
                    <span className='text-base text-[--primary-colour] pb-4 block'>What we stand for</span>
                    <h4 className='text-3xl lg:text-6xl text-black font-semibold'>Better work, better lives and a better future</h4>
                    <div className="text-block flex flex-col gap-5 mt-10">
                        <p>Construction Health and Safety New Zealand, is an industry-led charitable trust working to improve the lives of construction workers by raising the standard of health, safety and wellbeing in construction.</p>
                        <p>The CHASNZ Board comprises senior industry leaders, working together. They are dedicated to addressing the need for sustainable change, identifying areas of risk, providing guidance on best practice health and safety and ensuring health and safety is an intrinsic part of doing better business.</p>
                        <p>ACC supports CHASNZ through a partnership agreement which allows CHASNZ to deliver guidance, standards and resources to the over 80,000 small, medium and large constructors and builders. This drives a reduction in all forms of workplace harm and reduces the number and cost of claims in the long term.</p>
                        <p>We want our construction workers to have productive, healthy and thriving careers that benefit their families, businesses and communities.</p>
                    </div>
                </div>
                <div className="section-image w-full lg:w-2/4">
                    <Image src="/about/intro-image.jpg" alt="" width={800} height={800} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Introduction