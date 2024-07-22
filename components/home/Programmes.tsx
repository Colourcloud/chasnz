import React from 'react'
import Image from 'next/image'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from 'next/link'

const Programmes = () => {
  return (
    <>
    <section className="programme-cards pb-20 lg:pb-32">
        <div className="programme-banner flex flex-col">
            <div className="site-wrapper">
                <div className='pb-12 flex flex-col gap-6'>
                    <h4 className='text-3xl md:text-4xl font-semibold lg:text-5xl text-[--dark-blue] w-full md:w-full !leading-tight'>Discover our programmes and download a range of resources &#40;at no cost&#41; for your businesses health and safety requirements.</h4>
                </div>
            </div>
            <div className="site-wrapper w-full">
            <div className="programme-card-grid grid grid-cols-[1fr,1fr,1fr,1fr] gap-5 overflow-x-scroll md:grid-cols-2 lg:grid-cols-4 md:gap-8">

                <div className="programme-card h-[400px] min-w-[300px] flex flex-col justify-end relative" id="constructsafe-card">
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-text z-10 relative flex flex-col gap-4">
                            <Image src='/programmes/logos/constructsafe.svg' alt='constructsafe logo' width={225} height={225} />
                            <p className='text-white text-sm'>ConstructSafe is providing consistent health and safety competency standards for Construction. Because ConstructSafe is developed and owned by industry, it is creating a more competent workforce and in turn driving a more efficient industry.</p>
                            <Link href="/constructsafe/" className='text-white font-semibold flex flex-row items-center gap-1'>Learn More <IoIosArrowDroprightCircle className='text-[--primary-colour] text-lg' /></Link>
                        </div>
                    </div>
                </div>

                <div className="programme-card h-[400px] min-w-[300px] flex flex-col justify-end relative" id="leadon-card">
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-text z-10 relative flex flex-col gap-4">
                            <Image src='/programmes/logos/leadon.svg' alt='leadon logo' width={225} height={225} />
                            <p className='text-white text-sm'>CHASNZ is working with industry to develop a safety in leadership programme to build the capacity and capabilities our frontline need to lead the safe execution of work.</p>
                            <Link href="/leadon/" className='text-white font-semibold flex flex-row items-center gap-1'>Learn More <IoIosArrowDroprightCircle className='text-[--primary-colour] text-lg' /></Link>
                        </div>
                    </div>
                </div>

                <div className="programme-card h-[400px] min-w-[300px] flex flex-col justify-end relative" id="totika-card">
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-text z-10 relative flex flex-col gap-4">
                            <Image src='/programmes/logos/totika.svg' alt='Totika logo' width={225} height={225} />
                            <p className='text-white text-sm'>Pre-qualification and assessment of health and safety is an important part of the procurement process. Before Tōtika, there was no common standard for pre-qualification resulting in many proprietary and internal pre-qualification schemes.</p>
                            <Link href="/totika/" className='text-white font-semibold flex flex-row items-center gap-1'>Learn More <IoIosArrowDroprightCircle className='text-[--primary-colour] text-lg' /></Link>
                        </div>
                    </div>
                </div>

                <div className="programme-card h-[400px] min-w-[300px] flex flex-col justify-end relative" id="wsnh-card">
                    <div className="card-overlay"></div>
                    <div className="card-content">
                        <div className="card-text z-10 relative flex flex-col gap-4">
                            <Image src='/programmes/logos/wsnh.svg' alt='Work should not hurt logo' width={225} height={225} />
                            <p className='text-white text-sm'>The Work Should Not Hurt programme aims to make sure tradespeople can enjoy long, pain free careers and retire when they want to and not when forced to due to injury.</p>
                            <Link href="/work-should-not-hurt/" className='text-white font-semibold flex flex-row items-center gap-1'>Learn More <IoIosArrowDroprightCircle className='text-[--primary-colour] text-lg' /></Link>
                        </div>
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