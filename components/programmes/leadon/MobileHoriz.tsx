'use client'

import React from 'react';
import Image from 'next/image';
import { FaArrowCircleRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface ScrollItem {
  id: number;
  title: string;
  image: string;
  description: string[];
  list?: string[];
}

interface MobileHorizontalScrollProps {
  items?: ScrollItem[];
}

const MobileHorizontalScroll: React.FC<MobileHorizontalScrollProps> = ({
  items = [],
}) => {
  const defaultItems: ScrollItem[] = items.length ? items : [
    {
      id: 1,
      title: 'Capturing the journey of the Lead On trial',
      image: '/programmes/leadon/slides/introduction.jpg',
      description: [
        'Ngā mihi to the people who told me about their experiences of the Lead On programme. It was an altruistic endeavour for those very busy people to give up their time to speak about this evaluation. Thank you kindly for the gift of your time, your candid thoughts and your expert views.',
        'Special thanks to David O’Connor from the Learning Wave who took the time to bounce ideas back and forth.'
      ]
    },
    {
      id: 2,
      title: 'Introduction',
      image: '/programmes/leadon/slides/introduction-2.jpg',
      description: [
        'Safety performance in New Zealand’s construction industry continues to be worse than in other developed countries. Safety performance is a multi-factorial issue, and developing supervisors as leaders is a key element in enhancing safety performance.',
        'To explore new ways to improve leadership in Aotearoa, CHASNZ designed a trial programme involving construction leadership courses. CHASNZ wanted to start small, learn, then scale up.',
        'The aim of the trial was to run some courses, then gain insights and gather direct feedback from frontline supervisors and managers about what they want and need to learn, how they found the courses and what works to enhance their leadership capabilities.'
      ]
    },
    {
      id: 3,
      title: 'The Concept',
      image: '/programmes/leadon/slides/concept.jpg',
      description: [
        'The journey began with a spark of an idea, influenced by the success of the “Black Hat” concept that was at play during the Olympic Development Authority’s (ODA) massive building project for the 2012 London Olympics. The project had a remarkably low injury rate and zero fatalities. The ODA reflected on their learnings in a now-archived document and website.2 They highlighted that the project was organised, well-planned and expertly executed with an emphasis on strong health and safety leadership. A black hard hat was worn by the construction health and safety leaders during the build, making this outstanding leadership visible.',
      ]
    },
    {
      id: 4,
      title: 'Key takeaways from the chasnz evaluation in a nutshell',
      image: '/programmes/leadon/slides/evaluation.jpg',
      description: [
        'The CHASNZ team conducted their own evaluation during and after the pilot programme’s completion. CHASNZ wanted to understand the logistical aspects of attending the course as well as the learning content. All 19 participants successfully completed the programme.',
        'The data was gathered via in-depth interviews with course attendees and their managers. Also, self- assessment pre and post surveys were completed with managers and participants.'
      ],
    },
    {
      id: 5,
      title: 'Lessons learned',
      image: '/programmes/leadon/slides/lesson.jpg',
      description: [
        'As others have described in this evaluation, these leaders noted in hindsight that this style of course may not be for everyone – the style of learning needs to match a learner’s aptitude and be at the right time in their leadership development.',
        'However, one leader also commented that choosing some team members over others creates an unequal environment where some may get ahead in their skills and others don’t. Nevertheless, behaviour changed was noticed and embedded'
      ]
    },
  ];

  return (
    <div className="">
      <div className='bg-[#FF6600] py-12 w-full overflow-x-auto  relative md:hidden md:invisible'>
      <div className="site-wrapper">
        <div className="flex flex-col gap-6">
          <h6 className='text-white text-3xl md:text-5xl lg:text-6xl font-bold'>View The Report</h6>
          <p className='text-white text-base lg:text-lg font-light max-w-5xl'>The below report captures the journey of CHASNZ&apos;s pilot programme called Lead On. The report provides more evidence from an external and refreshed view of the programmes successes and challenges. The document brings together the initial evaluation completed by CHASNZ and builds on those views by speaking again directly with some learners and their managers about how they&apos;ve embedded the learnings from the programme.</p>
          <Link href="#" className='text-[#FF6600] text-sm font-semibold py-3 px-6 bg-white self-start'>Download The Report</Link>
        </div>
      </div>
      </div>
      <div className="w-full overflow-x-auto  relative md:hidden md:invisible bg-[#FF6600]">
      
      <span className='w-full text-sm text-white font-semibold pr-6 flex items-center justify-end gap-2'>Swipe to view more <FaArrowCircleRight /></span>
    <div className="flex w-full">
      {defaultItems.map((item) => (
        <div
          key={item.id}
          className="flex-shrink-0 w-full p-4"
        >
          <div className="flex flex-col bg-white overflow-hidden">
            <div className="w-full h-[30vh] relative">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover"
                fill
                sizes="100vw"
              />
            </div>
            
            <div className="p-6 overflow-y-auto">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              
              <div className="space-y-4">
                {item.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 text-sm">
                    {paragraph}
                  </p>
                ))}
                {item.list && item.list.length > 0 && (
                  <ul className="list-disc pl-4 flex flex-col gap-2">
                    {item.list.map((listItem, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

    </div>
    
  );
};

export default MobileHorizontalScroll; 