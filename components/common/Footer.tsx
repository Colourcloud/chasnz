import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="footer bg-white py-20">
        <div className="content-wrapper">
          <div className="footer-rows flex flex-col md:flex-row gap-24">
            <div className="footer-branding flex flex-col gap-6">
              <Image src="/footer/chaslogo.svg" alt="chasnz logo" width="250" height="150" />
              <p className='uppercase font-medium text-sm text-[#A1A1A1]'>In partnership with:</p>
              <Image src="/footer/acclogo.png" alt="acc logo" width="200" height="200" />
              <p className='text-sm mt-12'>© CHASNZ 2023 - All Rights Reserved</p>
            </div>

            <div className="footer-links flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
              <div className="link-block">
                <h4 className='text-lg font-semibold py-2 border-b border-b-black'>Programmes</h4>
                <ul className='flex flex-col gap-3 mt-4'>
                  <li><Link href="/work-should-not-hurt/">Work Should Not Hurt</Link></li>
                  <li><Link href="/totika/">Tōtika</Link></li>
                  <li><Link href="/leadon/">Lead On.</Link></li>
                  <li><Link href="/constructsafe/">ConstructSafe</Link></li>
                </ul>
              </div>

              <div className="link-block">
                <h4 className='text-lg font-semibold py-2 border-b border-b-black'>Initiatives</h4>
                <ul className='flex flex-col gap-3 mt-4'>
                  <li>Energy Wheel</li>
                </ul>
              </div>

              <div className="link-block">
                <h4 className='text-lg font-semibold py-2 border-b border-b-black'>Learn</h4>
                <ul className='flex flex-col gap-3 mt-4'>
                  <li>Resources</li>
                  <li>Data Tools &amp; Insights</li>
                </ul>
              </div>

              <div className="link-block">
                <h4 className='text-lg font-semibold py-2 border-b border-b-black'>Connect</h4>
                <ul className='flex flex-col gap-3 mt-4'>
                  <li><Link href="/about/">Meet the Team</Link></li>
                  <li><Link href="/events/">Events</Link></li>
                  <li>News &amp; Updates</li>
                  <li>Contact us</li>
                </ul>
              </div>

              <div className="link-block">
                <h4 className='text-lg font-semibold py-2 border-b border-b-black'>Follow us</h4>
                <ul className='flex flex-row gap-3 mt-4'>
                  <li className='social-icon'><Link href="https://www.facebook.com/CHASNZ1/" target="_blank"><FaFacebook className='text-2xl'/></Link></li>
                  <li className='social-icon'><Link href="https://www.linkedin.com/company/construction-health-and-safety-nz-chasnz?originalSubdomain=nz" target="_blank"><FaLinkedin className='text-2xl'/></Link></li>
                  <li className='social-icon'><Link href="https://www.youtube.com/channel/UCddHM1cm6NXMe_JrxejeCrw" target="_blank"><FaYoutube className='text-2xl'/></Link></li>
                </ul>
                <div className="subscribe-footer mt-4">
                  <p className='text-sm'>Subscribe:</p>
                </div>
              </div>

            </div>
          </div>
        </div>
    </section>
  )
}

export default Footer