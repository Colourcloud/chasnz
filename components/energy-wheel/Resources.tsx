import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Resources = () => {
  return (
    <section className="energy-wheel-resources pb-20 lg:pb-32" id="resources">
        <div className="content-wrapper">
            <div className="resource-wrapper">
                <h4 className='text-2xl font-semibold text-[--text-colour]'>Please be sure to check out and download the below content/assets we&apos;ve developed for your workplace to support your health and safety needs. We look forward to hearing your feedback on our Energy Wheel tool.</h4>
                <div className="resource-grid-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/explainer-video.jpg" className='w-full' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Explainer Video</h6>
                            <Link href="https://www.youtube.com/watch?v=6S9SKbOpA-M" target="_blank" className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/hazard-board.jpg" className='w-full' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Hazard Board Sticker</h6>
                            <Link href="/energy-wheel/explainer-video" className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/hard-hat.jpg" className='w-full' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Hard Hat Sticker</h6>
                            <Link href="/energy-wheel/explainer-video" className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/pocket-guide.jpg" className='w-full' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Pocket Guide</h6>
                            <Link href="/energy-wheel/explainer-video" className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/toolbox.jpg" className='w-full' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Toolbox Talks</h6>
                            <Link href="/energy-wheel/explainer-video" className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/science.jpg" className='w-full' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>The Energy Wheel Art and Science</h6>
                            <Link href="/energy-wheel/explainer-video" className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/site-guide.jpg" className='w-full' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Site Guide</h6>
                            <Link href="/energy-wheel/explainer-video" className='resource-button'>Download</Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
  )
}

export default Resources