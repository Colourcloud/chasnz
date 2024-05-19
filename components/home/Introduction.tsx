import React from 'react'
import Image from 'next/image'

const Introduction = () => {
  return (
    <section className="introduction py-20 lg:py-32">
        <div className="site-wrapper">
            <div className="section-text w-full md:w-3/4 xl:w-2/4 text-center mx-auto flex flex-col gap-4">
                <span className='text-[--primary-colour] font-semibold'>What we stand for</span>
                <h4 className='text-4xl font-bold lg:text-6xl'>What we stand for</h4>
                <p>Our Vision is to shift health and safety in the construction industry from inconsistent compliance to consistent competence, and to have healthy and safe workers as a natural outcome of good work.</p>
            </div>
            <div className="home-introduction-grid mt-16">
                <div><Image src="/home/introduction-1.png" alt="" width={450} height={300} /></div>
                <div><Image src="/home/introduction-2.png" alt="" width={450} height={300} /></div>
                <div><Image src="/home/introduction-3.png" alt="" width={450} height={300} /></div>
                <div><Image src="/home/introduction-4.png" alt="" width={450} height={300} /></div>
                <div><Image src="/home/introduction-5.png" alt="" width={450} height={300} /></div>
                <div><Image src="/home/introduction-6.png" alt="" width={450} height={300} /></div>
            </div>
        </div>
    </section>
  )
}

export default Introduction