import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'
import Header from '@/components/programmes/constructsafe/Header'
import Introduction from '@/components/programmes/constructsafe/assessment/Introduction'

export const metadata: Metadata = {
    title: 'ConstructSafe - Book an Assessment',
  }

const page = () => {
  return (
   <>
   <Header />
   <Introduction />
   <section className="book-assessment py-20 lg:py-32">
    <div className="content-wrapper">
      <div className="trades-text w-full text-center flex flex-col gap-6">
        <h4 className="text-2xl lg:text-4xl font-semibold text-[--dark-blue]">Book an assessment process</h4>
      </div>
      <div className="assessment-booking-grid grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
        <div className="grid-card p-8 bg-[--primary-colour] flex flex-col gap-6 justify-between items-center text-center">
            <Image src="/programmes/constructsafe/assessment-process-1.svg" alt="" width={150} height={200} />
            <h4 className='text-white text-2xl font-semibold'>Register your company</h4>
            <a href="http://www.constructsafe.kiwi/Test/Company.html" target="_blank" className='bg-white text-sm rounded-full py-2 px-6'>Learn More</a>
        </div>
        <div className="grid-card p-8 bg-[--primary-colour] flex flex-col gap-6 justify-between items-center text-center">
            <Image src="/programmes/constructsafe/assessment-process-2.svg" alt="" width={150} height={200} />
            <h4 className='text-white text-2xl font-semibold'>Pre Register your profile</h4>
            <a href="http://www.constructsafe.kiwi/Test/Worker.html" target="_blank" className='bg-white text-sm rounded-full py-2 px-6'>Learn More</a>
        </div>
        <div className="grid-card p-8 bg-[--primary-colour] flex flex-col gap-6 justify-between items-center text-center">
            <Image src="/programmes/constructsafe/assessment-process-3.svg" alt="" width={150} height={200} />
            <h4 className='text-white text-2xl font-semibold'>Book through an assessment provider</h4>
            <a href="http://www.constructsafe.kiwi/SubPage/Testbooking.html" target="_blank" className='bg-white text-sm rounded-full py-2 px-6'>Learn More</a>
        </div>
      </div>
    </div>
   </section>
   </>
  )
}

export default page