'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiBellAlert } from "react-icons/hi2";

interface NewsItem {
  id: number;
  date: string;
  link: string;
  acf: {
    title: string;
    description: string;
    type: string;
    image: number;
    link: string;
  };
}

interface MediaItem {
  id: number;
  source_url: string;
}

const NewsFeed = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [mediaUrls, setMediaUrls] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://cms.chasnz.org/wp-json/wp/v2/newsfeed');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNewsItems(data);

        // Fetch media URLs for items with images
        const imageIds = data
          .filter((item: NewsItem) => item.acf.image)
          .map((item: NewsItem) => item.acf.image);

        if (imageIds.length > 0) {
          const mediaPromises = imageIds.map(async (id: number) => {
            const mediaResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/media/${id}`);
            if (!mediaResponse.ok) {
              throw new Error(`Failed to fetch media ${id}`);
            }
            const mediaData: MediaItem = await mediaResponse.json();
            return { id, url: mediaData.source_url };
          });

          const mediaResults = await Promise.all(mediaPromises);
          const mediaMap = mediaResults.reduce((acc, { id, url }) => {
            acc[id] = url;
            return acc;
          }, {} as Record<number, string>);

          setMediaUrls(mediaMap);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating button on bottom right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 bg-primary text-white px-4 py-3 rounded-md shadow-lg hover:bg-primary/90 transition-all z-30 flex items-center gap-2 cursor-pointer"
      >
        <HiBellAlert className='text-white' /> News & Updates
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-[998] transition-opacity duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding modal */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[600px] max-w-full bg-white shadow-lg z-[999] overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 relative">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col gap-1 py-3 border-b">
                <h2 className="text-2xl font-semibold">News & Updates</h2>
                <p className='text-sm font-light'>Below you can find recent News, events and updates from the CHASNZ team</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 absolute top-3 right-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            {loading ? (
              <div className="text-center py-8">Loading news...</div>
            ) : error ? (
              <div className="text-center py-8 text-red-500">Error: {error}</div>
            ) : (
              newsItems.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.acf.link || item.link}
                  className="block hover:bg-gray-50 transition-colors"
                >
                  <div className="border-b pb-4 news-feed-item">
                    <span className="text-xs text-gray-500 mb-2 block">
                      {new Date(item.date).toLocaleDateString('en-NZ', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <h3 className="font-semibold mb-2 text-lg flex flex-col gap-1">
                      <span className='text-xs py-1 px-2 bg-[--primary-colour] self-start text-white'>
                        {item.acf.type}
                      </span>
                      {item.acf.title}
                    </h3>
                    <p className="text-gray-700 text-sm font-light">{item.acf.description}</p>
                    {item.acf.image && mediaUrls[item.acf.image] && (
                      <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden mt-4">
                        <Image
                          src={mediaUrls[item.acf.image]}
                          alt={item.acf.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsFeed