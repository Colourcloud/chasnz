'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

interface TradeData {
  [key: string]: {
    title: string;
    imageSrc: string;
    description: string;
  };
}

const Trades: React.FC = () => {
  const [hoveredTrade, setHoveredTrade] = useState<string | null>("building"); // Initialize with "building"
  const [lastHoveredTrade, setLastHoveredTrade] = useState<string | null>(null);

  const handleTradeHover = (trade: string | null) => {
    setHoveredTrade(trade || "building"); // If null is passed, default to "building"
  };

  const handleTradeLeave = () => {
    setLastHoveredTrade(hoveredTrade);
    setHoveredTrade(null);
  };

  const tradeData: TradeData = {
    building: {
      title: 'Building',
      imageSrc: '/programmes/wsnh/trade-images/building.jpg',
      description:
        "We have worked onsite alongside Builders to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    scaffolding: {
      title: 'Scaffolding',
      imageSrc: '/programmes/wsnh/trade-images/scaffolding.jpg',
      description:
        "We have worked onsite alongside Scaffolders to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    roofing: {
      title: 'Roofing',
      imageSrc: '/programmes/wsnh/trade-images/roofing.jpg',
      description:
          "We have worked onsite alongside roofers to identify practical solutions to help you reduce the chance of pain and injury. It's about working smarter, not harder.",
    },
    plumbing: {
        title: 'Plumbing, gasfitting & drainlaying',
        imageSrc: '/programmes/wsnh/trade-images/plumbing.jpg',
        description:
            "We have worked onsite alongside plumbers, gasfitters & drain layers to identify practical solutions to help you reduce the chance of pain and injury. It’s about working smarter, not harder.",
      },
      brick: {
        title: 'Brick & blocklaying',
        imageSrc: '/programmes/wsnh/trade-images/brick.jpg',
        description:
            "We have worked onsite alongside Bricklayers to identify practical solutions to help you reduce the chance of pain and injury. It’s about working smarter, not harder.",
      },
      painting: {
        title: 'Painting',
        imageSrc: '/programmes/wsnh/trade-images/painting.jpg',
        description:
            "We have worked onsite alongside Painters to identify practical solutions to help you reduce the chance of pain and injury. It’s about working smarter, not harder.",
      },
      glazing: {
        title: 'Glazing',
        imageSrc: '/programmes/wsnh/trade-images/glazing.jpg',
        description:
            "We have worked onsite alongside Glazers to identify practical solutions to help you reduce the chance of pain and injury. It’s about working smarter, not harder.",
      },
      electricians: {
        title: 'Electricians',
        imageSrc: '/programmes/wsnh/trade-images/electricians.jpg',
        description:
            "We have worked onsite alongside Electricians to identify practical solutions to help you reduce the chance of pain and injury. It’s about working smarter, not harder.",
      },
      flooring: {
        title: 'Flooring',
        imageSrc: '/programmes/wsnh/trade-images/flooring.jpg',
        description:
            "We have worked onsite alongside Floorers to identify practical solutions to help you reduce the chance of pain and injury. It’s about working smarter, not harder.",
      },
      concrete: {
        title: 'Concrete Services',
        imageSrc: '/programmes/wsnh/trade-images/concrete.jpg',
        description:
            "We have worked onsite alongside Concreters to identify practical solutions to help you reduce the chance of pain and injury. It’s about working smarter, not harder.",
      },
      management: {
        title: 'Management & Support',
        imageSrc: '/programmes/wsnh/trade-images/management.jpg',
        description:
            "We have worked onsite alongside management & support workers to identify practical solutions to help you reduce the chance of pain and injury. It’s about working smarter, not harder.",
      },
    // Add data for other trades similarly
  };

  const selectedTrade = hoveredTrade || lastHoveredTrade;

  return (
    <section className="trades-section py-20 lg:py-32 bg-white">
      <div className="content-wrapper">
        <div className="trades-text w-full lg:w-3/4 flex flex-col gap-6">
          <h4 className="text-3xl lg:text-4xl font-semibold">
            We&apos;re doing the ground work to understand the challenges faced by our trades
          </h4>
          <p className="text-xl font-medium">Browse our list of trade related material below:</p>
        </div>
        <div className="trades-container flex flex-row mt-14 justify-between gap-16">
          <div className="trades-list w-full lg:w-[35%]">
            <ul className="flex flex-col text-xl font-semibold">
              {Object.keys(tradeData).map((trade) => (
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
              ))}
            </ul>
          </div>
          <div className="trade-description flex-col gap-6 w-full lg:w-[65%] hidden md:flex">
            <div className="trade-image">
              <Image
                src={selectedTrade && tradeData[selectedTrade]?.imageSrc || ''}
                alt={`${selectedTrade && tradeData[selectedTrade]?.title} image`}
                width="800"
                height="800"
                priority={true}
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
  );
};

export default Trades;

