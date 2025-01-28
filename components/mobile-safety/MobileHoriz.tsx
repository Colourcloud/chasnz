'use client'

import React from 'react';
import Image from 'next/image';
import { FaArrowCircleRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

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
      title: 'Mobile Plant Safety in Construction',
      image: '/mobile-safety/slide-images/cover.jpg',
      description: [
        'CHASNZ and industry; working together to achieve consistent site access standards and safer worksites for everyone.',
        'When considering the question of what is reasonably practicable in the context of the HSWA the regulator and courts will apply relevant legislation, approved codes of practice',
        'CHASNZ is seen by WorkSafe NZ as a provider of industry guidance for the construction industry.'
      ]
    },
    {
      id: 2,
      title: 'Introduction',
      image: '/mobile-safety/slide-images/introduction.jpg',
      description: [
        'The use of Mobile Plant in construction is common and carries with it significant hazards that can affect both operators of Mobile Plant and those working around them.',
        'Under the Health and Safety at Work Act 2015, duties are placed on those who control work sites, those who own mobile plant, and those who operate it.',
        'This guide has been created to assist these parties in planning, selecting, operating, maintaining and responsibly retiring mobile plant in a construction setting.'
      ]
    },
    {
      id: 3,
      title: 'Types of Mobile Plant',
      image: '/mobile-safety/slide-images/types-of-mobile.jpg',
      description: [
        'Plant includes any vehicle, machinery, equipment, tool, vessel and/or aircraft etc. Examples in construction include cranes and hoists, cutting and grinding equipment, compressors, and earthmoving and excavation machinery.',
        'Mobile Plant is a sub sector of this group and includes a variety of machines, including common construction equipment like:'
      ],
      list: [
        'Asphalt pavers',
        'Mobile cranes',
        'Concrete pump trucks',
        'Mobile elevated work platforms',
        'Excavators',
        'Rollers',
        'Loaders',
        'Telehandlers'
      ]
    },
    {
      id: 4,
      title: 'Machine design safety considerations',
      image: '/mobile-safety/telehandler.jpg',
      description: [
        'To best understand this, your company should undertake a risk assessment to determine the best type of machine, or machines to suit the needs of the expected work activity.',
        'When importing machinery, the buyer should verify that the manufacturing standard of the machine meets the current New Zealand, or International standard for manufacture. These can be found by visiting www.standards.govt.nz.',
        'As part of a risk assessment process, particularly when considering a specific machine that is not newly manufactured, consideration must be given to the safety features of the machine in comparison to newly manufactured equipment.'
      ]
    },
    {
      id: 5,
      title: 'Plant safety considerations for those controlling work areas',
      image: '/mobile-safety/slide-images/plant-safety.jpg',
      description: [
        'The Act places duties on those who control work areas. Often in construction these are not the companies who operate mobile plant within the work site.',
        'Those who control work areas are not always competent in assessing the requirement of mobile plant to undertake a specific task, and so there are cross over duties between the work area controller and the machine operator (or mobile plant owner).',
        'Prior to selecting types of mobile plant for use in a work area, steps should be taken to ensure that any mobile plant in a work area is firstly safe to be operated.'
      ]
    },
  ];

  return (
    <div className="w-full overflow-x-auto mt-12 relative md:hidden md:invisible">
        <span className='w-full text-sm text-[--primary-colour] font-semibold pr-6 flex items-center justify-end gap-2'>Swipe to view more <FaArrowCircleRight /></span>
      <div className="flex w-full">
        {defaultItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-full p-4"
          >
            <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
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
  );
};

export default MobileHorizontalScroll; 