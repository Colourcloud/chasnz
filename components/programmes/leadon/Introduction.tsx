import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className="programme-introduction py-20 pb-20 lg:pb-32 bg-white border-b-2 border-gray-200">
        <div className="content-wrapper">
            <div className="introduction-container flex flex-col lg:flex-row gap-16 lg:gap-0">
                <div className="programme-navigation w-full lg:w-[30%]">
                    <h4 className='text-black text-2xl font-semibold'>Leadon related content:</h4>
                    <ul className='flex flex-col gap-6 underline text-[--leadon-orange] mt-6 text-lg'>
                        <li><Link href="#">Information for Managment</Link></li>
                        <li><Link href="#">Register for Lead On.</Link></li>
                    </ul>
                </div>
                <div className="programme-text flex flex-col gap-10 w-full lg:w-[70%] ml-0 lg:ml-[8rem]">
                    <div className="text-block flex flex-col gap-6">
                        <h4 className='font-bold text-4xl lg:text-6xl'>Introduction to Leadon</h4>
                        <p className='text-[--leadon-orange] text-xl lg:text-2xl font-semibold'>Frontline leaders are the first line of protection and a last line of defence on our worksites.</p>
                        <p className='text-[--text-colour]'>CHASNZ is working with industry to develop our frontline leaders to build the capacity and capabilities that our frontline need to lead the safe execution of work. The Lead On. programme recognises the key role frontline leaders have in making a difference with how work is done and provides a framework for supervisors to develop leadership skills and capability for more effective onsite safety management. The programme is designed to have minimal impact on the working day, with only three hours a week required with the tutor and learning groups. CHASNZ is also sponsoring the cost of the programme. We are inviting supervisors from across the NZ construction sector to be part of our next Lead On intake starting on the 28th of February 2024. This is a free 11 week online course valued at $3000 for successful applicants.</p>
                    </div>
                    <div className="text-block flex flex-col gap-6">
                        <p className='text-black text-xl lg:text-2xl font-semibold'>The fine print</p>
                        <p className='text-[--text-colour]'>The programme is called Safety Leadership for Supervisors & Managers and is run by Safety Futures. It is aimed at those who are already leaders who want to take the next step, develop their careers, and grow their leadership skills, or people in your team that you see potential in and want to encourage their development. Course participants will work as part of a group from across New Zealand, connecting with other supervisors around the world. <a href="https://www.safetyfutures.com/program/safety-leadership-for-supervisors-and-managers/" target="_blank" className='text-[--primary-colour]'>Check it out here</a></p>
                    </div>
                    <div className="text-block flex flex-col gap-6">
                        <p className='text-[--leadon-orange] text-xl lg:text-2xl font-semibold'>Register as a Supervisor or Frontline Leader.</p>
                        <p className='text-[--text-colour]'>Supervisors will be interacting with others online, have a designated tutor available for offline support, and complete workplace-based learning. The programme combines self-paced, focused online content with interactive sessions and workplace “missions.” It&apos;s flexible and in short bursts &#45; so they aren&apos;t stuck in a classroom for days or taken away from work. There are also exciting benefits to being on a course with people from around the world. We know our industry has strong preconceptions about online training, and we don&apos;t want people to be turned off by this approach.</p>
                    </div>
                    <div className="text-block flex flex-col gap-6">
                        <p className='text-black text-xl lg:text-2xl font-semibold'>For your frontline leader to successfully participate in this trial, they will be:</p>
                        <ul className='text-lg text-[--text-colour] leading-8 list-disc pl-4'>
                            <li>In a frontline leadership role (they can be brand new or have lots of experience).</li>
                            <li>A champion for good work.</li>
                            <li>Willing to share learnings with CHASNZ, their team and organisation once the course is complete.</li>
                            <li>Most importantly, fully supported by you!</li>
                        </ul>
                    </div>
                    <div className="text-block flex flex-col gap-6">
                        <p className='text-black text-xl lg:text-2xl font-semibold'>Register yourself</p>
                        <p className='text-[--text-colour]'>This learning programme will support and recognise your impact as a frontline leader in making a difference on how work is done by providing a framework for supervisors to develop leadership skills and capability for more effective onsite safety management.</p>
                    </div>
                    <div className="text-block flex flex-col gap-6">
                        <p className='text-black text-xl lg:text-2xl font-semibold'>Does this sound like you?</p>
                        <p className='text-[--text-colour]'>To ensure your success, you will be interacting with others online, have a designated tutor available for offline support, and complete workplace-based learning. It combines self-paced, focused online content with interactive sessions and workplace “missions.” It&apos;s flexible and in short bursts &#45; so you aren&apos;t stuck in a classroom for days or taken away from work. There are also exciting benefits to being on a course with people from around the world.</p>
                        <p className='text-[--text-colour]'>Put your hand up to work with us on this important programme. Professional development opportunities like this are gold dust, and spaces are limited. Get in touch with us today to talk through any questions you have about the course or need help getting your manager to support you in this.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction