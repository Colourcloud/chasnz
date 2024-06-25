'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import whakatipu from '../../public/data-tools/whakatipu.jpg';
import scaffoldingImage from '../../public/programmes/wsnh/trade-images/scaffolding.jpg';
import roofingImage from '../../public/programmes/wsnh/trade-images/roofing.jpg';


interface TradeData {
  [key: string]: {
    title: string;
    imageSrc: any;
    description: string;
    link: string;
  };
}

const Menus: React.FC = () => {
  const [hoveredTrade, setHoveredTrade] = useState<string | null>("whakatipu"); // Initialize with "building"
  const [lastHoveredTrade, setLastHoveredTrade] = useState<string | null>(null);

  const handleTradeHover = (trade: string | null) => {
    setHoveredTrade(trade || "whakatipu"); // If null is passed, default to "building"
  };

  const handleTradeLeave = () => {
    setLastHoveredTrade(hoveredTrade);
    setHoveredTrade(null);
  };

  const tradeData: TradeData = {
    whakatipu: {
      title: 'Project Whakatipu',
      link: '/data-tools-and-insights/whakatipu/',
      imageSrc: whakatipu,
      description:
        "Project Whakatipu is an industry project to create a data lake asset for  all New Zealand to benefit from. Organisations can share data in a  safe, confidential way and therefore create a large data set (lake),  from which data scientists will seek actionable insight around what  matters in creating a healthier and safer construction industry.",
    },
    industrybodies: {
      title: 'Measuring Health and Safety',
      link: '/work-should-not-hurt/trades/scaffolding',
      imageSrc: scaffoldingImage,
      description:
        "Simple but effective tools available to the NZ construction sector to be used as tools to pinpoint risk areas and drive improvement.",
    },
    regulartorybodies: {
      title: 'Harm & Injury Interactive Dashboard',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNDlhNjRjYzgtZmVkYi00MDM4LTgzYzAtMzc0ZDhkOTY4ZjExIiwidCI6IjYxMWMyMDNlLTRiNDItNGVhMC04MzdhLTJiYzE1MDE3MDBhMCJ9',
      imageSrc: roofingImage,
      description:
          "Click here to view the latest data from WorkSafe and CHASNZ around construction fatalities, serious harm and claims.",
    },
    // Add data for other trades similarly
  };

  const selectedTrade = hoveredTrade || lastHoveredTrade;

  return (
    <section className="trades-section py-20 lg:py-32 bg-white" id="menus">
      <div className="content-wrapper">
        <div className="trades-text w-full lg:w-3/4 flex flex-col gap-6">
          <h4 className="text-3xl lg:text-5xl font-semibold text-[--dark-blue]">
            Learn more about the effective tools available for free use across the New Zealand
          </h4>
          <p className="text-xl font-medium text-[--dark-blue]">Browse the list of tools below:</p>
        </div>
        <div className="trades-container flex flex-row mt-14 justify-between gap-16">
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
                <h4 className="text-2xl font-semibold text-[--dark-blue]">{selectedTrade && tradeData[selectedTrade]?.title}</h4>
              <p className='text-[--dark-blue]'>{selectedTrade && tradeData[selectedTrade]?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menus;

