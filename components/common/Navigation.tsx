'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Programmes from '../navigation/Programmes';
import Resources from '../navigation/Resources';
import About from '../navigation/About';
import Logo from '../common/Logo';

const Navigation = () => {

  useEffect(() => {
    const navigationToggles = document.querySelectorAll('.navigation-toggle');
    const navigationContainer = document.querySelector('.navigation');
    const logo = document.querySelector('.nav-logo');
    const backdrop = document.querySelector('.navigation-backdrop');

    const handleHover = () => {
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
                  <Link href="/" className='nav-logo'><Logo /></Link>
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
                        <li className='text-lg navigation-toggle' id="navigation-connect">Events</li>
                        <li className='text-lg navigation-toggle'>Contact</li>
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
