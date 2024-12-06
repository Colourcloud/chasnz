'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProgrammesNew from '../navigation/Programmes-new';
import Resources from '../navigation/Resources';
import About from '../navigation/About';
import { IoIosSearch } from "react-icons/io";
import Searchbox from './Searchbox';
import Contact from '../navigation/Contact';
import Events from '../navigation/Events';

const Navigation = () => {

  const [logoSrc, setLogoSrc] = useState("/logo.svg");

  useEffect(() => {
    const navigationToggles = document.querySelectorAll('.navigation-toggle');
    const navigationContainer = document.querySelector('.navigation');
    const logo = document.querySelector('.nav-logo');
    const backdrop = document.querySelector('.navigation-backdrop');

    const handleHover = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      // if (target.id === 'navigation-events' || target.id === 'navigation-contact') {
      //   return; // Skip the hover effect for Events and Contact
      // }
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

    const handleHoverOut = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      // if (target.id === 'navigation-events' || target.id === 'navigation-contact') {
      //   return; // Skip the hover out effect for Events and Contact
      // }
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
      <div className='relative h-full hidden invisible pointer-events-none xl:visible xl:block xl:pointer-events-auto'>
        <div className="navigation absolute top-0 z-50 w-full">
          <div className="site-wrapper">
            <div className="navigation-container h-28 w-full flex items-center flex-row justify-between">
              <div className="navigation-left">
                <Link href="/" className='nav-logo'>
                  <Image src={logoSrc} height="50" width="250" alt="chas logo"></Image>
                </Link>
              </div>
              <div className="navigation-right">
                <ul className='flex flex-row text-white font-medium items-center'>
                  <li className='text-base navigation-toggle' id="navigation-about">
                    <button>About</button>
                    <div className="dropdown-menu">
                      <About />
                    </div>
                  </li>
                  <li className='text-base navigation-toggle' id="navigation-programmes">
                    <button>Programmes</button>
                    <div className="dropdown-menu">
                      <ProgrammesNew />
                    </div>
                  </li>
                  <li className='text-base navigation-toggle' id="navigation-resources">
                    <button>Resources</button>
                    <div className="dropdown-menu">
                      <Resources />
                    </div>
                  </li>
                  <li className='text-base navigation-toggle' id="navigation-events">
                    <button>Webinars/Events</button>
                    <div className="dropdown-menu">
                      <Events />
                    </div>
                  </li>
                  <li className='text-base navigation-toggle' id="navigation-events">
                    <Link href="/newsroom">Newsroom</Link>
                  </li>
                  <li className='text-base navigation-toggle' id="navigation-contact">
                    <button>Contact</button>
                    <div className="dropdown-menu">
                      <Contact />
                    </div>
                  </li>
                  <Searchbox />
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
