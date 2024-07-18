'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Subscribe: React.FC = () => {
  return (
    <>
      <section className="subscribe">
        <div className="content-wrapper">
            <div className="subscribe-wrapper py-60 flex flex-col justify-center items-center gap-5">
                <h4 className='text-white font-semibold text-3xl lg:text-5xl'>Let's work better.</h4>
                <Link href="/contact/" className='text-white text-xl font-medium flex flex-row items-center gap-2'>
                  Get in touch <span><IoIosArrowDroprightCircle /></span>
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
