import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Prequalification = () => {
  return (
    <section className='prequalification relative'>
        <div className="content-wrapper h-full">
            <div className="prequal-content flex flex-col gap-16 justify-end relative lg:absolute bottom-[-15%]">
                <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white w-3/4'>Please ensure you request a Tōtika aligned prequalification assessment when contacting the below member schemes.</h4>
                <div className="prequal-brands flex flex-row gap-12 flex-wrap">
                    <div className="w-[325px] h-[300px] bg-[--totika-blue] flex justify-center items-center">
                        <Image src="/programmes/totika/qualify365.png" alt="" width={200} height={200} />
                    </div>
                    <div className="w-[325px] h-[300px] bg-[--totika-blue] flex justify-center items-center">
                        <Image src="/programmes/totika/prequal.png" alt="" width={200} height={200} />
                    </div>
                    <div className="w-[325px] h-[300px] bg-[--totika-blue] flex justify-center items-center">
                        <Image src="/programmes/totika/she.png" alt="" width={200} height={200} />
                    </div>
                    <div className="w-[325px] h-[300px] bg-[--totika-blue] flex justify-center items-center">
                        <Image src="/programmes/totika/avetta.png" alt="" width={200} height={200} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Prequalification