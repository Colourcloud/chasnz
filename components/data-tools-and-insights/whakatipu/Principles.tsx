import React from 'react'
import Image from 'next/image'

const Principles = () => {
  return (
    <section className="principles py-20 lg:py-32" id="principles">
        <div className="content-wrapper">
            <div className="section-text py-10 border-b-2 border-[#EBEBEB]">
                <h4 className='text-4xl lg:text-5xl font-bold text-[--dark-blue]'>Key Principles</h4>
            </div>

            <div className="content-container flex flex-col md:flex-row justify-between gap-16 mt-12">
                <div className="text-block flex flex-col gap-6 w-full md:w-2/4">
                    <p className='text-[--text-colour] text-xl font-bold'>Protecting Data</p>
                    <p className='text-[--text-colour]'>Protection of anonymity and security data shared with Project Whakatipu will be kept securely and not shared without the explicit permission of the donor.</p>
                    <p className='text-[--text-colour] text-xl font-bold'>National Assets</p>
                    <p className='text-[--text-colour]'>National data asset Project Whakatipu is not a commercial venture and designed for all organisations, public and private to benefit from. All funds collected will be channelled into research and building the asset.</p>
                    <p className='text-[--text-colour] text-xl font-bold'>Applied Research</p>
                    <p className='text-[--text-colour]'>Applied research Project Whakatipu will focus on actionable insights which mean that priority will be given to enabling tangible change in the Construction industry.</p>
                </div>
                <div className="section-image w-full md:w-2/4">
                    <div className="">
                        <Image src="/data-tools/whakatipu.jpg" alt="what is whakatipu" width={400} height={500} className='object-fit w-full' />
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Principles