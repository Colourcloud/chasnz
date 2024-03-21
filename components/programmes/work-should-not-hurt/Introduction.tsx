import React from 'react'
import Link from 'next/link'

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-8 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-black text-2xl font-semibold'>WSHN related content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--primary-colour] mt-6 text-lg'>
                        <li><Link href="#">What is "Work Should Not Hurt"?</Link></li>
                        <li><Link href="#">Trade Specific Information</Link></li>
                        <li><Link href="#">Analysis & Insights</Link></li>
                        <li><Link href="#">Get Involved</Link></li>
                        <li><Link href="#">Resources</Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 lg:ml-[11rem]">
                    <h4 className='font-semibold text-2xl'>It&apos;s time to change the norm.</h4>
                    <p className='text-[--text-colou]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc, vel sollicitudin nibh felis euismod turpis. Ut ultrices sagittis lectus, in maximus dui. Mauris mattis sem nisi</p>
                    <p className='text-[--text-colou]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc, vel sollicitudin nibh felis euismod turpis. Ut ultrices sagittis lectus, in maximus dui. Mauris mattis sem nisi</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction