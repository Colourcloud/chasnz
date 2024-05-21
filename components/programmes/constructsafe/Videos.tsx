import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Videos = () => {
  return (
   <>
   <section className="video-section pb-20 lg:pb-32">
        <div className="site-wrapper">

            <div className="video-container flex flex-col lg:flex-row justify-between gap-10">
                <div className="select-video w-full md:w-[35%] flex flex-col gap-6">
                    <div className="video-card flex flex-row gap-3 items-center">
                        <Image src="/programmes/constructsafe/video-1.jpg" alt="video" width={150} height={100} />
                        <div className="thumbnail-information flex flex-col gap-2">
                            <h6 className='text-xl font-semibold'>Why ConstructSafe?</h6>
                            <p className='text-sm'>Learn about what ConstructSafe is about</p>
                        </div>
                    </div>
                    <div className="video-card flex flex-row gap-3 items-center">
                        <Image src="/programmes/constructsafe/video-2.jpg" alt="video" width={150} height={100} />
                        <div className="thumbnail-information flex flex-col gap-2">
                            <h6 className='text-xl font-semibold'>Sign up to ConstructSafe</h6>
                            <p className='text-sm'>Learn about what ConstructSafe is about</p>
                        </div>
                    </div>
                    <div className="video-card flex flex-row gap-3 items-center">
                        <Image src="/programmes/constructsafe/video-3.jpg" alt="video" width={150} height={100} />
                        <div className="thumbnail-information flex flex-col gap-2">
                            <h6 className='text-xl font-semibold'>ConstructSafe "How To" video</h6>
                            <p className='text-sm'>Learn about what ConstructSafe is about</p>
                        </div>
                    </div>
                </div>
                <div className="constructsafe-video-player w-full md:w-[65%]">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5FUBIxiwXCQ?si=1USA85RFWDrhs2JL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </div>
    </section>
   
   </>
  )
}

export default Videos