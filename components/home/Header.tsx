'use client'

import React, { useState, useEffect } from 'react'

const Header = () => {
  const messages = [
    "We're building the foundations for consistency and leadership in Health and Safety within New Zealand Construction.",
    "We're building change to reduce workplace injuries and minimise claims.",
    "We're building lives that thrive on and off the tools.",
    "We're building careers that last, not ones cut short by injury.",
    "We're building a future that's safer, smarter, stronger.",
    "CHASNZ is leading the change, one program at a time.",
    "Tōtika – Simplifying pre-qual so good businesses don't get left behind.",
    "Lead On – Backing our frontline leaders with real-world skills.",
    "ConstructSafe – Proving competency, building confidence.",
    "Work Should Not Hurt – Because pain should never be part of the job.",
    "This isn't just about work.",
    "It's about dignity, our mana. It's about families, our whanau. It's about our futures.",
    "At CHASNZ, we're not just building better work - We're building productive, healthy, and thriving careers.",
    "Built for life. Better work, better lives, a better future."
  ];

  // Duration in milliseconds for each message
  const durations = [
    7000,   // 7 seconds
    8500,   // 7 seconds
    5000,   // 5 seconds
    6000,   // 6 seconds
    5500,   // 5.5 seconds
    6500,   // 5.5 seconds
    7000,   // 7 seconds
    5000,   // 5 seconds
    5000,   // 5 seconds
    5000,   // 5 seconds
    2500,   // 2.5 seconds
    9500,   // 9.5 seconds
    10500,  // 10.5 seconds
    4500    // 4.5 seconds
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const showNextMessage = () => {
      setCurrentMessage((prev) => {
        if (prev === messages.length - 1) {
          return 0;  // Reset to first message instead of staying on last
        }
        return prev + 1;
      });
    };

    const scheduleNextMessage = () => {
      if (currentMessage < messages.length - 1) {
        timeoutId = setTimeout(showNextMessage, durations[currentMessage]);
      }
    };

    scheduleNextMessage();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentMessage]);

  return (
    <section className="header-section w-full h-[90dvh] relative overflow-hidden" id="home-header">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1082035512?background=1&autoplay=1&loop=1&muted=1&controls=0"
          className="absolute left-1/2 top-1/2 min-h-full min-w-full w-[177.77777778vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        
        {/* Optional overlay to darken the video and make text more readable */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col gap-3 items-center justify-center text-white px-4">
        <div className="absolute bottom-[20%] w-full max-w-5xl mx-auto h-[200px] flex items-center justify-center">
          <button
            onClick={() => setShowVideo(true)}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[--primary-colour] text-white text-sm text-semibold px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            Watch Full Video
          </button>
          {messages.map((message, index) => (
            <h1 
              key={index}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center absolute w-full transition-all duration-500"
              style={{ 
                opacity: currentMessage === index ? 1 : 0,
                transform: `translateY(${currentMessage === index ? '0' : '2rem'})`,
                visibility: currentMessage === index ? 'visible' : 'hidden'
              }}
            >
              {message}
            </h1>
          ))}
        </div>
      </div>

      {/* Video Modal Overlay */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/HG_ySdXhg0s?si=T9CKad3FujzaLdoE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Header