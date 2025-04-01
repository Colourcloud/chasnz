import React from 'react'
import { IoClose } from "react-icons/io5";
import Image from 'next/image';

const HeaderBanner = () => {
  return (
    <section className='flex flex-col'>
    <div className='w-full py-4 bg-[--primary-colour] text-center text-white relative'>
      <p className='text-sm'>This is an example banner advertisement to further advertise new tools or sections on the website. Background colours can change depending on which section its for</p>
      <button className='absolute top-4 right-5'><IoClose className='text-xl'/></button>
    </div>
    </section>
  )
}

export default HeaderBanner