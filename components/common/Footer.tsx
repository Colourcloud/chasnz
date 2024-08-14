import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import HubSpotForm from './HubspotForm';

const Footer = () => {
  return (
    <section className="footer bg-white py-20 border-t border-gray-200">
        <div className="content-wrapper">
          <div className="footer-rows flex flex-col md:flex-row gap-24">
            <div className="footer-branding flex flex-col gap-6">
              <Image src="/logo-green.svg" alt="chasnz logo" width="250" height="150" />
              <Image src="/common/award.png" alt="award" width="175" height="150" />
              <p className='uppercase font-medium text-sm text-[#A1A1A1]'>In partnership with:</p>
              <Image src="/footer/acclogo.svg" alt="acc logo" width="250" height="200" />
              <p className='text-sm mt-12'>© CHASNZ 2024 - All Rights Reserved</p>
            </div>

            <div className="footer-links flex flex-col lg:flex-row flex-wrap gap-12 lg:gap-20">
              <div className="link-block">
                <h4 className='text-lg font-semibold py-2 border-b border-b-black'>Programmes</h4>
                <ul className='flex flex-col gap-3 mt-4'>
                  <li><Link href="/work-should-not-hurt/">Work Should Not Hurt</Link></li>
                  <li><Link href="/totika/">Tōtika</Link></li>
                  <li><Link href="/leadon/">Lead On</Link></li>
                  <li><Link href="/constructsafe/">ConstructSafe</Link></li>
                </ul>
              </div>

              <div className="link-block">
                <h4 className='text-lg font-semibold py-2 border-b border-b-black'>Learn</h4>
                <ul className='flex flex-col gap-3 mt-4'>
                  <li><Link href="/general-resources/">Resources</Link></li>
                  <li><Link href="/data-tools-and-insights/">Data Tools &amp; Insights</Link></li>
                </ul>
              </div>

              <div className="link-block">
                <h4 className='text-lg font-semibold py-2 border-b border-b-black'>Connect</h4>
                <ul className='flex flex-col gap-3 mt-4'>
                  <li><Link href="/about/">Meet the Team</Link></li>
                  <li><Link href="/events/">Events</Link></li>
                  <li><Link href="/news-and-updates/">News &amp; Updates</Link></li>
                  <li><Link href="/contact/">Contact us</Link></li>
                </ul>
              </div>

              <div className="link-block">
                <h4 className='text-lg font-semibold py-2 border-b border-b-black'>Follow us</h4>
                <ul className='flex flex-row gap-3 mt-4'>
                  <li className='social-icon'><Link href="https://www.linkedin.com/company/construction-health-and-safety-nz-chasnz?originalSubdomain=nz" target="_blank"><FaLinkedin className='text-4xl text-[#0077B5]'/></Link></li>
                  <li className='social-icon'><Link href="https://www.youtube.com/channel/UCddHM1cm6NXMe_JrxejeCrw" target="_blank"><FaYoutube className='text-4xl text-[#FF0000]'/></Link></li>
                </ul>
                <div className="subscribe-footer mt-8 flex flex-col gap-2">
                  <div>
                    <HubSpotForm portalId="40083784" formId="da52cfc3-874f-491c-b773-e2b7baaee5c9" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </section>
  )
}

export default Footer