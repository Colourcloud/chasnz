'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';
import { IoSearch } from "react-icons/io5";
import Searchbox from './SearchboxMobile';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const MobileNav: React.FC = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  useEffect(() => {
    if (isNavActive) {
      document.body.style.position = 'fixed';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    }
  }, [isNavActive]);

  return (
    <div className="mobile-nav-container xl:hidden">
      <div className="mobile-navigation fixed top-0 w-full bg-white h-16 md:h-20 z-[999]">
        <div className="site-wrapper h-full">
          <div className="mobile-nav-container flex flex-row justify-between items-center h-full">
            <div className="mobile-toggle flex">
              <button onClick={toggleNav}>
                <IoMenu className="text-3xl" />
              </button>
            </div>
            <div className="navigation-left">
              <Link href="/" className='nav-logo'>
                <Image src="/logo-green.svg" height="50" width="175" alt="chas logo" />
              </Link>
            </div>
            <Searchbox />
          </div>
        </div>
      </div>

      <div className={`mobile-nav-dropdown fixed top-0 w-full h-screen overflow-y-scroll bg-gray-50 z-[998] ${isNavActive ? 'active' : ''}`}>
        <div className="mobile-nav-content mt-20 pb-20">
          <div className="site-wrapper">
            <div className="mobile-nav-layout flex flex-col">

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Learn more about the CHASNZ team:</AccordionTrigger>
                <AccordionContent>
                    <div className="nav-block flex flex-col gap-4 py-4">
                    
                    <ul className='flex flex-col gap-4'>
                        <li><a href="/about" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>About CHASNZ</a></li>
                        <li><a href="/about#board-members" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Board Members</a></li>
                        <li><a href="/about#team-members" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Meet the Team</a></li>
                        <li><a href="/news-and-updates/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>News &amp; Updates</a></li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>Programmes</AccordionTrigger>
                <AccordionContent>
                <div className="nav-block flex flex-col gap-4 py-4">
                  
                  <ul className='flex flex-col gap-10'>
                    <li className='programmes-section'>
                      <a href="/work-should-not-hurt/" className='text-lg font-medium underline'>
                        Work Should Not Hurt
                      </a>
                      <ul className='flex flex-col gap-4 mt-4'>
                        <li><a href="/work-should-not-hurt#trades" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Trade specific information</a></li>
                        <li><a href="/work-should-not-hurt/get-involved" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Get Involved</a></li>
                      </ul>
                    </li>

                    <li className='programmes-section'>
                      <a href="/totika/" className='text-lg font-medium underline'>
                        Tōtika
                      </a>
                      <ul className='flex flex-col gap-4 mt-4'>
                        <li><a href="/totika/contractor-suppliers" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Contractors and suppliers</a></li>
                        <li><a href="/totika/#case-studies" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Case Studies</a></li>
                        <li><a href="https://www.totika.org/totika/signup" target="_blank" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Register for the Tōtika scheme</a></li>
                        <li><a href="https://www.totika.org/totika-scheme-scheme-resources" target="_blank" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Tōtika scheme resources</a></li>
                      </ul>
                    </li>

                    <li className='programmes-section'>
                      <a href="/leadon/" className='text-lg font-medium underline'>
                        Lead On
                      </a>
                      <ul className='flex flex-col gap-4 mt-4'>
                        <li><a href="/leadon/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Information for Managment</a></li>
                      </ul>
                    </li>

                    <li className='programmes-section'>
                      <a href="/constructsafe/" className='text-lg font-medium underline'>
                        ConstructSafe
                      </a>
                      <ul className='flex flex-col gap-4 mt-4'>
                        <li><a href="/constructsafe/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Book an assessment</a></li>
                        <li><a href="/constructsafe#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Resources</a></li>
                      </ul>
                    </li>
                    
                  </ul>
                </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
              
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger>Resources</AccordionTrigger>
                <AccordionContent>
                    <div className="nav-block flex flex-col gap-4 py-4">
                    
                    <ul className='flex flex-col gap-10'>
                        <li className='resource-section'>
                          <a href="/general-resources/" className='text-lg font-medium underline'>
                            General Resources
                          </a>
                          <ul className='flex flex-col gap-4 mt-4'>
                            <li><a href="/constructsafe#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>ConstructSafe</a></li>
                            <li><a href="/energy-wheel/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Energy Wheel</a></li>
                          </ul>
                        </li>

                        <li className='resource-section'>
                          <a href="/work-should-not-hurt/" className='text-lg font-medium underline'>
                            Work Should Not Hurt
                          </a>
                          <ul className='flex flex-col gap-4 mt-4'>
                          <li><a href="/work-should-not-hurt/trades/brick-blocklaying#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Brick & Blocklaying</a></li>
                              <li><a href="/work-should-not-hurt/trades/building#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Building</a></li>
                              <li><a href="/work-should-not-hurt/trades/concrete#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Concrete Services</a></li>
                              <li><a href="/work-should-not-hurt/trades/electricians#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Electricians</a></li>
                              <li><a href="/work-should-not-hurt/trades/flooring#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Flooring</a></li>
                              <li><a href="/work-should-not-hurt/trades/glazing#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Glazing</a></li>
                              <li><a href="/work-should-not-hurt/trades/manage-support#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Management & Support</a></li>
                              <li><a href="/work-should-not-hurt/trades/painting#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Painting</a></li>
                              <li><a href="/work-should-not-hurt/trades/plumbing-gasfitting-drainlaying#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Plumbing, Gasfitting & Drainlaying</a></li>
                              <li><a href="/work-should-not-hurt/trades/roofing#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Roofing</a></li>
                              <li><a href="/work-should-not-hurt/trades/scaffolding#resources" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Scaffolding</a></li>
                          </ul>
                        </li>

                        <li className='resource-section'>
                          <a href="/data-tools-and-insights/" className='text-lg font-medium underline'>
                            Data Tools &amp; Insights
                          </a>
                          <ul className='flex flex-col gap-4 mt-4'>
                            <li><a href="/data-tools-and-insights/measuring-health-and-safety/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Measuring Health & Safety</a></li>
                            <li><a href="/analysis-insights/" className='text-gray-700 font-light hover:text-[--primary-colour] py-1'>Analysis & Insights</a></li>
                          </ul>
                        </li>

                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <a href="/events/" className='flex flex-1 items-center justify-between py-4 font-medium border-b'>Webinars</a>
            <a href="/contact/" className='flex flex-1 items-center justify-between py-4 font-medium border-b'>Contact</a>
            
            </div>
          </div>
        </div>
        <div className="dropdown-footer w-full py-6 border-t">
                <div className="site-wrapper flex flex-row gap-2 items-center justify-start">
                    <p className='text-sm font-light'>Follow us on our socials:</p>
                    <ul className='flex flex-row gap-3 items-center'>
                        <li className='social-icon'><Link href="https://www.linkedin.com/company/construction-health-and-safety-nz-chasnz?originalSubdomain=nz" target="_blank"><FaLinkedin className='text-2xl text-[#0077B5]'/></Link></li>
                        <li className='social-icon'><Link href="https://www.youtube.com/channel/UCddHM1cm6NXMe_JrxejeCrw" target="_blank"><FaYoutube className='text-2xl text-[#FF0000]'/></Link></li>
                    </ul>
                </div>
    </div>
      </div>
    </div>
  );
};

export default MobileNav;
