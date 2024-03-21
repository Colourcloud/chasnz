import React from 'react'

const Resources = () => {
  return (
   <section className="resource-section py-20 pb-20 lg:pb-32 bg-white">
    <div className="content-wrapper">
        <div className="resource-container">
            <div className="resource-heading">
                <h4 className='text-2xl font-semibold'>Browse “Work Should Not Hurt” resources to get you site-ready</h4>
            </div>
        </div>
    </div>
    <div className="resourcec-filters py-8 bg-gray-100 w-full mt-10">
        <div className="content-wrapper flex items-center flex-row gap-6 lg:gap-16">
            <p className='font-medium text-sm text-gray-500'>Filter by type:</p>
            <ul className='flex flex-row gap-6 lg:gap-16 text-gray-600'>
                <li>All</li>
                <li>Guidance</li>
                <li>Posters</li>
                <li>Research &amp; Innovation</li>
                <li>Toolbox Talks</li>
            </ul>
        </div>
    </div>
   </section>
  )
}

export default Resources