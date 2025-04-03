import React from 'react'
import Link from 'next/link'
import YouTubePlayer from '../common/YouTubePlayer'
import Image from 'next/image'
import { FaCirclePlay } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
        <div className="home-header">
            <div className="introduction-video">
              <div className="site-wrapper h-full">

              </div>
        </div>
        </div>

        <div className="content-wrapper">
          <div className="banner-image w-full flex flex-col gap-4 items-center justify-center mt-12">
            <Link href="/work-should-not-hurt/foundation-assessment-toolkit-musculoskeletal-injuries"><Image src="/common/webinar.gif" className='' alt="foundation-assessment-toolkit-musculoskeletal-injuries" width={1921} height={150} /></Link>
          </div>
        </div>
        
    </div>
  )
}

export default Header