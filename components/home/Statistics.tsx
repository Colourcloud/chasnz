'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type Year = 2023 | 2024;

const Statistics = () => {
  const [year, setYear] = useState<Year>(2024);
  const { ref, inView } = useInView({ triggerOnce: true });

  const statsData: Record<Year, { fatalities: number; injuries?: number; workDaysLost: number; }> = {
    2024: {
      fatalities: 9,
      workDaysLost: 665289,
    },
    2023: {
      fatalities: 8,
      injuries: 540,
      workDaysLost: 650000,
    },
  };

  const stats = statsData[year];

  return (
    <section className="statistics bg-[--dark-blue] py-20 lg:py-32">
      <div className="site-wrapper">
        <div className='pb-12 border-b-2 border-[--primary-colour] flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-0'>
          <h4 className='text-4xl font-semibold lg:text-5xl text-white w-full md:w-[75%]'>Key statistics in health and safety</h4>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => setYear(2023)}
            className={`px-6 py-4 text-white font-semibold w-2/4 md:w-1/6 ${year === 2023 ? 'bg-[--primary-colour]' : 'bg-gray-500'}`}
          >
            2023
          </button>
          <button
            onClick={() => setYear(2024)}
            className={`px-6 py-4 text-white font-semibold w-2/4 md:w-1/6 ${year === 2024 ? 'bg-[--primary-colour]' : 'bg-gray-500'}`}
          >
            2024
          </button>
        </div>

        <div ref={ref} className="stat-value-container grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
          <div className="stat-value flex flex-col gap-4 text-white">
            <h4 className='text-[--primary-colour] text-5xl font-bold pb-4 lg:text-7xl'>
              {inView && <CountUp end={stats.fatalities} duration={2} />}
            </h4>
            <p className='text-base md:text-xl'>Workplace fatalities &#40;excluding on road incidents&#41;</p>
          </div>

          {stats.injuries !== undefined && (
            <div className="stat-value flex flex-col gap-4 text-white">
              <h4 className='text-[--primary-colour] text-5xl font-bold pb-4 lg:text-7xl'>
                {inView && <CountUp end={stats.injuries} duration={2} />}
              </h4>
              <p className='text-base md:text-xl'>Serious harm injuries</p>
              <p className='text-base md:text-xl'>As per Worksafe published serious harm statistics</p>
            </div>
          )}

          <div className="stat-value flex flex-col gap-4 text-white">
            <h4 className='text-[--primary-colour] text-5xl font-bold pb-4 lg:text-7xl'>
              {inView && <CountUp end={stats.workDaysLost} duration={2} />}
            </h4>
            <p className='text-base md:text-xl'>Work days lost</p>
          </div>
        </div>

        <div className='mt-14'>
          <Link href="/analysis-insights" className='text-[--primary-colour] text-xl underline flex flex-row items-center gap-1'>
            Click here for the latest Analysis &amp; Insights in Construction Health and Safety <IoArrowForward />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
