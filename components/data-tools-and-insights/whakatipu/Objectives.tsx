import React from 'react'
import Link from 'next/link'

const Objectives = () => {
  return (
    <section className="objectives bg-[--primary-colour]" id="objectives">
        <div className="content-wrapper">
            <div className="content-container flex flex-col py-20">
                <div className="text-block w-full">
                    <h4 className='text-4xl lg:text-6xl font-bold text-white pb-12 border-b-2 border-white'>Project Whakatipu Objectives</h4>
                </div>
                <div className="text-container flex flex-col md:flex-row justify-between gap-16 text-white mt-12">
                    <div className="text-block w-full md:w-2/4">
                        <p>Project Whakatipu will initially conduct a proof of concept with a limited data set which will seek to show the power and use of the data lake concept and analytics approach.</p>
                    </div>
                    <div className="text-block w-full md:w-2/4 flex flex-col gap-6">
                        <h6 className='text-2xl font-semibold'>Success criteria for the pilot include;</h6>
                        <p>Proving that organisations can share data with CHASNZ</p>
                        <p>More actionable insight can be gained by using advanced analytic techniques</p>
                        <p>A service will be created for all organisations who want a better understanding; what to focus on to achieve their health and safety goals.</p>
                        <p>Project Whakatipu does not need to be restricted to the Construction industry, yet this is where we will start</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Objectives