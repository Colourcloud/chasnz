'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type CaseStudy = {
  id: string
  title: string
  imageSrc: string
  description: string
  downloadLink: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'downer',
    title: 'Tōtika - Downer case study',
    imageSrc: '/programmes/totika/case-study/downer.jpg',
    description: 'Downer New Zealand has brought relationships to the forefront of their business with their motto “relationships creating success” and ambition to “build a better New Zealand... through the strength of the relationships...”. Having integrated Tōtika into their everyday operations, Tōtika now supports Downer in this journey too. Downer is one of New Zealand\'s oldest construction companies, with roots right back to the public works departments of the late 1800s. It now employs over 10,000 people from Kaitaia to Invercargill, and in addition to being...',
    downloadLink: 'http://cms.chasnz.org/wp-content/uploads/2024/05/18198-Totika-Downer-Case-Study-F.pdf',
  },
  {
    id: 'kiwrail',
    title: 'Tōtika - KiwiRail case study',
    imageSrc: '/programmes/totika/case-study/kiwirail.webp',
    description: 'Tōtika is an industry game-changer, making the prequalification process for health and safety in NZ simple and easy to navigate. Tōtika removes unnecessary cost, complexity and repetition by offering a single framework that brings most health and safety prequalifications together under one umbrella. KiwiRail has been using Tōtika for nearly two years now. As soon as they signed up, the benefits started to flow for KiwiRail. “We could actually see that some of our suppliers were already listed” says Cat. This gave KiwiRail immediate assurance that those suppliers had all their prequalification requirements in place.',
    downloadLink: 'http://cms.chasnz.org/wp-content/uploads/2024/05/18198-Totika-KiwiRail-Case-Study-F.pdf',
  },
  {
    id: 't8',
    title: 'Tōtika - T8 case study',
    imageSrc: '/programmes/totika/case-study/t8.webp',
    description: 'With a focus on honesty, integrity, exceptional service, and reliably safe work sites for workers and the public, T8 are excited to use Tōtika to become further connected with the wider infrastructure industry. Tōtika has enabled T8 Traffic Control to realise financial and time savings within their business, along with observing many other benefits for their clients and the wider industry. We touched base with Christian Erick, T8’s HR/HSQE Manager, to learn more about their experience with Tōtika from a supplier’s perspective.',
    downloadLink: 'http://cms.chasnz.org/wp-content/uploads/2024/05/18198-Totika-T8-Case-Study-F.pdf',
  },
]

const Casestudies: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy>(caseStudies[0])

  return (
    <section className="case-studies pb-20 lg:pb-40">
      <div className="site-wrapper">
        <div className="section-text flex flex-col gap-6 w-full lg:w-4/5">
          <span className='text-base font-semibold text-[--totika-blue]'>Case Studies</span>
          <h4 className='text-2xl font-bold lg:text-6xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.</h4>
        </div>

        <div className="case-studies_tabs flex flex-col justify-between gap-16 mt-20">
          <div className="select-case-study w-full">
            <ul className='flex flex-col lg:flex-row gap-0 lg:gap-16'>
              {caseStudies.map(caseStudy => (
                <li 
                  key={caseStudy.id}
                  onClick={() => setSelectedCaseStudy(caseStudy)}
                  className={`py-5 text-xl font-semibold border-b-2 border-gray-30 w-full flex flex-row hover:text-[--totika-blue] items-center justify-between cursor-pointer ${selectedCaseStudy.id === caseStudy.id ? 'text-[--totika-blue]' : ''}`}
                >
                  {caseStudy.id.charAt(0).toUpperCase() + caseStudy.id.slice(1)}
                </li>
              ))}
            </ul>
          </div>
          <div className="case-study-content w-full flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-2/4">
              <Image src={selectedCaseStudy.imageSrc} alt="" width={800} height={800} className='w-full' />
            </div>
            <div className='w-full lg:w-2/4 flex flex-col gap-6'>
              <h4 className='text-3xl font-bold lg:text-5xl'>{selectedCaseStudy.title}</h4>
              <p>{selectedCaseStudy.description}</p>
              <a href={selectedCaseStudy.downloadLink} className='bg-[--totika-blue] py-3 px-6 rounded-full text-sm text-white font-semibold self-start'>Download Case Study</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Casestudies
