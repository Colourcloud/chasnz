'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from '../ui/AnimateText'

type Vehicle = {
  id: number
  title: string
  description: string
  image: string
}

const vehicleData: Vehicle[] = [
    {
      id: 1,
      title: "Asphalt Pavers",
      description: "Used to lay asphalt on roads, bridges, parking lots, and other surfaces. These machines ensure even spreading and compaction of the asphalt layer.",
      image: "/mobile-safety/asphalt.jpg"
    },
    {
      id: 2,
      title: "Mobile Cranes",
      description: "Heavy-duty vehicle with an adjustable boom used to lift, move and place heavy materials and equipment on construction sites. Features various lifting capacities and reach configurations for different project requirements.",
      image: "/mobile-safety/mobile-crane.jpg"
    },
    {
      id: 3,
      title: "Concrete Pump Trucks",
      description: "Specialized trucks equipped with a boom-mounted pump system that precisely delivers concrete to various heights and distances. Essential for pouring concrete in hard-to-reach areas and multi-story construction projects.",
      image: "/mobile-safety/concrete-pump-truck.jpg"
    },
    {
      id: 4,
      title: "Mobile Elevated Work Platforms",
      description: "Self-propelled machines providing safe elevated access for workers and tools. Includes scissor lifts, boom lifts, and cherry pickers, allowing work at various heights while maintaining stability and safety.",
      image: "/mobile-safety/mobile-lift.jpg"
    },
    {
      id: 5,
      title: "Excavators",
      description: "Tracked or wheeled machines with a boom, stick, and bucket for digging, trenching, and material handling. Versatile equipment used for earthmoving, demolition, and general construction tasks.",
      image: "/mobile-safety/excavator.jpg"
    },
    {
      id: 6,
      title: "Rollers",
      description: "Compaction equipment used to densify soil, gravel, concrete, or asphalt surfaces. Available in various sizes and configurations including smooth drum, padfoot, and pneumatic tire designs.",
      image: "/mobile-safety/roller.jpg"
    },
    {
      id: 7,
      title: "Loaders",
      description: "Versatile machines equipped with a front-mounted bucket for loading, carrying, and transferring materials. Essential for moving earth, aggregate, and construction materials around job sites.",
      image: "/mobile-safety/loader.jpg"
    },
    {
      id: 8,
      title: "Telehandlers",
      description: "Multi-purpose machines combining the lifting capabilities of a forklift with the reach of a crane. Features an extending boom with various attachment options for lifting, placing, and moving materials at height.",
      image: "/mobile-safety/telehandler.jpg"
    },
    {
      id: 9,
      title: "Trucks & Trailers",
      description: "Multi-purpose machines combining the lifting capabilities of a forklift with the reach of a crane. Features an extending boom with various attachment options for lifting, placing, and moving materials at height.",
      image: "/mobile-safety/truck-trailer.jpg"
    },
    // Add more vehicles here...
  ]

const ImagePreloader = ({ images }: { images: string[] }) => {
  return (
    <div className="hidden">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="preload"
          width={800}
          height={600}
          priority={true}
        />
      ))}
    </div>
  )
}

const VehicleItem = ({ 
    vehicle, 
    isActive, 
    onVisibilityChange 
  }: { 
    vehicle: Vehicle
    isActive: boolean
    onVisibilityChange: (id: number, intersectionRatio: number) => void
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          onVisibilityChange(vehicle.id, entry.intersectionRatio);
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-50px'
        }
      );
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, [vehicle.id, onVisibilityChange]);
  
    return (
      <div 
        ref={containerRef}
        className={`w-full transition-colors duration-300 ease-in-out
          ${isActive ? 'bg-[--primary-colour]' : 'bg-transparent'}`}
      >
        <div className="max-w-[1580px] grid grid-cols-2 gap-12 mx-auto items-center px-16">
          <div className="flex flex-col gap-3 py-12">
            <h6 className={`text-2xl md:text-4xl font-semibold transition-all duration-300 ease-in-out
              ${isActive ? 'text-white !text-6xl' : 'text-gray-600'}`}>
              {vehicle.title}
            </h6>
            <p className={`text-base transition-colors duration-300 ease-in-out
              ${isActive ? 'text-white' : 'text-gray-600'}`}>
              {vehicle.description}
            </p>
          </div>
          <div className={`overflow-hidden h-[450px] transition-all duration-300 ease-in-out
            ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className={`w-full h-full flex items-center justify-center transition-transform duration-300 ease-in-out
                ${isActive ? 'scale-100' : 'scale-75'}`}>
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Vehicles = () => {
    const imageUrls = vehicleData.map(vehicle => vehicle.image);
    const [activeVehicleId, setActiveVehicleId] = useState<number | null>(null);
    const visibilityMap = useRef<Map<number, number>>(new Map());
  
    const handleVisibilityChange = (id: number, intersectionRatio: number) => {
      visibilityMap.current.set(id, intersectionRatio);
      
      let maxRatio = 0;
      let mostVisibleId = null;
      
      visibilityMap.current.forEach((ratio, vehicleId) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleId = vehicleId;
        }
      });
  
      if (mostVisibleId !== activeVehicleId && maxRatio > 0.5) {
        setActiveVehicleId(mostVisibleId);
      }
    };
  
    return (
      <section className="pt-16 lg:pt-32">
        <ImagePreloader images={imageUrls} />
        
        <div className="flex flex-col gap-6 max-w-6xl mx-auto text-left md:text-center px-4">
          <AnimatedText type="letter">
            <h2 className='text-4xl md:text-4xl lg:text-6xl font-semibold'>
              Types of Mobile Plant in Construction
            </h2>
          </AnimatedText>
          <p className='text-black text-base md:text-lg font-base'>
            Plant encompasses vehicles, machinery, equipment, tools, vessels, and even aircraft used across various industries. In construction, this includes cranes, hoists, cutting and grinding tools, compressors, and earthmoving or excavation machinery. A subset of this is Mobile Plant, which refers specifically to movable equipment commonly used on construction sites, such as:
          </p>
        </div>
  
        <div className="flex flex-col vehicle-types mt-24">
          {vehicleData.map((vehicle) => (
            <VehicleItem 
              key={vehicle.id} 
              vehicle={vehicle} 
              isActive={vehicle.id === activeVehicleId}
              onVisibilityChange={handleVisibilityChange}
            />
          ))}
        </div>
      </section>
    )
  }
  
  export default Vehicles