'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Info } from 'lucide-react'

// Define interface for team member data
interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string[] | string;
  image: string;
}

const Topics = () => {
  // State to track which modal is open (null means no modal is open)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Team member data
  const teamMembers: TeamMember[] = [
    {
      id: "sue",
      name: "Sue Bottrell",
      position: "Lawyer and Chartered Safety Professional, ContractorSAFE",
      bio: [
        "Sue Bottrell has worked in health, safety and worker's compensation rehabilitation for the past 20 years.",
        "Sue Bottrell is a practicing lawyer in safety and is a leading legal expert in the management of contractor safety. She was the first safety professional in Australia to become a Certified Chartered Generalist OHS Professional Member of the Australian Institute of Health and Safety."
      ],
      image: "/events/masterclass-on-contractor-health/sue.jpg"
    },
    {
      id: "rian",
      name: "Rian Engelbrecht",
      position: "Deputy Director Health and Safety, NZ Defence Force",
      bio: [
        "In the field of Health, Safety, Quality and Environment (HSQE) Rian is experienced in design, development, implementation, management and maintenance of integrated systems, legal compliance, auditing, investigations, and many more.",
        "Since 2007 Rian has worked full time in the Health and Safety industry, initially as HSQE Officer in a medium sized hydrocarbon waste management company, later as GM HSQE, managing health and safety on a national basis.",
        "Since 2013 Rian has been a Health and Safety trainer, consultant and auditor for a well-known H&S organisation, HSQE Advisor for an electrical contracting service provider, and Regional H&S Specialist and currently Deputy Director Health and Safety for the New Zealand Defence Force, at Defence Estate and Infrastructure."
      ],
      image: "/events/masterclass-on-contractor-health/rian.jpg"
    },
    {
      id: "fiona",
      name: "Fiona Jones",
      position: "Director, Health and Safety",
      bio: "Fiona is the Health, Safety and Wellbeing Manager for NZTA's Transport Services team who design, plan and deliver new infrastructure projects and also maintain New Zealand's transport network. With diverse experience in challenging risk environments in both New Zealand and the UK, Fiona has successfully supported organisations to build positive cultures by integrating safety into everyday practices. She has worked across a range of sectors including manufacturing, construction, transport, and health. She holds a Master of Health in Workplace Health and Safety from Victoria University of Wellington and is committed to uplifting capability and improving safety outcomes in the construction industry.",
      image: "/events/masterclass-on-contractor-health/fiona.jpg"
    },
    {
      id: "jodie",
      name: "Jodie Ryland",
      position: "Health and Safety Specialist",
      bio: "Jodie is the Senior Critical Risk Advisor for Infrastructure at New Zealand Transport Agency Waka Kotahi (NZTA), which is responsible for procuring, designing, constructing, and maintaining New Zealand's State Highway roading infrastructure and networks. In her role, she is responsible for ensuring a strategic and effective approach to improving safety outcomes through uplifting capability and driving organisational and industry level change.  Jodie holds 17 years of experience in the Australian health industry and expertise across civil construction and transport.",
      image: "/events/masterclass-on-contractor-health/jodie.jpg"
    },
    {
      id: "paaka",
      name: "Paaka Westrupp",
      position: "Safety Coordinator",
      bio: [
        "Paaka is the South Island Health & Safety Manager at Fulton Hogan, responsible for overall health and safety from Bluff to Picton, covering nearly 2000 employees in the South Island.",
        "Paaka comes from an operational background, having experience in a combined operational and health & safety role in the Western Australia's mines, as well as in manufacturing and vertical construction in New Zealand before joining Fulton Hogan in 2017.",
        "One of Paaka's passions is ensuring no life-changing harm occurs through effective critical risk management. Sprains and strains don't lead to fatal accidents; uncontrolled critical risks do. To achieve this, he advocates for simple and intuitive systems while prioritising staff engagement and positive H&S conversations. Paaka holds a Postgraduate Diploma in Occupational Health and Safety and is a current member of NZISM and HASANZ."
      ],
      image: "/events/masterclass-on-contractor-health/paaka.jpg"
    }
  ];

  // Function to open modal with member data
  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-12 lg:py-32 border-t">
        <div className="max-w-7xl mx-auto px-4">
            <h6 className='text-2xl md:text-3xl lg:text-4xl font-semibold max-w-4xl mx-auto text-left md:text-center'>Below are the <span className='text-[--primary-colour]'>key topics</span> being presented within the interactive sessions</h6>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-center py-12 lg:py-32">
                <div className='flex flex-col gap-6  w-full lg:w-2/4'>
                    <div className="flex flex-col">
                        <h6 className='text-xl md:text-2xl lg:text-3xl font-semibold text-[--primary-colour]'>Sue Bottrell</h6>
                        <span className='text-sm font-light text-gray-500'>Lawyer and Chartered Safety Professional, ContractorSAFE.</span>
                    </div>
                    <p className='text-base md:text-lg font-medium'>How to efficiently confirm the safety arrangements of contractors and meet your legal obligations.</p>
                    <ul className='flex flex-col gap-2 list-disc list-inside'>
                        <li>What is the duty under the act relating to contractor H&S management and who does it apply to?</li>
                        <li>Pre-qual - do we need it and could we be overcooking it?</li>
                        <li>What is overreach and how can it be avoided?</li>
                        <li>How can we reduce the burden on small businesses and sole traders?</li>
                    </ul>
                </div>
                <div 
                  className='w-full lg:w-1/2 relative overflow-hidden rounded-lg cursor-pointer group' 
                  onClick={() => openModal(teamMembers[0])}
                >
                    <Image src="/events/masterclass-on-contractor-health/sue.jpg" alt="Sue Bottrell" className='rounded-lg overflow-hidden' width={1000} height={1000} />
                    {/* Clickable indicator - always visible in bottom right */}
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-white bg-opacity-90 shadow-md rounded-full p-2 flex items-center gap-1">
                        <Info size={16} className="text-[--primary-colour]" />
                        <span className="text-sm font-medium">Read Bio</span>
                      </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-center py-12 lg:py-32 border-t">
                <div 
                  className='w-full lg:w-1/2 relative overflow-hidden rounded-lg cursor-pointer group'
                  onClick={() => openModal(teamMembers[1])}
                >
                    <Image src="/events/masterclass-on-contractor-health/rian.jpg" alt="Rian Engelbrecht" className='rounded-lg overflow-hidden' width={1000} height={1000} />
                    {/* Clickable indicator - always visible in bottom right */}
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-white bg-opacity-90 shadow-md rounded-full p-2 flex items-center gap-1">
                        <Info size={16} className="text-[--primary-colour]" />
                        <span className="text-sm font-medium">Read Bio</span>
                      </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6  w-full lg:w-2/4'>
                    <div className="flex flex-col">
                        <h6 className='text-xl md:text-2xl lg:text-3xl font-semibold text-[--primary-colour]'>Rian Engelbrecht</h6>
                        <span className='text-sm font-light text-gray-500'>Deputy Director Health and Safety, NZ Defence Force</span>
                    </div>
                    <p className='text-base md:text-lg font-medium'>Providing feedback to the industry on the NZDF Construction Health Environment and Safety Specifications (CHESS) framework, more than three years on from implementation, including some highlights and challenges we &#40;NZDF&#41; experienced to date, and the way forward.</p>
                </div>
            </div>

            <div className="flex flex-col gap-8 py-12 lg:py-32 border-t">
                <div className="flex flex-col gap-6 max-w-6xl">
                    <h6 className='text-xl md:text-2xl lg:text-3xl font-semibold text-[--primary-colour]'>Fiona Jones, Jodie Ryland, Paaka Westrupp</h6>
                    <ul className='flex flex-col gap-2 list-disc list-inside'>
                        <li>Drivers for change</li>
                        <li>Objectives to revised Contractor Expectations: Minimum health, safety, and wellbeing standards</li>
                        <li>Additions and exclusions</li>
                        <li>Engagement process</li>
                        <li>Lessons learnt</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 mt-12">
                    <div 
                      className="w-full relative object-cover overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => openModal(teamMembers[2])}
                    >
                        <Image src="/events/masterclass-on-contractor-health/fiona.jpg" alt="Fiona Jones" className='h-full' width={1000} height={1000} />
                        {/* Clickable indicator - always visible in bottom right */}
                        <div className="absolute bottom-3 right-3">
                          <div className="bg-white bg-opacity-90 shadow-md rounded-full p-2 flex items-center gap-1">
                            <Info size={16} className="text-[--primary-colour]" />
                            <span className="text-sm font-medium">Read Bio</span>
                          </div>
                        </div>
                    </div>
                    <div 
                      className="w-full relative object-cover overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => openModal(teamMembers[3])}
                    >
                        <Image src="/events/masterclass-on-contractor-health/jodie.jpg" alt="Jodie Ryland" className='h-full' width={1000} height={1000} />
                        {/* Clickable indicator - always visible in bottom right */}
                        <div className="absolute bottom-3 right-3">
                          <div className="bg-white bg-opacity-90 shadow-md rounded-full p-2 flex items-center gap-1">
                            <Info size={16} className="text-[--primary-colour]" />
                            <span className="text-sm font-medium">Read Bio</span>
                          </div>
                        </div>
                    </div>
                    <div 
                      className="w-full relative object-cover overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => openModal(teamMembers[4])}
                    >
                        <Image src="/events/masterclass-on-contractor-health/paaka.jpg" alt="Paaka Westrupp" className='h-full' width={1000} height={1000} />
                        {/* Clickable indicator - always visible in bottom right */}
                        <div className="absolute bottom-3 right-3">
                          <div className="bg-white bg-opacity-90 shadow-md rounded-full p-2 flex items-center gap-1">
                            <Info size={16} className="text-[--primary-colour]" />
                            <span className="text-sm font-medium">Read Bio</span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Modal Component */}
            {selectedMember && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Black backdrop */}
                <div 
                  className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"
                  onClick={closeModal}
                ></div>
                
                {/* Modal content */}
                <div className="bg-white rounded-lg z-10 max-w-2xl w-full overflow-hidden shadow-xl transform transition-all max-h-[70dvh] lg:max-h-[90dvh] overflow-y-auto">
                  <div className="flex flex-col">                    
                    {/* Content container with consistent padding */}
                    <div className="p-6">
                      {/* Image with proper containment */}
                      <div className="w-full relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden mb-6">
                        <Image 
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          className="object-cover"
                          fill
                        />
                      </div>
                      
                      {/* Text content */}
                      <h3 className="text-2xl md:text-3xl font-semibold text-[--primary-colour] mb-2">
                        {selectedMember.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        {selectedMember.position}
                      </p>
                      <div className="mt-2 space-y-4">
                        {Array.isArray(selectedMember.bio) ? (
                          // If bio is an array, map each paragraph to a <p> element
                          selectedMember.bio.map((paragraph, index) => (
                            <p key={index} className="text-sm font-light text-gray-800">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          // If bio is a string, render a single <p> element
                          <p className="text-sm font-light text-gray-800">
                            {selectedMember.bio}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
    </section>
  )
}

export default Topics