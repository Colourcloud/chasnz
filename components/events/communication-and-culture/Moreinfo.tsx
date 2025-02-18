import React from 'react'
import Image from 'next/image'

const Moreinfo = () => {
  return (
    <section className="py-12 lg:py-32 border-t">
        <div className="site-wrapper">
            <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                <p className='text-left md:text-center text-base md:text-lg font-light text-black'>Ever found yourself saying, “I&apos;ve told them a thousand times how to do that job, and they&apos;re still getting it wrong!”? Or at the end of a site meeting, you ask “Does anyone have any questions?” and there is tumbleweed silence… If so, you're not alone—but what if the problem isn&apos;t what you&apos;re saying, just how you&apos;re saying it?Ready to turn passive listening into active engagement?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <Image src="/events/communication-and-culture/more-info-1.jpg" alt='Construction worker in office' className='rounded-lg overflow-hidden' width={800} height={800} />
                <Image src="/events/communication-and-culture/more-info-2.jpg" alt='Construction worker in office' className='rounded-lg overflow-hidden' width={800} height={800} />
                <Image src="/events/communication-and-culture/more-info-3.jpg" alt='Construction worker in office' className='rounded-lg overflow-hidden' width={800} height={800} />  
            </div>
        </div>
    </section>
  )
}

export default Moreinfo