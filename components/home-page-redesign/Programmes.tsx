'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const programmes = [
  {
    id: 'work-should-not-hurt',
    title: 'Work Should Not Hurt',
    description: 'The Work Should Not Hurt programme aims to make sure tradespeople can enjoy long, pain free careers and retire when they want to and not when forced to due to pain and injury.',
    additionalDescription: 'Work Should Not Hurt is a participative ergonomics programme. Put simply, this means actively involving workers and industry in developing and implementing changes to the way work is done.',
    image: '/home/programmes/slider/work-should-not-hurt.jpg',
    logo: '/home/programmes/slider/work-should-not-hurt-logo.svg',
    bgColor: 'bg-[--dark-blue]',
    textColor: 'text-[--dark-blue]',
    link: '/work-should-not-hurt'
  },
  {
    id: 'totika',
    title: 'Introduction to Tōtika',
    description: 'Tōtika was developed to address inefficiencies in the procurement process caused by the lack of a common pre-qualification standard. Previously, suppliers had to repeatedly pre-qualify against different schemes and standards, resulting in many proprietary and internal pre-qualification schemes, this wasted the time and resources for all parties involved. Tōtika aims to provide a streamlined pre-qualification process, fulfilling the industry\'s desire for a common standard.',
    image: '/home/programmes/slider/totika.jpg',
    logo: '/home/programmes/slider/totika-logo.svg',
    bgColor: 'bg-[--totika-blue]',
    textColor: 'text-[--totika-blue]',
    link: '/totika'
  },
  {
    id: 'constructsafe',
    title: 'Introduction to ConstructSafe',
    description: 'The Foundation Health & Safety Assessment is the minimum required knowledge of construction health & safety. It takes 30mins and consists of questions related to basic health and safety and is designed for EVERYONE working on a construction site. Questions are also in audio to help eliminate language barriers.',
    additionalDescription: 'Specialist Trades and Occupation Assessments are also available; excavator, roller, paver, supervisors and many more.',
    image: '/home/programmes/slider/constructsafe.jpg',
    logo: '/home/programmes/slider/constructsafe-logo.svg',
    bgColor: 'bg-[#56D54F]',
    textColor: 'text-[--primary-colour]',
    link: '/constructsafe'
  },
  {
    id: 'leadon',
    title: 'Frontline leaders are the first line of protection and a last line of defence on our worksites.',
    description: 'The Lead On. programme recognises the key role frontline leaders have in making a difference with how work is done and provides a framework for supervisors to develop leadership skills and capability for more effective onsite safety management.',
    image: '/home/programmes/slider/leadon.jpg',
    logo: '/home/programmes/slider/leadon-logo.svg',
    bgColor: 'bg-[--leadon-orange]',
    textColor: 'text-[--leadon-orange]',
    link: '/leadon'
  }
]

const Programmes = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const scrollToNext = () => {
    if (containerRef.current) {
      const nextIndex = (currentIndex + 1) % programmes.length
      const cardWidth = containerRef.current.children[0].clientWidth
      containerRef.current.scrollTo({
        left: cardWidth * nextIndex,
        behavior: 'smooth'
      })
      setCurrentIndex(nextIndex)
    }
  }

  const scrollToPrev = () => {
    if (containerRef.current) {
      const prevIndex = (currentIndex - 1 + programmes.length) % programmes.length
      const cardWidth = containerRef.current.children[0].clientWidth
      containerRef.current.scrollTo({
        left: cardWidth * prevIndex,
        behavior: 'smooth'
      })
      setCurrentIndex(prevIndex)
    }
  }

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0].clientWidth
      containerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  return (
    <section className="pt-16 lg:pt-32 border-t relative">
      <div className="site-wrapper">
        <div className="flex flex-col gap-5 max-w-5xl">
          <h4 className="text-2xl md:text-3xl lg:text-5xl font-semibold">Discover our programmes and download a range of free resources for your businesses health and safety requirements</h4>
          <p className="text-sm md:text-base lg:text-lg font-light">Access practical programmes and free resources to support your health and safety goals. From on-site tools to industry guidance, we&apos;re here to help you create safer workplaces across every level of your business.</p>
        </div>
      </div>
      <div className="relative max-w-[2560px] mx-auto">
        <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <button 
            onClick={scrollToPrev}
            className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <button 
            onClick={scrollToNext}
            className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex flex-row gap-2 px-2 md:px-24 lg:px-32 mt-8 mb-8 overflow-x-auto scrollbar-hide">
          {programmes.map((programme, index) => (
            <button
              key={programme.id}
              onClick={() => scrollToIndex(index)}
              className={`px-2 lg:px-4 py-2 whitespace-nowrap transition-all duration-200 ${
                currentIndex === index 
                  ? 'text-[--primary-colour] text-sm md:text-base font-semibold border-b-2 border-[--primary-colour]' 
                  : 'text-gray-500 font-normal hover:text-gray-700'
              }`}
            >
              {programme.id === 'leadon' ? 'Lead On.' : programme.id === 'totika' ? 'Tōtika' : programme.id === 'work-should-not-hurt' ? 'Work Should Not Hurt' : 'ConstructSafe'}
            </button>
          ))}
        </div>
        <div ref={containerRef} className="flex flex-row gap-10 overflow-x-scroll mt-4 px-4 md:px-24 lg:px-32 programmes-cards-container scrollbar-hide">
          {programmes.map((programme) => (
            <div key={programme.id} className={`programmes-card min-w-[280px] w-full md:min-w-[600px] lg:w-[1100px] h-auto md:h-[600px] ${programme.bgColor} rounded-lg overflow-hidden flex-shrink-0`}>
              <div className="flex flex-col md:flex-row gap-6 h-full">
                <div className="w-full md:w-[40%] bg-black">
                  <Image src={programme.image} alt={`${programme.id} Cover Image`} className='h-[250px] md:h-full w-full object-cover' width={700} height={700} />
                </div>
                <div className="flex flex-col w-full md:w-[60%] gap-6 p-8 text-white justify-center">
                  <Image src={programme.logo} alt={`${programme.id} Logo`} width={200} height={200} />
                  <h4 className="text-2xl md:text-3xl font-semibold">{programme.title}</h4>
                  <p className="text-sm md:text-base font-light">{programme.description}</p>
                  {programme.additionalDescription && (
                    <p className="text-sm md:text-base font-light">{programme.additionalDescription}</p>
                  )}
                  <Link href={programme.link} className={`text-sm font-semibold py-2 px-6 bg-white ${programme.textColor} rounded-full self-start hover:bg-black hover:text-white transition-all duration-200`}>
                    Learn More
                  </Link>
                  <div className='flex flex-col gap-3'>
                    <p className='text-sm font-semibold'>Useful Links:</p>
                    <ul className='flex flex-row gap-3 underline'>
                      <li>Book an Assessment</li>
                      <li>Learning Resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programmes