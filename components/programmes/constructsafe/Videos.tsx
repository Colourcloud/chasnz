'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Videos: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>('https://www.youtube.com/embed/5FUBIxiwXCQ?si=1USA85RFWDrhs2JL');

  const handleVideoChange = (src: string) => {
    setVideoSrc(src);
  };

  return (
   <>
   <section className="video-section pt-20 lg:pt-32">
        <div className="site-wrapper">

            <div className="video-container flex flex-col lg:flex-row justify-between gap-10">
                <div className="select-video w-full md:w-[35%] flex flex-col gap-6">
                    <div className="video-card flex flex-row gap-3 items-center cursor-pointer" onClick={() => handleVideoChange('https://www.youtube.com/embed/ru9s5sF2ncs?si=ZOee6M-M_sHbz2he')}>
                        <Image src="/programmes/constructsafe/video-1.jpg" alt="video" width={150} height={100} />
                        <div className="thumbnail-information flex flex-col gap-2">
                            <h6 className='text-xl font-semibold'>Why ConstructSafe?</h6>
                            <p className='text-sm'>Learn about what ConstructSafe is about</p>
                        </div>
                    </div>
                    <div className="video-card flex flex-row gap-3 items-center cursor-pointer" onClick={() => handleVideoChange('https://www.youtube.com/embed/zukJTPPa_1k?si=hN3xb7DeZabpu_U0')}>
                        <Image src="/programmes/constructsafe/video-2.jpg" alt="video" width={150} height={100} />
                        <div className="thumbnail-information flex flex-col gap-2">
                            <h6 className='text-xl font-semibold'>Sign up to ConstructSafe</h6>
                            <p className='text-sm'>Learn about what ConstructSafe is about</p>
                        </div>
                    </div>
                    <div className="video-card flex flex-row gap-3 items-center cursor-pointer" onClick={() => handleVideoChange('https://www.youtube.com/embed/caulXkb0cfw?si=0UFN4Yq_A8fk1jT4')}>
                        <Image src="/programmes/constructsafe/video-3.jpg" alt="video" width={150} height={100} />
                        <div className="thumbnail-information flex flex-col gap-2">
                            <h6 className='text-xl font-semibold'>ConstructSafe "How To" video</h6>
                            <p className='text-sm'>Learn about what ConstructSafe is about</p>
                        </div>
                    </div>
                </div>
                <div className="constructsafe-video-player w-full md:w-[65%]">
                  <iframe width="560" height="315" src={videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Videos
