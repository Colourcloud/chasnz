import React from 'react';

const Flipbook = () => {
  return (
    <section className="flipbook py-20 lg:py-32">
      <div className="content-wrapper">
        <div className="flipbook-container bg-gray-500 w-full h-[700px] flex items-center justify-center">
          <iframe
            src="https://cms.chasnz.org/wp-content/uploads/2024/07/18877-CHASNZ-Guide-to-High-Energy-Hazards-Guide-Jan-24-Update-F2-No-Bleed-1.pdf"
            width="100%"
            height="100%"
            className="pdf-frame"
          >
            
            
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Flipbook;
