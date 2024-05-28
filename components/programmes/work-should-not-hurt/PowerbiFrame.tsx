import React from 'react';

interface EmbedIframeProps {
  src: string;
}

const PowerbiFrame: React.FC<EmbedIframeProps> = ({ src }) => {
  return (
    <div className="site-wrapper pt-20 lg:pt-32">
        <h4 className='text-3xl lg:text-4xl font-semibold text-center'>The impact of sprains & strains on our productivity</h4>
        <iframe
            className="lazyloaded mt-20"
            title="Embedded Iframe"
            data-src={src}
            allowFullScreen={true}
            width="100%"
            height="700px"
            frameBorder="0"
            src={src}
            ></iframe>
    </div>
  );
};

export default PowerbiFrame;
