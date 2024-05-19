import React from 'react';

interface EmbedIframeProps {
  src: string;
}

const Powerbi: React.FC<EmbedIframeProps> = ({ src }) => {
  return (
    <iframe
      className="lazyloaded"
      title="Embedded Iframe"
      data-src={src}
      allowFullScreen={true}
      width="100%"
      height="700px"
      frameBorder="0"
      src={src}
    ></iframe>
  );
};

export default Powerbi;
