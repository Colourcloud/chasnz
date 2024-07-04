'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

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

const Newslist: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [filteredNews, setFilteredNews] = useState<News[]>([]);

  const truncateText = (text: string, maxLength: number) => {
    if (!text) {
      return '';
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://cms.chasnz.org/wp-json/wp/v2/news?_embed&per_page=30',
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
        setFilteredNews(newsWithImages);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="resource-section py-20 bg-white" id="resources">
      <div className="content-wrapper">
        <div className="resource-container">
          <div className="resource-heading">
            <h4 className="text-2xl font-semibold">
              Browse other news &amp; updates from CHASNZ
            </h4>
          </div>
        </div>
      </div>

      <div className="resource-layout mt-10">
        <div className="content-wrapper">
          <div className="resource-grid">
            {filteredNews.map(item => (
              <Link href={`/news-and-updates/${item.slug}`} key={item.id}>
                <div className="resource-card flex flex-row items-center justify-between py-4 pr-0 lg:pr-6">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="resource-image">
                      <Image
                        src={item.acf.featured_image || '/placeholder.jpg'}
                        alt="News Image"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="resource-card_information flex flex-col gap-2 p-1 md:p-6">
                      <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-medium">
                          {item.title.rendered}
                        </h4>
                        <p className="text-sm font-light hidden md:block">
                          {truncateText(item.acf.excerpt, 100)}
                        </p>
                      </div>
                      <span className="text-sm font-light">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="card-cta hidden lg:block">
                    <span className="text-2xl">
                      <BsArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newslist;
