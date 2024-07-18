'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

const MobileNav: React.FC = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div className="mobile-nav-container xl:hidden">
      <div className="mobile-navigation fixed top-0 w-full bg-white h-16 md:h-20 z-[999]">
        <div className="site-wrapper h-full">
          <div className="mobile-nav-container flex flex-row justify-between items-center h-full">
            <div className="navigation-left">
              <Link href="/" className='nav-logo'>
                <Image src="/logo-green.svg" height="50" width="175" alt="chas logo" />
              </Link>
            </div>
            <div className="mobile-toggle flex">
              <button onClick={toggleNav}>
                <IoMenu className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-nav-dropdown fixed top-0 w-full h-screen overflow-y-scroll bg-gray-50 z-[998] ${isNavActive ? 'active' : ''}`}>
        <div className="mobile-nav-content mt-20">
          <div className="site-wrapper">
            <div className="mobile-nav-layout flex flex-col">
              
              <div className="nav-block flex flex-col gap-4 border-b border-gray-300 py-8">
                <Image src="/navigation/programmes/constructsafe-banner.jpg" alt="" className='' width={550} height={200} />
                <h6 className='black text-lg font-medium'>Learn more about the CHASNZ team:</h6>
                <ul className='flex flex-col gap-4'>
                  <li className='text-gray-700 font-light hover:text-[--primary-colour] py-1'><a href="">About CHASNZ</a></li>
                  <li className='text-gray-700 font-light hover:text-[--primary-colour] py-1'><a href="">Board Members</a></li>
                  <li className='text-gray-700 font-light hover:text-[--primary-colour] py-1'><a href="">Meet the Team</a></li>
                  <li className='text-gray-700 font-light hover:text-[--primary-colour] py-1'><a href="">News &amp; Updates</a></li>
                </ul>
              </div>


                <div className="nav-block flex flex-col gap-4 border-b border-gray-300 py-8">
                  <Image src="/navigation/programmes/constructsafe-banner.jpg" alt="" className='' width={550} height={200} />
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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
