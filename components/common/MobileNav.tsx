import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";

const MobileNav = () => {
  return (
    <div className="mobile-navigation xl:hidden fixed top-0 w-full bg-white h-16 md:h-20 z-[999]">
        <div className="site-wrapper h-full">
            <div className="mobile-nav-container flex flex-row justify-between items-center h-full">
                <div className="navigation-left">
                  <Link href="/" className='nav-logo'><Image src="/logo-green.svg" height="50" width="175" alt="chas logo"></Image></Link>
                </div>
                <div className="mobile-toggle flex">
                  <button><IoMenu className='text-3xl' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileNav