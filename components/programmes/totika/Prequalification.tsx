import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Prequalification = () => {
  return (
    <>
    <section className='prequalification relative'>
        <div className="content-wrapper h-full">
            <div className="prequal-content flex flex-col gap-16 justify-end relative lg:absolute bottom-[15%] h-full">
                <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white w-full md:w-3/4'>Please ensure you request a Tōtika aligned prequalification assessment when contacting the below member schemes.</h4>
            </div>
        </div>
    </section>

    <section className='mt-20'>
    <div className="content-wrapper">
                <div className="prequal-brands grid grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="w-full h-[200px] p-5 xl:w-[325px] lg:h-[300px] bg-[--totika-blue] flex justify-center items-center">
                        <Image src="/programmes/totika/qualify365.png" alt="" width={200} height={200} />
                    </div>
                    <div className="w-full h-[200px] p-5 xl:w-[325px] lg:h-[300px] bg-[--totika-blue] flex justify-center items-center">
                        <Image src="/programmes/totika/prequal.png" alt="" width={200} height={200} />
                    </div>
                    <div className="w-full h-[200px] p-5 xl:w-[325px] lg:h-[300px] bg-[--totika-blue] flex justify-center items-center">
                        <Image src="/programmes/totika/she.png" alt="" width={200} height={200} />
                    </div>
                    <div className="w-full h-[200px] p-5 xl:w-[325px] lg:h-[300px] bg-[--totika-blue] flex justify-center items-center">
                        <Image src="/programmes/totika/avetta.png" alt="" width={200} height={200} />
                    </div>
                </div>
        </div>
    </section>
    
    </>
  )
}

export default Prequalification