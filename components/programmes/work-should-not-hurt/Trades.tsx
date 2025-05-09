'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import buildingImage from '../../../public/programmes/wsnh/trade-images/building.jpg';
import scaffoldingImage from '../../../public/programmes/wsnh/trade-images/scaffolding.jpg';
import roofingImage from '../../../public/programmes/wsnh/trade-images/roofing.jpg';
import paintingImage from '../../../public/programmes/wsnh/trade-images/painting.jpg';
import plumbingImage from '../../../public/programmes/wsnh/trade-images/plumbing.jpg';
import glazingImage from '../../../public/programmes/wsnh/trade-images/glazing.jpg';
import electricalImage from '../../../public/programmes/wsnh/trade-images/electricians.jpg';
import flooringImage from '../../../public/programmes/wsnh/trade-images/flooring.jpg';
import concreteImage from '../../../public/programmes/wsnh/trade-images/concrete.jpg';
import managementImage from '../../../public/programmes/wsnh/trade-images/management.jpg';
import brickImage from '../../../public/programmes/wsnh/trade-images/brick.jpg';
import { link } from 'fs';


interface TradeData {
  [key: string]: {
    title: string;
    imageSrc: any;
    description: string;
    link: string;
  };
}

const Trades: React.FC = () => {
  const [hoveredTrade, setHoveredTrade] = useState<string | null>("building");
  const [lastHoveredTrade, setLastHoveredTrade] = useState<string | null>("building");

  const handleTradeHover = (trade: string | null) => {
    setHoveredTrade(trade);
  };

  const handleTradeLeave = () => {
    setLastHoveredTrade(hoveredTrade);
    setHoveredTrade(null);
  };

  const tradeData: TradeData = {
    brick: {
        title: 'Brick & Blocklaying',
        link: '/work-should-not-hurt/trades/brick-blocklaying',
        imageSrc: brickImage,
        description:
            "We have worked onsite alongside Bricklayers to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    building: {
        title: 'Building',
        link: '/work-should-not-hurt/trades/building',
        imageSrc: buildingImage,
        description:
            "We have worked onsite alongside Builders to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    concrete: {
        title: 'Concrete Services',
        link: '/work-should-not-hurt/trades/concrete',
        imageSrc: concreteImage,
        description:
            "We have worked onsite alongside Concreters to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    electricians: {
        title: 'Electricians',
        link: '/work-should-not-hurt/trades/electricians',
        imageSrc: electricalImage,
        description:
            "We have worked onsite alongside Electricians to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    flooring: {
        title: 'Flooring',
        link: '/work-should-not-hurt/trades/flooring',
        imageSrc: flooringImage,
        description:
            "We have worked onsite alongside Floorers to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    glazing: {
        title: 'Glazing',
        link: '/work-should-not-hurt/trades/glazing',
        imageSrc: glazingImage,
        description:
            "We have worked onsite alongside Glaziers to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    management: {
        title: 'Management & Support',
        link: '/work-should-not-hurt/trades/manage-support',
        imageSrc: managementImage,
        description:
            "We have worked onsite alongside management & support workers to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    painting: {
        title: 'Painting',
        link: '/work-should-not-hurt/trades/painting',
        imageSrc: paintingImage,
        description:
            "We have worked onsite alongside Painters to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    plumbing: {
        title: 'Plumbing, Gasfitting & Drainlaying',
        link: '/work-should-not-hurt/trades/plumbing-gasfitting-drainlaying',
        imageSrc: plumbingImage,
        description:
            "We have worked onsite alongside plumbers, gasfitters & drain layers to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    roofing: {
        title: 'Roofing',
        link: '/work-should-not-hurt/trades/roofing',
        imageSrc: roofingImage,
        description:
            "We have worked onsite alongside roofers to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    scaffolding: {
        title: 'Scaffolding',
        link: '/work-should-not-hurt/trades/scaffolding',
        imageSrc: scaffoldingImage,
        description:
            "We have worked onsite alongside Scaffolders to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    // Add data for other trades similarly
};


  const selectedTrade = hoveredTrade || lastHoveredTrade;

  return (
    <section className="trades-section py-20 lg:py-32 bg-white" id="trades">
      <div className="content-wrapper">
        <div className="trades-text w-full lg:w-3/4 flex flex-col gap-6">
          <h4 className="text-2xl lg:text-4xl font-semibold text-[--dark-blue]">
            We&apos;re doing the ground work to understand the challenges faced by our trades
          </h4>
          <p className="text-xl font-medium text-[--dark-blue]">Browse our list of trade related material below:</p>
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
              {Object.keys(tradeData).map((trade) => (
                <Image
                  key={trade}
                  src={tradeData[trade].imageSrc}
                  alt={`${tradeData[trade].title} image`}
                  width="800"
                  height="800"
                  priority={true}
                  className={`w-full ${selectedTrade === trade ? '' : 'hidden'}`}
                />
              ))}
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

export default Trades;

