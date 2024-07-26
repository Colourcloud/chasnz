import React from 'react'
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
      <div className="assessment-booking-grid grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="grid-card">
          
        </div>
      </div>
    </div>
   </section>
   </>
  )
}

export default page