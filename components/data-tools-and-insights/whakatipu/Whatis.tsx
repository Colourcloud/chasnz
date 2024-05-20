import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Whatis = () => {
  return (
    <section className="what-is-whakatipu py-20 lg:py-32" id="whatis">
        <div className="content-wrapper">
            <div className="content-container flex flex-col md:flex-row justify-between gap-16">
                <div className="text-block flex flex-col gap-6 w-full md:w-3/5">
                    <h4 className='text-4xl lg:text-6xl font-bold'>What is Project Whakatipu?</h4>
                    <p className='text-[--text-colour]'>Using data to provide insight and action is not a new management  science. In many other fields, such as banking, insurance, fraud  detection and customer channel marketing, the use of predictive  analytics is commonplace. However, in the field of health and safety, we  have lagged! Typically organisations and regulators have relied on  descriptive analytics such as injury rate trends and simply grouping  similar injury types into categories. Albeit, tools we have used to  describe what has happened have become more sophisticated, we have  evolved from excel graphs to tools such as Power BI.</p>
                    <p className='text-[--text-colour]'>However, these still do not harness the power of AI, machine learning  and optimisation. Many organisations have a wealth of data that could  prove useful for understanding how to achieve better health and safety  performance. Project Whakatipu is an industry project to create a data  lake asset for all New Zealand to benefit from.</p>
                    <a href="http://cms.chasnz.org/wp-content/uploads/2024/05/ConstructionLeadingHealthSafetyandWell-BeingIndicators_CHASNZ_.pdf" target='_blank' className='text-white text-sm font-medium py-3 px-6 rounded-full bg-[--primary-colour] self-start'>Lag Indicators Dashboard</a>
                </div>
                <div className="section-image w-full md:w-2/5">
                    <div className="">
                        <Image src="/data-tools/what-is-whakatipu.jpg" alt="what is whakatipu" width={400} height={500} className='object-fit w-full' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Whatis