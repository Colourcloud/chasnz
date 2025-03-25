'use client'

import React, { useRef, useState } from 'react'
import AnimatedText from '@/components/ui/AnimateText'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FaCirclePlay } from "react-icons/fa6";

const Videos = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [youtubeVideoId, setYoutubeVideoId] = useState<string | null>(null);
  
  const videos = [
    {
      youtubeId: "YIXdhaMkBEw",
      thumbnail: "/programmes/leadon/video-thumbnail-1.jpg",
      alt: "Leadon video 1",
      title: "Guest-speaker: Derek Toner"
    },
    // {
    //   youtubeId: "ZKon1XKvS3M",
    //   thumbnail: "/programmes/leadon/video-thumbnail-2.jpg",
    //   alt: "Leadon video 2",
    //   title: "Guest-speaker: Helen Lingard",
    //   downloadTitle: "Download Presentation",
    //   downloadLink: "http://cms.chasnz.org/wp-content/uploads/2025/03/Helen-Lingard-7-Mar-CHASNZ-Slides-PDF52.pdf"
    // },
    {
      youtubeId: "DSADU1kxI84",
      thumbnail: "/programmes/leadon/video-thumbnail-3.jpg",
      alt: "Leadon video 3", 
      title: "Guest-speaker: Stephen Harvey",
      downloadTitle: "Download Presentation",
      downloadLink: "http://cms.chasnz.org/wp-content/uploads/2025/03/Auckland-CHASNZ-1.pdf"
    }
  ];

  const handleVideoClick = (videoId: string) => {
    setYoutubeVideoId(videoId);
  };

  const closeModal = () => {
    setYoutubeVideoId(null);
  };
  
  return (
    <>
      <section className='leadon-videos relative overflow-hidden'>
          <div className='absolute honeycomb-pattern_white'></div>
          <div className='site-wrapper'>
              <div className="flex flex-col py-12 lg:py-20">
                  <div className="flex flex-col gap-4">
                      <AnimatedText><h3 className='text-2xl md:text-4xl lg:text-5xl font-semibold max-w-4xl text-white'>Lead On Events: Advancing Frontline Leadership in Construction</h3></AnimatedText>
                      <motion.p 
                        className='text-sm md:text-lg text-white max-w-5xl'
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                      >
                        This year we are hosting various Lead On events across New Zealand. We held the first full-day Masterclass in Auckland in March. The theme was Communication and Culture on Health and Safety Frontline Leadership in the Construction Sector. We had three guest-speakers, Dist.Prof Helen Lingard, Steven Harvey and Derek Toner. Each of the guest-speakers videos are below for you to watch.
                      </motion.p>
                  </div>
                  <div className="overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0" ref={sectionRef}>
                      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-10 lg:mt-16">
                        {videos.map((video, index) => (
                          <div key={index} className="flex flex-col">
                            <motion.div 
                                className="video-card w-[300px] md:w-full bg-black flex-shrink-0 cursor-pointer relative group"
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + (index * 0.2) }}
                                onClick={() => handleVideoClick(video.youtubeId)}
                            >
                                <Image src={video.thumbnail} alt={video.alt} width={1000} height={1000} />
                                <div className="absolute inset-0 flex flex-col justify-between">
                                  {/* Play button in the center */}
                                  <div className="flex-grow flex items-center justify-center">
                                    <FaCirclePlay className="text-white text-5xl transition-transform duration-300 transform group-hover:scale-110" />
                                  </div>
                                  
                                  {/* Title at the bottom */}
                                  <div className="w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                                    <p className="text-white font-medium text-xl text-left px-3">{video.title}</p>
                                  </div>
                                </div>
                            </motion.div>
                            {/* Download link section */}
                            {video.downloadLink && video.downloadTitle && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + (index * 0.2) }}
                                className="mt-3 flex items-center text-sm text-white"
                              >
                                <a href={video.downloadLink} target='_blank' className="flex items-center hover:underline bg-[#FF6600] text-white text-sm py-3 px-6 rounded-md">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                  </svg>
                                  {video.downloadTitle}
                                </a>
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                  </div>
              </div>
          </div>

          {/* CSS to hide scrollbars on all devices */}
          <style jsx global>{`
              .hide-scrollbar {
                  -ms-overflow-style: none;  /* IE and Edge */
                  scrollbar-width: none;     /* Firefox */
              }
              
              .hide-scrollbar::-webkit-scrollbar {
                  display: none;             /* Chrome, Safari and Opera */
              }
          `}</style>
      </section>

      {/* YouTube Video Modal */}
      {youtubeVideoId && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="w-full max-w-4xl mx-4" onClick={e => e.stopPropagation()}>
            <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Videos