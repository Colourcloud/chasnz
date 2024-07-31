'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SectionContent {
  title: string;
  paragraphs: string[];
  images: string[];
  links: { href: string; text: string }[];
}

interface SectionContents {
  [key: string]: SectionContent;
}

const Introduction: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('trades');

  const sectionContent: SectionContents = {
    buyers: {
      title: 'We help construction service buyers',
      paragraphs: [
        'Individuals involved in procurement, project management, health and safety (H&S) professionals, contract managers, designers, engineers, and other related roles.',
        'It also encompasses building and infrastructure owners and providers.',
      ],
      images: [
        '/home/service-image-1.jpg',
        '/home/service-image-2.jpg',
        '/home/service-image-3.jpg',
      ],
      links: [
        { href: '/general-resources/', text: 'General Resources' },
        { href: '/work-should-not-hurt/', text: 'Work Should Not Hurt' },
        { href: '/events/', text: 'Events' },
      ],
    },
    safety: {
      title: 'We help people who work in safety',
      paragraphs: [
        'Individuals working in safety roles, ranging from Health & Safety (H&S) representatives to directors of safety, as well as those who handle safety duties informally.',
      ],
      images: [
        '/home/safety-image-1.jpg',
        '/home/safety-image-2.jpg',
        '/home/safety-image-3.jpg',
      ],
      links: [
        { href: '/general-resources/', text: 'General Resources' },
        { href: '/work-should-not-hurt/', text: 'Work Should Not Hurt' },
        { href: '/events/', text: 'Events' },
      ],
    },
    trades: {
      title: 'We help trades people',
      paragraphs: [
        'Tradies are a diverse group of skilled workers essential to the functioning and development of the country\'s infrastructure and economy.',
        'We help tradies all around the country by providing curated learning material and resources to help you get site-ready and remain safe in your workplace.',
      ],
      images: [
        '/home/trade-image-1.jpg',
        '/home/trade-image-2.jpg',
        '/home/trade-image-3.jpg',
      ],
      links: [
        { href: '/general-resources/', text: 'General Resources' },
        { href: '/work-should-not-hurt/', text: 'Work Should Not Hurt' },
        { href: '/events/', text: 'Events' },
      ],
    },
    business: {
      title: 'We help small to medium business owners',
      paragraphs: [
        'Small to medium business owners (not dedicated safety professionals). These are organizations small enough that the boss often works hands-on or will take on practical tasks.',
      ],
      images: [
        '/home/business-image-1.jpg',
        '/home/business-image-2.jpg',
        '/home/business-image-3.jpg',
      ],
      links: [
        { href: '/general-resources/', text: 'General Resources' },
        { href: '/work-should-not-hurt/', text: 'Work Should Not Hurt' },
        { href: '/events/', text: 'Events' },
      ],
    },
  };

  const renderContent = () => {
    const content = sectionContent[selectedSection];
    return (
      <div className="information-container h-full flex justify-start flex-col lg:flex-row gap-10 lg:gap-20 lg:py-16">
        <div className="information-text text-white w-full lg:w-2/4 flex flex-col gap-10 self-center">

        <div className="select-group">
          <div className="section-text w-full text-left mx-auto flex flex-col gap-2">
            <h4 className='text-2xl font-semibold lg:text-3xl text-[--primary-colour]'>Who do we help</h4>
            <p className='text-base'>Click below to find out who we help</p>
          </div>

          <div className="section-toggles-container grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6 max-w-[900px] mt-12">
            <div
              className={`border-b border-t border-gray-600 md:border-none cursor-pointer section-toggle flex flex-row md:flex-col gap-3 items-center ${selectedSection === 'buyers' ? 'green-filter' : ''}`}
              onClick={() => setSelectedSection('buyers')}
            >
              <div className="toggle-icon min-h-20 flex items-center justify-center">
                <Image src="/home/service-buyers.svg" alt="" width={50} height={50} className="w-3/5" />
              </div>
              <span className='text-sm text-gray-400 text-left md:text-center w-full'>
                Construction Service Buyers
              </span>
            </div>

            <div
              className={`border-b border-gray-600 md:border-none cursor-pointer section-toggle flex flex-row md:flex-col gap-3 items-center ${selectedSection === 'safety' ? 'green-filter' : ''}`}
              onClick={() => setSelectedSection('safety')}
            >
              <div className="toggle-icon min-h-20 flex items-center justify-center">
                <Image src="/home/safety-icon.svg" alt="" width={50} height={50} className="w-3/5" />
              </div>
              <span className='text-sm text-gray-400 text-left md:text-center w-full'>
                People who work in safety
              </span>
            </div>

            <div
              className={`border-b border-gray-600 md:border-none cursor-pointer section-toggle flex flex-row md:flex-col gap-3 items-center ${selectedSection === 'trades' ? 'green-filter' : ''}`}
              onClick={() => setSelectedSection('trades')}
            >
              <div className="toggle-icon min-h-20 flex items-center justify-center">
                <Image src="/home/trade-icon.svg" alt="" width={50} height={50} className="w-3/5" />
              </div>
              <span className='text-sm text-gray-400 text-left md:text-center w-full'>
                Trades People
              </span>
            </div>

            <div
              className={`border-b border-gray-600 md:border-none cursor-pointer section-toggle flex flex-row md:flex-col gap-3 items-center ${selectedSection === 'business' ? 'green-filter' : ''}`}
              onClick={() => setSelectedSection('business')}
            >
              <div className="toggle-icon min-h-20 flex items-center justify-center">
                <Image src="/home/car-icon.svg" alt="" width={75} height={50} className="full" />
              </div>
              <span className='text-sm text-gray-400 text-left md:text-center w-full'>
                Small to medium business owners
              </span>
            </div>
          </div>

        </div>

          <div className="text-block">
            <h4 className='text-3xl font-semibold md:text-5xl text-[--primary-colour]'>{content.title}</h4>
          </div>
          <div className="text-block flex flex-col gap-6">
            {content.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
          <div className="text-block">
            <h6 className='text-lg font-semibold'>Related Links:</h6>
            <ul className='flex flex-row gap-4 mt-3 flex-wrap'>
              {content.links.map((link, index) => (
                <li key={index}><Link href={link.href} className='text-[--primary-colour] underline text-[18px]'>{link.text}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="information-images flex flex-col w-full lg:w-3/5">
          <div className="top-images flex flex-row flex-wrap">
            {content.images.slice(0, 2).map((image, index) => (
              <Image key={index} src={image} alt="" width={600} height={400} className='w-2/4 md:w-2/4' />
            ))}
          </div>
          <div className="below-image">
            <Image src={content.images[2]} alt="" width={1200} height={400} className='w-full' />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="introduction py-20 lg:py-32">
      <div className="site-wrapper">
        <div className="section-text w-full md:w-3/4 xl:w-3/4 text-center mx-auto flex flex-col gap-4">
          <h4 className='text-4xl font-semibold lg:text-5xl text-[--dark-blue]'>How we can help you</h4>
          <p className='text-lg md:text-2xl font-light text-[--dark-blue]'>We provide evidence robust guidance and tools to help you manage Health, Safety and Well-being harm in your business - whatever size that is.</p>
        </div>
        
      </div>

      <div className="sector-information bg-[--dark-blue] mt-20 lg:mt-32 py-20 lg:py-0">
        <div className="site-wrapper h-full">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}

export default Introduction;

