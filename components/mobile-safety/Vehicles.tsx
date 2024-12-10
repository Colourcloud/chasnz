'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from '../ui/AnimateText'
import { motion, AnimatePresence } from 'framer-motion'

interface Vehicle {
  title: string;
  description: string;
  image: string;
}

const vehicles: Vehicle[] = [
  {
    title: "Asphalt Pavers",
    description: "Used to lay asphalt on roads, bridges, parking lots, and other surfaces. These machines ensure even spreading and compaction of the asphalt layer.",
    image: "/mobile-safety/asphalt.jpg"
  },
  {
    title: "Mobile Cranes",
    description: "Used to lay asphalt on roads, bridges, parking lots, and other surfaces. These machines ensure even spreading and compaction of the asphalt layer.",
    image: "/mobile-safety/asphalt.jpg"
  },
  {
    title: "Concrete Pump Trucks",
    description: "Used to lay asphalt on roads, bridges, parking lots, and other surfaces. These machines ensure even spreading and compaction of the asphalt layer.",
    image: "/mobile-safety/asphalt.jpg"
  },
  {
    title: "Mobile Elevated Work Platforms",
    description: "Used to lay asphalt on roads, bridges, parking lots, and other surfaces. These machines ensure even spreading and compaction of the asphalt layer.",
    image: "/mobile-safety/asphalt.jpg"
  },
  {
    title: "Excavators",
    description: "Used to lay asphalt on roads, bridges, parking lots, and other surfaces. These machines ensure even spreading and compaction of the asphalt layer.",
    image: "/mobile-safety/asphalt.jpg"
  },
  {
    title: "Rollers",
    description: "Used to lay asphalt on roads, bridges, parking lots, and other surfaces. These machines ensure even spreading and compaction of the asphalt layer.",
    image: "/mobile-safety/asphalt.jpg"
  },
  {
    title: "Loaders",
    description: "Used to lay asphalt on roads, bridges, parking lots, and other surfaces. These machines ensure even spreading and compaction of the asphalt layer.",
    image: "/mobile-safety/asphalt.jpg"
  },
  {
    title: "Telehandlers",
    description: "Used to lay asphalt on roads, bridges, parking lots, and other surfaces. These machines ensure even spreading and compaction of the asphalt layer.",
    image: "/mobile-safety/asphalt.jpg"
  }
]

const Vehicles = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className='py-16 lg:py-24'>
      <div className="flex flex-col gap-6 max-w-6xl mx-auto text-left md:text-center px-4">
        <AnimatedText type="letter">
          <h2 className='text-4xl md:text-4xl lg:text-6xl font-semibold'>
            Types of Mobile Plant in Construction
          </h2>
        </AnimatedText>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className='text-black text-base md:text-lg font-base'
        >
          Plant encompasses vehicles, machinery, equipment, tools, vessels, and even aircraft used across various industries. In construction, this includes cranes, hoists, cutting and grinding tools, compressors, and earthmoving or excavation machinery. A subset of this is Mobile Plant, which refers specifically to movable equipment commonly used on construction sites, such as:
        </motion.p>
      </div>

      <div className='mt-16 lg:mt-24'>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 vehicle-container">
            <div className="flex flex-col gap-6 vehicle-info w-full md:w-2/5">
              <div className="vehicle-select flex flex-col gap-6">
                {vehicles.map((vehicle, index) => (
                  <div 
                    key={index} 
                    className='flex flex-col gap-2 cursor-pointer'
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="relative">
                      <div 
                        className={`absolute left-0 w-1 h-full transition-all duration-300 ${
                          index === activeIndex ? 'bg-[--primary-colour]' : 'bg-transparent'
                        }`}
                      />
                      <h6 
                        className={`text-xl font-semibold md:text-3xl lg:text-3xl pl-4 transition-all duration-300 ${
                          index === activeIndex ? 'text-black' : 'text-gray-400 text-lg md:text-xl lg:text-xl hover:text-gray-600'
                        }`}
                      >
                        {vehicle.title}
                      </h6>
                    </div>
                    <AnimatePresence mode="wait">
                      {index === activeIndex && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0 }}
                          className='text-black text-base font-base pl-4'
                        >
                          {vehicle.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
            <div className="vehicle-image w-full md:w-3/5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ 
                    duration: 0.2,
                    ease: "easeInOut"
                  }}
                  className="origin-center"
                >
                  <Image 
                    src={vehicles[activeIndex].image} 
                    alt={vehicles[activeIndex].title} 
                    width={900} 
                    height={900}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vehicles