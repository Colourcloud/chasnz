import React from 'react'
import Link from 'next/link'
import AnimatedText from '../ui/AnimateText'

const Contact = () => {
  return (
    <section className="bottom-contact py-16 lg:py-40 bg-black">
        <div className='max-w-5xl mx-auto text-center flex flex-col gap-6'>
        <Link href="http://cms.chasnz.org/wp-content/uploads/2024/12/CHASNZ-Guide-to-Mobile-Plant-Safety.pdf" target='_blank' className='px-6 text-white text-sm font-medium py-3 rounded-full bg-[--primary-colour] self-center'>Download Presentation</Link>
        <p className='text-white text-2xl font-semibold'>We are keen to hear any feedback from you and whether you need any other resources relating to Plant and Equipment. Please contact us on <a href="mailto:info@chasnz.org" className='text-[--primary-colour]'>info@chasnz.org</a></p>
        </div>
        
    </section>
  )
}

export default Contact