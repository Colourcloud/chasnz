import React from 'react'
import Image from 'next/image'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from 'next/link'

const Programmes = () => {
  return (
    <>
    {/* <section className="programmes py-20 lg:py-32">
        <div className="site-wrapper border-b-2 border-b-[--primary-colour]">
            <div className="section-text flex flex-col gap-6 w-full lg:w-4/5 pb-12">
                <span className='text-base font-semibold text-[--primary-colour]'>Our Programmes</span>
                <h4 className='text-2xl font-bold lg:text-6xl'>Rethinking injury prevention powered by a human approach.</h4>
                <p className='text-xl font-medium'>Delivering consistency of health and safety standards in the construction industry.</p>
            </div>
        </div>
        <div className="section mt-16">
            <div className="site-wrapper">
                <div className="section-graphics flex flex-col md:flex-row justify-between gap-8">
                    <div><Image src="/home/programmes/image-1.png" alt="" width={700} height={800} /></div>
                    <div><Image src="/home/programmes/image-2.png" alt="" width={800} height={800} /></div>
                </div>
            </div>
        </div>
    </section> */}
    <section className="programme-cards pb-20 lg:pb-32">
        <div className="programme-banner h-[550px] bg-[--primary-colour] flex flex-col">
            <div className="site-wrapper">
                <div className='pt-20 pb-12 border-b-2 border-white flex flex-col gap-6'>
                    <h4 className='text-4xl font-bold lg:text-6xl text-white w-full md:w-4/5'>Discover our programmes and pave the way for a safer working environment</h4>
                    <p className='text-xl font-medium text-white'>Delivering consistency of health and safety standards in the construction industry.</p>
                </div>
            </div>
        </div>
        <div className="site-wrapper">
            <div className="programme-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[-11rem]">
                <div className="programme-card h-[400px] flex flex-col justify-end relative" id="wsnh-card">
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-text z-10 relative flex flex-col gap-4">
                            <h6 className='text-2xl lg:text-3xl text-white font-semibold'>Work Should Not Hurt</h6>
                            <p className='text-white text-sm'>The Work Should Not Hurt programme aims to make sure tradespeople can enjoy long, pain free careers and retire when they want to and not when forced to due to injury.</p>
                            <Link href="/work-should-not-hurt/" className='text-[--primary-colour] font-semibold flex flex-row items-center gap-2'>Learn More <IoIosArrowDroprightCircle /></Link>
                        </div>
                    </div>
                </div>
                <div className="programme-card h-[400px] flex flex-col justify-end relative" id="totika-card">
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-text z-10 relative flex flex-col gap-4">
                            <h6 className='text-2xl lg:text-3xl text-white font-semibold'>Tōtika</h6>
                            <p className='text-white text-sm'>Pre-qualification and assessment of health and safety is an important part of the procurement process. Before Tōtika, there was no common standard for pre-qualification resulting in many proprietary and internal pre-qualification schemes.</p>
                            <Link href="/totika/" className='text-[--primary-colour] font-semibold flex flex-row items-center gap-2'>Learn More <IoIosArrowDroprightCircle /></Link>
                        </div>
                    </div>
                </div>
                <div className="programme-card h-[400px] flex flex-col justify-end relative" id="leadon-card">
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-text z-10 relative flex flex-col gap-4">
                            <h6 className='text-2xl lg:text-3xl text-white font-semibold'>Lead On.</h6>
                            <p className='text-white text-sm'>CHASNZ is working with industry to develop a safety in leadership programme to build the capacity and capabilities our frontline need to lead the safe execution of work.</p>
                            <Link href="/leadon/" className='text-[--primary-colour] font-semibold flex flex-row items-center gap-2'>Learn More <IoIosArrowDroprightCircle /></Link>
                        </div>
                    </div>
                </div>
                <div className="programme-card h-[400px] flex flex-col justify-end relative" id="constructsafe-card">
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-text z-10 relative flex flex-col gap-4">
                            <h6 className='text-2xl lg:text-3xl text-white font-semibold'>ConstructSafe</h6>
                            <p className='text-white text-sm'>ConstructSafe is providing consistent health and safety competency standards for Construction. Because ConstructSafe is developed and owned by industry, it is creating a more competent workforce and in turn driving a more efficient industry.</p>
                            <Link href="/constructsafe/" className='text-[--primary-colour] font-semibold flex flex-row items-center gap-2'>Learn More <IoIosArrowDroprightCircle /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Programmes