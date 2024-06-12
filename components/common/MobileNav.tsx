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

      <div className={`mobile-nav-dropdown fixed top-0 w-full h-screen bg-gray-50 z-[998] ${isNavActive ? 'active' : ''}`}>
        {/* Add your mobile navigation items here */}
      </div>
    </div>
  );
};

export default MobileNav;
