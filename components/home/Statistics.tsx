import React from 'react'

const Statistics = () => {
  return (
    <section className="statistics bg-[--dark-blue] py-20 lg:py-32">
        <div className="site-wrapper">
                <div className='pb-12 border-b-2 border-[--primary-colour] flex flex-col gap-6'>
                    <h4 className='text-4xl font-semibold lg:text-5xl text-white w-full md:w-4/5'>2022 trends in health and safety and why we are rethinking injury prevention.</h4>
                </div>

                <div className="stat-value-container grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
                  <div className="stat-value flex flex-col gap-4 text-white">
                    <h4 className='text-[--primary-colour] text-5xl font-bold pb-4 lg:text-7xl'>1.1M+</h4>
                    <p className='text-base md:text-xl'>Over 1.1 million work days were lost to injuries.</p>
                  </div>

                  <div className="stat-value flex flex-col gap-4 text-white">
                    <h4 className='text-[--primary-colour] text-5xl font-bold pb-4 lg:text-7xl'>565</h4>
                    <p className='text-base md:text-xl'>Serious harm injuries.</p>
                  </div>

                  <div className="stat-value flex flex-col gap-4 text-white">
                    <h4 className='text-[--primary-colour] text-5xl font-bold pb-4 lg:text-7xl'>11</h4>
                    <p className='text-base md:text-xl'>Sadly, there were 11 fatalities. Work related fatalities are deaths that occur as a result of injury from work.</p>
                  </div>
                </div>
          </div>
    </section>
  )
}

export default Statistics