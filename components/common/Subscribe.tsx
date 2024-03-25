import React from 'react'
import Link from 'next/link'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Subscribe = () => {
  return (
    <section className="subscribe">
        <div className="content-wrapper">
            <div className="subscribe-wrapper py-60 flex flex-col justify-center items-center gap-5">
                <h4 className='text-white font-bold text-3xl lg:text-5xl'>Let&apos;s work better.</h4>
                <Link href="#" className='text-white text-xl font-medium flex flex-row items-center gap-2'>Get in contact <span><IoIosArrowDroprightCircle /></span></Link>
            </div>
        </div>
    </section>
  )
}

export default Subscribe