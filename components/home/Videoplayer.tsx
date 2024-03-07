// components/VimeoPlayer.tsx

import React from 'react';

interface VimeoPlayerProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  title?: boolean;
  byline?: boolean;
  portrait?: boolean;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({
  videoId,
  autoplay = true,
  loop = true,
  title = false,
  byline = false,
  portrait = false,
}) => {
    const src = `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? '1' : '0'}&loop=${loop ? '1' : '0'}&title=${title ? '1' : '0'}&byline=${byline ? '1' : '0'}&portrait=${portrait ? '1' : '0'}&controls=0`;

  return (
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        src={src}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VimeoPlayer;
