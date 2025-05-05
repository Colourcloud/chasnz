import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Resources = () => {
  return (
    <div className="py-16 lg:py-32">
        <div className="site-wrapper">
            <div className="flex flex-col gap-6 text-center">
                <h6 className='text-2xl md:text-4xl lg:text-5xl font-semibold max-w-5xl mx-auto'>Access popular resources, tools, and events to help make your worksite safer.</h6>
                <p className='text-base md:text-lg max-w-4xl mx-auto font-light'>Access popular resources, tools, and events to help make your worksite safer. From practical guides to training opportunities, everything here is designed to support you in protecting your crew and preventing harm.</p>
            </div>
        </div>
        <div className="site-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 px-4 md:px-6">
            <Link href="/work-should-not-hurt">
            <div className="relative w-full flex-shrink-0 rounded-sm overflow-hidden">
                <Image src="/programmes/wsnh/trade-images/building.jpg" alt="Toolbox Talks" className='w-full h-[500px] object-cover' width={500} height={400} />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white font-medium text-xl md:text-2xl mb-2">Trade Resources</h4>
                    <p className="text-white text-sm">Discover essential insights into health and safety for the construction sector.</p>
                </div>
                
            </div>
            </Link>

            <Link href="/events">
            <div className="relative w-full flex-shrink-0 rounded-sm overflow-hidden">
                <Image src="/home/events-image.jpg" alt="Risk Assessment Tools" className='w-full h-[500px] object-cover' width={500} height={400} />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white font-medium text-xl md:text-2xl mb-2">Events &amp; Webinars</h4>
                    <p className="text-white text-sm">Join us for exclusive webinars and events designed to keep you at the forefront of industry standards and best practices.</p>
                </div>
            </div>
            </Link>

            <Link href="/leadon">
            <div className="relative w-full flex-shrink-0 rounded-sm overflow-hidden">
                <Image src="/programmes/leadon/introduction-image.jpg" alt="Training Courses" className='w-full h-[500px] object-cover' width={500} height={400} />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white font-medium text-xl md:text-2xl mb-2">Leadership Framework</h4>
                    <p className="text-white text-sm">Enhance the skills of frontline leaders to improve safety across the construction sector.</p>
                </div>
            </div>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Resources