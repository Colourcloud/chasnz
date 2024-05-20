import React from 'react'
import Link from 'next/link'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Video = () => {
  return (
    <section className="video-section py-20 lg:py-40">
        <div className="site-wrapper">
            <div className="video-text flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <h4 className='font-bold text-2xl lg:text-3xl w-full lg:w-4/5'>Interested in the benefits that the Tōtika scheme can offer your organisation with Health and Safety pre-qualification?</h4>
                <Link href="https://www.totika.org/totika/signup" target="_blank" className='bg-[--totika-blue] py-3 px-6 rounded-full text-sm text-white font-semibold flex flex-row items-center gap-1'>Register for Tōtika <IoIosArrowDroprightCircle className='text-lg'/></Link>
            </div>
            <div className="video-player-responsive mt-20">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7YpfBuJq2EQ?si=0Gu9OsX34oT_QZeq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Video