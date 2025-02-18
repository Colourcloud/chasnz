import React from 'react'
import Image from 'next/image'
const Introduction = () => {
  return (
    <section className="py-12 lg:py-32">
        <div className="site-wrapper">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-center">
                <div className='flex flex-col gap-6  w-full lg:w-2/5'>
                    <h2 className='text-xl lg:text-2xl font-semibold'>ACCs Have a hmmmm campaign encourages people to stop and think about the consequences of injury before acting.</h2>
                </div>
                <div className='w-full lg:w-1/2'>
                    <Image src="/having-a-hmmm/introduction-image.jpg" alt="Acc logo" width={1000} height={1000} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Introduction