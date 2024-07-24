import React from 'react'
import Link from 'next/link'
import { IoArrowForward } from "react-icons/io5";

const Statistics = () => {
  return (
    <section className="statistics bg-[--dark-blue] py-20 lg:py-32">
        <div className="site-wrapper">
                <div className='pb-12 border-b-2 border-[--primary-colour] flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-0'>
                    <h4 className='text-4xl font-semibold lg:text-5xl text-white w-full md:w-[75%]'>2023 and 2024 key statistics in health and safety.</h4>
                    <div>
                      <Link href="/analysis-insights" className='text-[--primary-colour] text-2xl underline flex flex-row items-center gap-1'>Latest Analysis &amp; Insights <IoArrowForward /></Link>
                    </div>
                </div>

                <div className="stat-value-container grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
                  <div className="stat-value flex flex-col gap-4 text-white">
                    <h4 className='text-[--primary-colour] text-5xl font-bold pb-4 lg:text-7xl'>9</h4>
                    <p className='text-base md:text-xl'>Workplace fatalities &#40;excluding on road incidents&#41;</p>
                  </div>

                  <div className="stat-value flex flex-col gap-4 text-white">
                    <h4 className='text-[--primary-colour] text-5xl font-bold pb-4 lg:text-7xl'>562</h4>
                    <p className='text-base md:text-xl'>Serious harm injuries.</p>
                  </div>

                  <div className="stat-value flex flex-col gap-4 text-white">
                    <h4 className='text-[--primary-colour] text-5xl font-bold pb-4 lg:text-7xl'>665,289</h4>
                    <p className='text-base md:text-xl'>Work days lost</p>
                  </div>
                </div>
          </div>
    </section>
  )
}

export default Statistics