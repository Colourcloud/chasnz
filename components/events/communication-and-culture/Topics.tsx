import React from 'react'
import Image from 'next/image'

const Topics = () => {
  return (
    <section className="py-12 lg:py-32 border-t">
        <div className="max-w-7xl mx-auto">
            <h6 className='text-2xl md:text-3xl lg:text-4xl font-semibold max-w-4xl mx-auto text-center'>Below is a list of <span className='text-[--primary-colour]'>key topics</span> we will be discussing throughout the event</h6>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-center py-12 lg:py-32">
                <div className='flex flex-col gap-6  w-full lg:w-2/5'>
                    <p className='text-base md:text-lg font-light'>Recent research on the prevalence, nature and impacts of banter in the construction industry will be presented.</p>
                    <p className='text-base md:text-lg font-light'>What constitutes a safe and healthy workplace culture and how such a culture can be fostered in construction project environments.</p>
                    <p className='text-base md:text-lg font-light'>The concept of sense of place will be introduced, with a focus on how to create work environments in which people can flourish.</p>
                </div>
                <div className='w-full lg:w-1/2 relative overflow-hidden rounded-lg'>
                    <Image src="/events/communication-and-culture/topics-1.jpg" alt="Acc logo" className='rounded-lg overflow-hidden' width={1000} height={1000} />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-center py-12 lg:py-32 border-t">
                <div className='w-full lg:w-1/2 relative overflow-hidden rounded-lg'>
                    <Image src="/events/communication-and-culture/topics-2.jpg" alt="Acc logo" className='rounded-lg overflow-hidden' width={1000} height={1000} />
                </div>
                <div className='flex flex-col gap-6  w-full lg:w-2/5'>
                    <p className='text-base md:text-lg font-light'>"Making Safety Stick: The Power of Humour in Professional Engagement,"</p>
                    <p className='text-base md:text-lg font-light'>Combining humour with crucial safety messages to create lasting impact.</p>
                    <p className='text-base md:text-lg font-light'>What can we learn from stand-up comedy to improve safety and culture.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-center pt-12 lg:pt-32 border-t">
                <div className='flex flex-col gap-6  w-full lg:w-2/5'>
                    <p className='text-base md:text-lg font-light'>How to make your tailgate meetings more engaging and effective. You'll walk away with practical tips and proven techniques to capture attention, receive better questions, and empower your team to take ownership of safety and performance.</p>
                    <p className='text-base md:text-lg font-light'>From delivering toolbox talks that actually stick, to boosting your confidence as a leader, this session will give you tools you can apply immediately to make a real impact in your workplace.</p>
                </div>
                <div className='w-full lg:w-1/2 relative overflow-hidden rounded-lg'>
                    <Image src="/events/communication-and-culture/topics-3.jpg" alt="Acc logo" className='rounded-lg overflow-hidden' width={1000} height={1000} />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Topics