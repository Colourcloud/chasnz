'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Programmes from '../navigation/Programmes';
import Resources from '../navigation/Resources';
import About from '../navigation/About';
import Events from '../navigation/Events';
import Logo from '../common/Logo';
import { IoIosSearch } from "react-icons/io";

const Navigation = () => {

  const [logoSrc, setLogoSrc] = useState("/logo.svg");

  useEffect(() => {
    const navigationToggles = document.querySelectorAll('.navigation-toggle');
    const navigationContainer = document.querySelector('.navigation');
    const logo = document.querySelector('.nav-logo');
    const backdrop = document.querySelector('.navigation-backdrop');

    const handleHover = () => {
      setLogoSrc("/logo-green.svg"); // Change logo to green version
      navigationToggles.forEach(toggle => {
        toggle.classList.add('text-black');
      });
      if (navigationContainer) {
        navigationContainer.classList.add('bg-white');
      }
      if (logo) {
        logo.classList.add('logo-hover');
      }
      if (backdrop) {
        backdrop.classList.add('active');
      }
    };

    const handleHoverOut = () => {
      setLogoSrc("/logo.svg"); // Revert logo to original
      navigationToggles.forEach(toggle => {
        toggle.classList.remove('text-black');
      });
      if (navigationContainer) {
        navigationContainer.classList.remove('bg-white');
      }
      if (logo) {
        logo.classList.remove('logo-hover');
      }
      if (backdrop) {
        backdrop.classList.remove('active');
      }
    };

    navigationToggles.forEach(toggle => {
      toggle.addEventListener('mouseover', handleHover);
      toggle.addEventListener('mouseout', handleHoverOut);
    });

    // Check that backdrop is not null before adding the event listener
    if (backdrop) {
      backdrop.addEventListener('mouseover', handleHoverOut);
    }

    return () => {
      navigationToggles.forEach(toggle => {
        toggle.removeEventListener('mouseover', handleHover);
        toggle.removeEventListener('mouseout', handleHoverOut);
      });

      // Also check that backdrop is not null before removing the event listener
      if (backdrop) {
        backdrop.removeEventListener('mouseover', handleHoverOut);
      }
    };
  }, []);

  return (
    <>
    <div className="navigation-backdrop"></div>
    <div className='relative h-full'>
        <div className="navigation absolute top-0 z-50 w-full">
        <div className="site-wrapper">
            <div className="navigation-container h-28 w-full flex items-center flex-row justify-between">
                <div className="navigation-left">
                  <Link href="/" className='nav-logo'><Image src={logoSrc} height="50" width="225" alt="chas logo"></Image></Link>
                </div>
                <div className="navigation-right">
                    <ul className='flex flex-row text-white font-medium items-center'>
                        <li className='text-lg navigation-toggle' id="navigation-about">
                            <a href='#'>About</a>
                            <div className="dropdown-menu">
                                <About />
                            </div>
                        </li>
                        <li className='text-lg navigation-toggle' id="navigation-programmes">
                            <a href='#'>Programmes</a>
                            <div className="dropdown-menu">
                                <Programmes />
                            </div>
                        </li>
                        <li className='text-lg navigation-toggle' id="navigation-resources">
                            <a href='#'>Resources</a>
                            <div className="dropdown-menu">
                                <Resources />
                            </div>
                        </li>
                        <li className='text-lg navigation-toggle' id="navigation-events">
                            <a href='#'>Events</a>
                            <div className="dropdown-menu">
                                <Events />
                            </div>
                        </li>
                        <li className='text-lg navigation-toggle'><Link href="/contact/">Contact</Link></li>
                        <div className="navigation-search pl-8">
                          <button className='rounded-full bg-white py-[9px] px-5 flex flex-row gap-1 min-w-[225px] search-bar'>
                            <IoIosSearch className='text-gray-400 text-xl' />
                            <span className='text-sm text-gray-400 font-light'>Search our website</span>
                          </button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default Navigation;
