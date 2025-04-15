import React from 'react'

const Video = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-16 border-t">
        <div className="site-wrapper">
                <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-gray-500">
                <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
                >
                <source src="https://2eh7tzwjs7.ufs.sh/f/C1wtReKMxdFntDWB99RA2VxivMSNLmpnIkagYRzTOhqBKQ5U" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>        
        </div>

    </div>
  )
}

export default Video