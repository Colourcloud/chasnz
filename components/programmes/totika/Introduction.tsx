import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-black text-2xl font-semibold'>Tōtika related content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--totika-blue] mt-6 text-lg'>
                        <li><Link href="/totika/contractor-suppliers">Info for contractors and suppliers</Link></li>
                        <li><Link href="#">Case studies</Link></li>
                        <li><Link href="https://www.totika.org/totika/signup" target='_blank' className='flex flex-row items-center gap-2'>Register for the Tōtika scheme <FiExternalLink /></Link></li>
                        <li><Link href="https://www.totika.org/totika-scheme-scheme-resources" target='_blank' className='flex flex-row items-center gap-2'>Tōtika scheme resources <FiExternalLink /></Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-6 w-full lg:w-[70%] ml-0 lg:ml-[8rem]">
                    <h4 className='font-bold text-4xl lg:text-6xl'>Introduction to Tōtika</h4>
                    <p className='text-[--text-colour]'>Tōtika was developed to address inefficiencies in the procurement process caused by the lack of a common pre-qualification standard. Previously, suppliers had to repeatedly pre-qualify against different schemes and standards, resulting in many proprietary and internal pre-qualification schemes, this wasted the time and resources for all parties involved. Tōtika aims to provide a streamlined pre-qualification process, fulfilling the industry&apos;s desire for a common standard.</p>
                    <p className='text-[--text-colour]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc, vel sollicitudin nibh felis euismod turpis. Ut ultrices sagittis lectus, in maximus dui. Mauris mattis sem nisi</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction