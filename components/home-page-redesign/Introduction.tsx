import React from 'react'

const Introduction = () => {
  return (
    <section className='py-16 lg:py-32'>
        <div className="site-wrapper">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20">
                <div className="flex flex-col gap-5 w-full lg:w-2/5">
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>We keep tradies safe and Site-Ready in all construction sectors</h2>
                    <p className='text-base font-light'>Tradies are a diverse group of skilled workers essential to the functioning and development of the country&apos;s infrastructure and economy.</p>
                    <p className='text-base font-light'>We help tradies all around the country by providing curated learning material and resources to help you get site-ready and remain safe in your workplace</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-3/5">
                    <div className="flex flex-col gap-5">
                        <div className="w-full h-[250px] bg-gray-400"></div>
                        <div className="w-full h-[250px] bg-gray-400"></div>
                        <div className="w-full h-[250px] bg-gray-400"></div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="w-full h-[250px] bg-gray-400"></div>
                        <div className="w-full h-[250px] bg-gray-400"></div>
                        <div className="w-full h-[250px] bg-gray-400"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Introduction