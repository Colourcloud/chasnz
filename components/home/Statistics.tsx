'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';



const Statistics = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  type Year = '2023' | '2024';
  const [selectedYear, setSelectedYear] = useState<Year>('2023');

  const statistics: Record<Year, { injuries: number; daysLost: number }> = {
    '2023': {
      injuries: 540,
      daysLost: 665289
    },
    '2024': {
      injuries: 512,
      daysLost: 610000
    }
  };

  return (
    <div className="pb-16 lg:pb-32 statistics-section bg-gray-950">
        <div className="site-wrapper">
            <div className="flex flex-col gap-6 max-w-5xl py-16 lg:py-24">
                <h6 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>When Safety Fails, <span className='text-[--primary-colour]'>Lives Are Affected</span></h6>
                <p className='text-base md:text-lg font-light text-white'>Every incident on site leaves a mark, on workers, on whānau, on communities. Behind every statistic is a person who didn&apos;t make it home, a team left reeling, a family forever changed. At CHASNZ, we&apos;re committed to reshaping the future of safety. Because one life lost is one too many, and every injury is a <span className='font-semibold text-[--primary-colour]'>call to do better.</span></p>
                <div className="flex flex-row gap-4">
                    <button 
                        onClick={() => setSelectedYear('2023')}
                        className={`${selectedYear === '2023' ? 'bg-[--primary-colour] text-white' : 'bg-white text-black'} text-base font-medium px-12 py-3`}
                    >
                        2023
                    </button>
                    <button 
                        onClick={() => setSelectedYear('2024')}
                        className={`${selectedYear === '2024' ? 'bg-[--primary-colour] text-white' : 'bg-white text-black'} text-base font-medium px-12 py-3`}
                    >
                        2024
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative mt-10">
                <div ref={ref} className="relative md:absolute top-[-15%] right-0 flex flex-row gap-4 z-10">
                    <div className="flex flex-col gap-3 p-6 bg-[--primary-colour] w-[300px] text-center">
                        <p className='text-3xl md:text-4xl font-semibold text-white'>
                            {inView && (
                                <CountUp 
                                    end={statistics[selectedYear].injuries} 
                                    duration={2.5}
                                    start={0}
                                    separator=","
                                />
                            )}
                        </p>
                        <p className='text-sm font-light text-white'>Workplace Serious harm injuries</p>
                    </div>
                    <div className="flex flex-col gap-3 p-6 bg-[--primary-colour] w-[300px] text-center">
                        <p className='text-3xl md:text-4xl font-semibold text-white'>
                            {inView && (
                                <CountUp 
                                    end={statistics[selectedYear].daysLost} 
                                    duration={2.5}
                                    start={0}
                                    separator=","
                                />
                            )}
                        </p>
                        <p className='text-sm font-light text-white'>Work days lost due to workplace injury</p>
                    </div>
                </div>
                <div className='relative w-full h-full'>
                    <Image src="/home/statistics-image-1.jpg" alt="Father helping his son with building" className='w-full h-full object-cover' width={1000} height={700} />
                </div>
                <div className='relative w-full h-full'>
                    <Image src="/home/statistics-image-2.jpg" alt="Couple at home painting" className='w-full h-full object-cover' width={1000} height={700} />
                </div>
            </div>
            <div className="flex flex-row mt-6 justify-end">
                <Link href="/analysis-insights" className='self-end text-[--primary-colour] underline text-base md:text-base font-medium flex flex-row gap-1 items-center'>Click here for the latest Analysis & Insights in Construction Health and Safety <IoArrowForward className='text-xl' /></Link>
            </div>
        </div>
    </div>
  )
}

export default Statistics