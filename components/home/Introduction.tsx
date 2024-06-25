import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Introduction = () => {
  return (
    <section className="introduction py-20 lg:py-32">
        <div className="site-wrapper">
            <div className="section-text w-full md:w-3/4 xl:w-3/4 text-center mx-auto flex flex-col gap-4">
                <h4 className='text-4xl font-bold lg:text-5xl text-[--dark-blue]'>How we can help you</h4>
                <p className='text-2xl font-light text-[--dark-blue]'>We provide evidence robust guidance and tools to help you manage Health, Safety and Well-being harm in your business &#45; whatever size that is.</p>
            </div>

            <div className="section-toggles-container mt-20 flex flex-row gap-8 justify-center">

                <div className="section-toggle flex flex-col gap-3 items-center">
                  <div className="toggle-icon min-h-20 flex items-center justify-center">
                  <Image src="/home/service-buyers.svg" alt="" width={100} height={100} className="w-full" />
                  </div>
                  <span className='text-sm text-gray-400 text-center w-full md:w-3/4'>
                    Construction Service Buyers
                  </span>
                </div>

                <div className="section-toggle flex flex-col gap-3 items-center">
                  <div className="toggle-icon min-h-20 flex items-center justify-center">
                    <Image src="/home/safety-icon.svg" alt="" width={100} height={100} className="w-full" />
                  </div>
                  <span className='text-sm text-gray-400 text-center w-full md:w-3/4'>
                      People who work in safety
                  </span>
                </div>

                <div className="section-toggle flex flex-col gap-3 items-center">
                  <div className="toggle-icon min-h-20 flex items-center justify-center">
                  <Image src="/home/trade-icon.svg" alt="" width={100} height={100} className="w-full" />
                  </div>
                  <span className='text-sm text-gray-400 text-center w-full md:w-3/4'>
                    Trades People
                  </span>
                </div>

                <div className="section-toggle flex flex-col gap-3 items-center">
                <div className="toggle-icon min-h-20 flex items-center justify-center">
                  <Image src="/home/car-icon.svg" alt="" width={100} height={100} className="w-full" />
                  </div>
                  <span className='text-sm text-gray-400 text-center w-full md:w-3/4'>
                    Small to medium business owners
                  </span>
                </div>

            </div>
        </div>

        <div className="sector-information bg-[--dark-blue] mt-12 py-20 lg:py-0">
              <div className="site-wrapper h-full">
                <div className="information-container h-full flex justify-start flex-col lg:flex-row gap-10 lg:gap-20">

                  <div className="information-text text-white w-full lg:w-2/5 flex flex-col gap-10 self-center">
                    <div className="text-block">
                      <h4 className='text-3xl font-bold md:text-5xl text-[--primary-colour]'>How do we help trades people</h4>
                    </div>
                    <div className="text-block flex flex-col gap-6">
                      <p>Tradies are a diverse group of skilled workers essential to the functioning and development of the country&apos;s infrastructure and economy.</p>
                      <p>We help tradies all around the country by providing curated learning material and resources to help you get site-ready and remain safe in your workplace</p>
                    </div>
                    <div className="text-block">
                      <h6 className='text-lg font-semibold'>Related Links:</h6>
                      <ul className='flex flex-row gap-4 mt-3 flex-wrap'>
                        <li><Link href="/general-resources/" className='text-[--primary-colour] underline'>General Resources</Link></li>
                        <li><Link href="/general-resources/" className='text-[--primary-colour] underline'>Work Should Not Hurt</Link></li>
                        <li><Link href="/general-resources/" className='text-[--primary-colour] underline'>Events</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="information-images flex flex-col w-full lg:w-3/5 lg:mr-[-20rem]">
                    <div className="top-images flex flex-row lg:mr-[-6rem]">
                      <Image src="/home/trade-image-1.jpg" alt="" width={600} height={600} className='w-full' />
                      <Image src="/home/trade-image-2.jpg" alt="" width={600} height={600} className='w-full' />
                    </div>
                    <div className="below-image lg:mr-[-6rem]">
                      <Image src="/home/trade-image-3.jpg" alt="" width={1200} height={600} className='w-full' />
                    </div>
                  </div>

                </div>
              </div>
        </div>

    </section>
  )
}

export default Introduction