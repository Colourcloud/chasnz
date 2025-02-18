'use client'

import React, { useRef, useState } from 'react'
import { FaCirclePlay } from "react-icons/fa6";

const Videos = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<HTMLVideoElement | null>(null);
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    {
      src: "/having-a-hmmm/video-1.mp4",
      poster: "/having-a-hmmm/video-1-poster.jpg",
      title: "Top tips for tradies"
    },
    {
      src: "/having-a-hmmm/video-2.mp4",
      poster: "/having-a-hmmm/video-2-poster.jpg",
      title: "Find better ways to move things"
    },
    {
      src: "/having-a-hmmm/video-3.mp4",
      poster: "/having-a-hmmm/video-3-poster.jpg",
      title: "Get work off the ground"
    },
    {
      src: "/having-a-hmmm/video-4.mp4",
      poster: "/having-a-hmmm/video-4-poster.jpg",
      title: "Reduce overhead work"
    },
    {
      src: "/having-a-hmmm/video-5.mp4",
      poster: "/having-a-hmmm/video-5-poster.jpg",
      title: "Top tips for tradies"
    }
  ];

  const handleMouseEnter = (video: HTMLVideoElement) => {
    // If there's a video playing and it's different from the one being hovered
    if (currentlyPlaying && currentlyPlaying !== video) {
      currentlyPlaying.pause();
      currentlyPlaying.currentTime = 0;
    }
    
    video.play();
    setCurrentlyPlaying(video);
  };

  const handleVideoClick = (videoSrc: string) => {
    // Stop the currently playing thumbnail video if any
    if (currentlyPlaying) {
      currentlyPlaying.pause();
      currentlyPlaying.currentTime = 0;
    }
    setModalVideo(videoSrc);
  };

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setModalVideo(null);
  };

  return (
    <>
      <section className="py-12 lg:py-32 border-t">
          <div className="site-wrapper">
              <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
                  <h3 className='text-2xl lg:text-3xl font-semibold !leading-tight'>CHASNZ has partnered with ACC to create these &apos;Have a Hmmm&apos; videos for the construction industry.</h3>
                  <p className='text-base lg:text-xl font-light'>The tips look to help tradies make simple changes to have long productive and pain free careers in construction.</p>
              </div>
              <div className="video-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {videos.map((video, index) => (
                    <div key={index} className="video-item w-full">
                        <div className="relative pt-[56.7%] bg-gray-200 rounded-lg overflow-hidden group">
                            <video 
                                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                                muted
                                playsInline
                                loop
                                poster={video.poster}
                                onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                                onClick={() => handleVideoClick(video.src)}
                            >
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-row justify-between items-center pointer-events-none">
                                <h4 className="text-white font-medium text-lg">{video.title}</h4>
                                <p className="text-white text-2xl cursor-pointer"><FaCirclePlay /></p>
                            </div>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Modal */}
      {modalVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="w-full max-w-4xl mx-4" onClick={e => e.stopPropagation()}>
            <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              <video
                ref={modalVideoRef}
                className="absolute inset-0 w-full h-full"
                controls
                autoPlay
                playsInline
              >
                <source src={modalVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Videos