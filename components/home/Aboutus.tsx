'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import meettheteam from '../../public/home/meet-the-team.jpg';
import events from '../../public/home/events.jpg';
import roofingImage from '../../public/programmes/wsnh/trade-images/roofing.jpg';
import { link } from 'fs';


interface TradeData {
  [key: string]: {
    title: string;
    imageSrc: any;
    description: string;
    link: string;
  };
}

const Aboutus: React.FC = () => {
  const [hoveredTrade, setHoveredTrade] = useState<string | null>("meettheteam"); // Initialize with "building"
  const [lastHoveredTrade, setLastHoveredTrade] = useState<string | null>(null);

  const handleTradeHover = (trade: string | null) => {
    setHoveredTrade(trade || "meettheteam"); // If null is passed, default to "building"
  };

  const handleTradeLeave = () => {
    setLastHoveredTrade(hoveredTrade);
    setHoveredTrade(null);
  };

  const tradeData: TradeData = {
    meettheteam: {
      title: 'Meet The Team',
      link: '/about/',
      imageSrc: meettheteam,
      description:
        "Construction Health and Safety New Zealand, is an industry-led charitable trust working to improve the lives of construction workers by raising the standard of health, safety and wellbeing in construction.",
    },
    events: {
      title: 'Events',
      link: '/events/',
      imageSrc: events,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc.",
    },
    news: {
      title: 'News & Updates',
      link: '/news-and-updates/',
      imageSrc: events,
      description:
        "Stay tuned for articles, expert insights, and announcements about our upcoming workshops and training sessions. Whether it's innovative safety solutions, new legislative updates, or success stories from across the sector, this section is designed to provide you with valuable information that supports our shared goal of enhancing workplace safety. Thank you for visiting, and we look forward to keeping you updated.",
    },
    regulartorybodies: {
      title: 'Contact us',
      link: '/contact/',
      imageSrc: roofingImage,
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc.",
    },
    // Add data for other trades similarly
  };

  const selectedTrade = hoveredTrade || lastHoveredTrade;

  return (
    <>
   <section className="trades-section py-20 lg:py-32 bg-white" id="aboutus">
      <div className="content-wrapper">
        <div className="trades-container flex flex-row justify-between gap-16">
          <div className="trades-list w-full lg:w-[35%]">
            <ul className="flex flex-col text-xl font-semibold">
              {Object.keys(tradeData).map((trade) => (
                <Link href={tradeData[trade].link} key={trade} passHref>
                <li
                  key={trade}
                  onMouseEnter={() => handleTradeHover(trade)}
                  onMouseLeave={() => handleTradeLeave()}
                  className={`py-5 border-b-2 border-gray-30 w-full flex flex-row items-center justify-between ${selectedTrade === trade && 'text-[--primary-colour] border-[--primary-colour]'}`}
                  title={tradeData[trade].title}
                >
                  {tradeData[trade].title}
                  <span className="text-2xl">
                    <BsArrowRight />
                  </span>
                </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="trade-description flex-col gap-6 w-full lg:w-[65%] hidden md:flex">
            <div className="trade-image">
              <Image
                src={selectedTrade && tradeData[selectedTrade]?.imageSrc || ''}
                alt={`${selectedTrade && tradeData[selectedTrade]?.title} image`}
                width="800"
                height="500"
                priority={true}
                className='w-full aspect-video'
              />
            </div>
            <div className="trade-information flex flex-col gap-4">
                <h4 className="text-2xl font-semibold">{selectedTrade && tradeData[selectedTrade]?.title}</h4>
              <p>{selectedTrade && tradeData[selectedTrade]?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Aboutus;

