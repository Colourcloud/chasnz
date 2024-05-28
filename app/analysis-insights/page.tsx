import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/programmes/work-should-not-hurt/Header'
import Link from 'next/link'
import Powerbi from '@/components/common/Powerbi'

export const metadata: Metadata = {
    title: 'CHASNZ – Work Should Not Hurt - Get Involved',
  }

  const iframeSrc = "https://app.powerbi.com/view?r=eyJrIjoiYzE2MjhjYzMtNThiNy00NmM0LTljNGMtOGYzYjEzMjQyZDUwIiwidCI6ImI0OGExNmY2LTM3ZDUtNDU1NS05OTljLTgyNDU5ZjFjZWExOCJ9"; 
  const iframeSrc2 = "https://app.powerbi.com/view?r=eyJrIjoiNDlhNjRjYzgtZmVkYi00MDM4LTgzYzAtMzc0ZDhkOTY4ZjExIiwidCI6IjYxMWMyMDNlLTRiNDItNGVhMC04MzdhLTJiYzE1MDE3MDBhMCJ9"; 

const page = () => {
  return (
    <>
    <Header />
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-black text-2xl font-semibold'>Analysis &amp; Insights content:</h4>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 xl:ml-[8rem] z-[10] lg:mt-[-14rem] lg:bg-white lg:pt-12 lg:px-20">
                    <h4 className='font-bold text-4xl lg:text-6xl'>Analysis &amp; Insights</h4>
                    <p className='text-[--text-colour]'>Work Should Not Hurt is proud to partnership with ACC. Our shared goal is to make a difference in the lives of our tradespeople.</p>
                    <p className='text-[--text-colour]'>ACC data powers our programme; they have shared this data with us so we can share it with you.</p>
                </div>
            </div>

            <div className="powerbi w-full py-20 lg:py-32">
                <h4 className='text-4xl py-8 font-semibold'>What is the impact of injuries on our productivity?</h4>
                <Powerbi src={iframeSrc} />
            </div>
            <div className="powerbi w-full pb-20 lg:pb-32">
                <Powerbi src={iframeSrc2} />
            </div>
        </div>
    </div>
    </>
  )
}

export default page
