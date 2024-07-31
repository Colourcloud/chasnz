import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const Reach = () => {
  return (
    <>
    <section className="national-reach py-20 lg:py-32">
        <div className="content-wrapper h-full">
            <div className="section-content flex flex-col h-full justify-end relative z-10">
                <div className="section-text text-white w-full md:w-3/5 flex flex-col gap-4 mb-8">
                    <h4 className='text-5xl font-semibold lg:text-6xl'>A national reach</h4>
                </div>
            </div>
        </div>
    </section>
    <div className="text-block py-20 bg-[--dark-blue]">
          <div className="content-wrapper">
            <p className='text-white text-xl lg:text-2xl font-base'>The construction industry has 250,000 workers who make up the sector. At CHASNZ we maintain a national reach, from high rise construction to laying the foundations of the milking shed. This is how we are achieving our goal to raise the standard of health and safety culture and performance across the construction industry in New Zealand.</p>
          </div>
        </div>
    </>
    
  )
}

export default Reach