import React from 'react'
import Link from 'next/link'

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-black text-2xl font-semibold'>WSHN related content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="#trades">Trade Specific Information</Link></li>
                        <li><Link href="#">Analysis & Insights</Link></li>
                        <li><Link href="#">Get Involved</Link></li>
                        <li><Link href="#">Resources</Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 lg:ml-[8rem]">
                    <h4 className='font-bold text-4xl lg:text-6xl'>Work Should Not Hurt</h4>
                    <p className='text-[--text-colour]'>The Work Should Not Hurt programme aims to make sure tradespeople can enjoy long, pain free careers and retire when they want to and not when forced to due to pain and injury.</p>
                    <h4 className='font-semibold text-2xl'>It&apos;s time to change the norm</h4>
                    <p className='text-[--text-colour]'>Work Should Not Hurt is a participative ergonomics programme. Put simply, this means actively involving workers and industry in developing and implementing changes to the way work is done.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction