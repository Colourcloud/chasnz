import React from 'react';

const Flipbook = () => {
  return (
    <section className="flipbook py-20 lg:py-32">
      <div className="content-wrapper">

        <div className="flipbook-container bg-gray-500 w-full h-[700px] flex items-center justify-center">
          <iframe
            src="https://cms.chasnz.org/energy-wheel/"
            width="100%"
            height="100%"
            className="pdf-frame"
          >
          </iframe>
        </div>
        {/* <script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
        <div className="commonninja_component pid-2a96bbf2-ddf4-48bc-a2e5-62f075e58c04"></div> */}
      </div>
    </section>
  );
};

export default Flipbook;
