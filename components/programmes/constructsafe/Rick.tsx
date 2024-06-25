import React from 'react'
import Image from 'next/image'

const Rick = () => {
  return (
    <section className="what-is-construct-safe py-20 lg:py-32">
        <div className="content-wrapper">
            <div className="what-is-construct-safe_container">
                <div className="introduction w-full md:w-2/5 mx-auto flex flex-col gap-2 items-center text-center">
                    <Image src="/programmes/constructsafe/rick.jpg" alt='rick' width={100} height={100} className='rounded-full' />
                    <h6 className='text-xl font-bold text-[--dark-blue]'>Rick Herd</h6>
                    <span className='text-sm text-gray-400'>CEO, Naylor Love</span>
                    <p className='font-light text-[--dark-blue]'>Rick Herd, CEO of Naylor Love, tells us why ConstructSafe is at the leading edge of construction industry standards.</p>
                </div>

                <div className="text-center mt-16">
                    <h4 className='text-3xl font-semibold text-[--dark-blue]'>How is industry utilising the ConstructSafe scheme?</h4>
                    <div className="video-player-responsive mt-20">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xUNreOoMI_Q?si=IxpCv0K0p2_rXHJI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Rick