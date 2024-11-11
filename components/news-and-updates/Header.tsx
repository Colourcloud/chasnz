import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div className="programmes-header relative header-gradient" id="news-header">
            <div className="content-wrapper relative h-full">
              <div className="header-container flex flex-col h-full items-center justify-center gap-10">
                <div className="header-text-block flex flex-col gap-8 text-center w-full lg:w-3/4 z-30">
                  <h1 className='text-4xl lg:text-5xl font-bold'>Keep up to date with latest news, updates and insights from the industry</h1>
                  <p className='text-base md:text-xl font-light'>Stay tuned for articles, expert insights, and announcements about our upcoming workshops and training sessions. Whether it&apos;s innovative safety solutions, new legislative updates, or success stories from across the sector</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header