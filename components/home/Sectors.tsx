'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import buildingImage from '../../public/programmes/wsnh/trade-images/building.jpg';
import scaffoldingImage from '../../public/programmes/wsnh/trade-images/scaffolding.jpg';
import roofingImage from '../../public/programmes/wsnh/trade-images/roofing.jpg';

interface TradeData {
  [key: string]: {
    title: string;
    imageSrc: any;
    description: string;
  };
}

const Sectors: React.FC = () => {
  const [hoveredTrade, setHoveredTrade] = useState<string | null>("professionalservices"); // Initialize with "professionalservices"
  const [lastHoveredTrade, setLastHoveredTrade] = useState<string | null>(null);

  const handleTradeHover = (trade: string | null) => {
    setHoveredTrade(trade || "professionalservices"); // If null is passed, default to "professionalservices"
  };

  const handleTradeLeave = () => {
    setLastHoveredTrade(hoveredTrade);
    setHoveredTrade(null);
  };

  const tradeData: TradeData = {
    professionalservices: {
      title: 'Professional Services',
      imageSrc: buildingImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc.",
    },
    industrybodies: {
      title: 'Industry Bodies',
      imageSrc: scaffoldingImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc.",
    },
    regulartorybodies: {
      title: 'Regulatory Bodies',
      imageSrc: roofingImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc.",
    },
    knowledgedevelopment: {
      title: 'Knowledge Development',
      imageSrc: roofingImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum nec enim finibus euismod et in odio. Quisque id iaculis ante. Cras mattis, erat vel elementum convallis, nunc turpis interdum nunc.",
    },
    // Add data for other trades similarly
  };

  const selectedTrade = hoveredTrade || lastHoveredTrade;

  return (
    <section className="trades-section pb-20 lg:pb-32 bg-white" id="trades">
      <div className="content-wrapper">
        <div className="trades-text w-full lg:w-3/4 flex flex-col gap-6">
          <h4 className="text-3xl lg:text-5xl font-semibold">
          We work with a diverse group of profesionals, businesses and organisations in the construction industry to empower a better tomorrow.
          </h4>
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
  );
};

export default Sectors;
