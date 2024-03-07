import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  return (
    <div className="navigation fixed top-0 z-50 w-full">
        <div className="site-wrapper">
            <div className="navigation-container h-28 w-full flex items-center flex-row justify-between">
                <div className="navigation-left">
                    <Image src="logo.svg" alt="Chasnz Logo" height='80' width='175' ></Image>
                </div>
                <div className="navigation-right">
                    <ul className='flex flex-row gap-16 text-white font-medium items-center'>
                        <li className='text-lg'>About</li>
                        <li className='text-lg'>Programmes</li>
                        <li className='text-lg'>Resources</li>
                        <li className='text-lg'>Connect</li>
                        <li className='text-lg'>Initiatives</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation