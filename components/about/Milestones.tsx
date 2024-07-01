import React from 'react'

const Milestones = () => {
  return (
    <section className="milestones bg-[--dark-blue]">
      <div className="content-wrapper">
        <div className="section-content flex flex-col h-full justify-end py-14">
          <div className="section-text text-white w-full md:w-3/5 flex flex-col gap-6 text-center mx-auto">
            <h4 className='text-3xl font-semibold lg:text-5xl !leading-tight'>CHASNZ key milestones and achievements</h4>
            <a href="http://cms.chasnz.org/wp-content/uploads/2024/07/CHASNZ-Key-Milestones-and-Achievements-MASTER.pdf" target='_blank' className='font-medium text-lg text-[--primary-colour]'>View our milestones</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Milestones