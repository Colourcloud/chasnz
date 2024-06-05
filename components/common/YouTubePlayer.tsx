// components/YouTubePlayer.tsx

import React from 'react';

interface YouTubePlayerProps {
  videoId: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
}) => {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? '1' : '0'}&loop=${loop ? '1' : '0'}&controls=${controls ? '1' : '0'}&mute=${muted ? '1' : '0'}&playlist=${videoId}&modestbranding=1&rel=0&showinfo=0&disablekb=1`;

  return (
    <div id="myVideo" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
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
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
