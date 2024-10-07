import React from 'react'

const Introduction = () => {
  return (
    <>
    <div className="introduction-section bg-white py-16 lg:py-32 border-b">
        <div className="site-wrapper">
            <div className="flex flex-col gap-6 w-full md:w-4/5">
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold !leading-tight'>Calling all <span className='text-[--primary-colour]'>Health and Safety</span> Professionals: If you can&apos;t identify the hazard, then you don&apos;t know how exposed you are or how to control it.</h2>
                <p className='text-base md:text-lg text-[--text-colour]'>We launched our Energy Based Hazard Recognition program earlier this year and there has been huge interest in the resources we created as well as invitations to present the Energy program tool to a range of companies across the construction health and safety sector.</p>
                <p className='text-base md:text-lg text-[--text-colour]'>Chris Alderson &#40;CEO, CHASNZ&#41; and Jon Harper-Slade &#40;GM Health and Safety Innovation, CHASNZ&#41; are leading 3 x in-person FREE workshops in Auckland, Wellington and Christchurch in November.</p>
            </div>
        </div>
    </div>
    <div className="py-16 lg:py-32">
        <div className="site-wrapper">
            <div className="flex flex-col md:flex-row justify-between gap-16 items-center">
                <div className="flex flex-col gap-6 w-full md:w-2/4">
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold !leading-tight'>Learn all about Energy Based Safety to help improve hazard recognition</h3>
                    <p className='text-base md:text-lg text-[--text-colour]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus  aliquam ipsum ut egestas. Praesent non lobortis tellus. Donec mattis  lacinia orci, vitae cursus ex pulvinar vel. Vestibulum viverra ante eget sollicitudin.</p>
                </div>
                <div className='w-full md:w-2/4 h-[600px] bg-gray-200 rounded-xl'>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Introduction