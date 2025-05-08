'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

type News = {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  date: string;
  acf: {
    featured_image: string;
    excerpt: string;
  };
  featured_media: number;
};

const News = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://cms.chasnz.org/wp-json/wp/v2/news?_embed&per_page=3',
          { next: { revalidate: 3600 } }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data: News[] = await response.json();

        const newsWithImages = await Promise.all(data.map(async (item) => {
          if (item.featured_media) {
            const imgResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/media/${item.featured_media}`);
            const imgData = await imgResponse.json();
            item.acf.featured_image = imgData.source_url;
          }
          return item;
        }));

        setNews(newsWithImages);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="py-16 lg:py-32 border-t home-page-news relative">
        <div className="site-wrapper">
            <div className="flex flex-row flex-wrap justify-between items-center">
                <div className="flex flex-col gap-5 max-w-5xl">
                    <h4 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white">Keep up to date with our latest news</h4>
                    <p className="text-sm md:text-base lg:text-lg font-light text-white">Keep up with innovative safety solutions, new legislative updates and success stories from across the sector.</p>
                </div>
                <Link href="/newsroom" className="flex flex-row self-end items-center gap-1 bg-white text-black px-5 py-3 rounded-full text-sm font-medium">View all News <ArrowRight className="w-4 h-4" /></Link>
            </div>

            <div className="flex flex-col md:flex-row gap-5 mt-16">
                {news.map((item, index) => (
                    <Link href={`/news-and-updates/${item.slug}`} key={item.id} className={index === 0 ? 'w-full md:w-1/2' : 'w-full md:w-[25%]'}>
                        <div className="bg-gray-200 h-[300px] md:h-[450px] relative overflow-hidden group">
                            {item.acf.featured_image && (
                                <Image
                                    src={item.acf.featured_image}
                                    alt={item.title.rendered}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            )}
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{item.title.rendered}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default News