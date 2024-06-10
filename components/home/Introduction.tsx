import React from 'react'
import Image from 'next/image'

const Introduction = () => {
  return (
    <section className="introduction py-20 lg:py-32">
        <div className="site-wrapper">
            <div className="section-text w-full md:w-3/4 xl:w-2/4 text-center mx-auto flex flex-col gap-4">
                <h4 className='text-4xl font-bold lg:text-6xl'>How we can help you</h4>
                <p className='text-xl'>We provide evidence robust guidance and tools to help you manage Health, Safety and Well-being harm in your business &#45; whatever size that is.</p>
            </div>
            {/* <div className="home-introduction-grid mt-16">
                <div><Image src="/home/introduction-1.png" alt="" width={450} height={300} /></div>
                <div><Image src="/home/introduction-2.png" alt="" width={450} height={300} /></div>
                <div><Image src="/home/introduction-3.png" alt="" width={450} height={300} /></div>
                <div><Image src="/home/introduction-4.png" alt="" width={450} height={300} /></div>
                <div><Image src="/home/introduction-5.png" alt="" width={450} height={300} /></div>
                <div><Image src="/home/introduction-6.png" alt="" width={450} height={300} /></div>
            </div> */}
          <div className="sectors grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
              <div className="section-card border border-[--primary-colour] ">
                  <div className="card-icon flex flex-col gap-4 items-center bg-[--primary-colour] p-12 min-h-[325px]">
                    <div className="card-image">
                      <Image src="/home/service-buyers.svg" alt="" className='h-[125px] w-[125px]' width={100} height={100} />
                    </div>
                    <div className="card-heading text-center">
                      <h6 className='text-3xl font-bold text-white'>Construction service buyers</h6>
                    </div>
                  </div>
                  <div className="sector-card-content p-4 text-center">
                    <p className='text-xl'>Individuals involved in procurement, project management, health and safety &#40;H&S&#41; professionals, contract managers, designers, engineers, and other related roles. It also encompasses building and infrastructure owners and providers.</p>
                  </div>
              </div>

              <div className="section-card border border-[--primary-colour] ">
                  <div className="card-icon flex flex-col gap-4 items-center bg-[--primary-colour] p-12 min-h-[325px]">
                    <div className="card-image">
                      <Image src="/home/safety-icon.svg" alt="" className='h-[125px] w-[125px]' width={100} height={100} />
                    </div>
                    <div className="card-heading text-center">
                      <h6 className='text-3xl font-bold text-white'>People who work in safety</h6>
                    </div>
                  </div>
                  <div className="sector-card-content p-4 text-center">
                    <p className='text-xl'>Individuals working in safety roles, ranging from Health & Safety &#40;H&S&#41; representatives to directors of safety, as well as those who handle safety duties informally.</p>
                  </div>
              </div>

              <div className="section-card border border-[--primary-colour] ">
                  <div className="card-icon flex flex-col gap-4 items-center bg-[--primary-colour] p-12 min-h-[325px]">
                    <div className="card-image">
                      <Image src="/home/trade-icon.svg" alt="" className='h-[125px] w-[125px]' width={100} height={100} />
                    </div>
                    <div className="card-heading text-center">
                      <h6 className='text-3xl font-bold text-white'>Trades people</h6>
                    </div>
                  </div>
                  <div className="sector-card-content p-4 text-center">
                    <p className='text-xl'>Tradies are a diverse group of skilled workers essential to the functioning and development of the country&apos;s infrastructure and economy.</p>
                  </div>
              </div>

              <div className="section-card border border-[--primary-colour] ">
                  <div className="card-icon flex flex-col gap-4 items-center bg-[--primary-colour] p-12 min-h-[325px]">
                    <div className="card-image">
                      <Image src="/home/car-icon.svg" alt="" className='h-[125px] w-[150px]' width={100} height={100} />
                    </div>
                    <div className="card-heading text-center">
                      <h6 className='text-3xl font-bold text-white'>Small to medium business owners</h6>
                    </div>
                  </div>
                  <div className="sector-card-content p-4 text-center">
                    <p className='text-xl'>Small to medium business owners &#40;not dedicated safety professionals&#41; &#45; These are organizations small enough that the boss often works hands-on or will take on practical tasks.</p>
                  </div>
              </div>

          </div>
        </div>
    </section>
  )
}

export default Introduction