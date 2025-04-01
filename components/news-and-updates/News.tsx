'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface News {
    id: number;
    date: string;
    slug: string;
    link: string;
    title: {
        rendered: string;
    };
    acf: {
        title: string;
        excerpt: string;
        content: string;
        featured_image: string;
        is_alert?: boolean;
    };
    featured_media: number;
}

const LatestNews = () => {
    const [news, setNews] = useState<News[]>([]);
    const [error, setError] = useState<string>('');

    const truncateToWords = (text: string, wordCount: number) => {
        // Remove any HTML tags
        const strippedText = text.replace(/<[^>]*>/g, '');
        const words = strippedText.trim().split(/\s+/);
        if (words.length <= wordCount) return strippedText;
        return words.slice(0, wordCount).join(' ') + '...';
    };

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://cms.chasnz.org/wp-json/wp/v2/news');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
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
                console.error('Failed to fetch news:', error);
                setError('Failed to fetch news.');
            }
        };

        fetchNews();
    }, []);

    if (error) {
        return <div>Error loading news: {error}</div>;
    }

    if (news.length === 0) {
        return <div>Loading news...</div>;
    }

    return (
        <section className='news-container py-20'>
            <div className="content-wrapper">
                <div className="latest-news mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((newsItem) => (
                        <div key={newsItem.id} className='news-card flex flex-col gap-4 border rounded-md overflow-hidden'>
                            <div className="news-card-image max-h-[250px] relative">
                                {newsItem.acf.is_alert && (
                                    <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-md font-semibold shadow-md z-10">
                                        Safety Alert
                                    </div>
                                )}
                                <Image 
                                    src={newsItem.acf.featured_image || '/placeholder.jpg'} 
                                    alt={newsItem.title.rendered}
                                    width={600} 
                                    height={600} 
                                    className='h-full object-cover'
                                />
                            </div>
                            <div className="news-card-info flex flex-col gap-4 p-6 justify-between h-full">
                                <div className='flex flex-col gap-4'>
                                <span className='text-sm font-light text-gray-500'>
                                    {new Date(newsItem.date).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                                {newsItem.acf.is_alert && (
                                    <div className="bg-red-600 text-white px-2 py-1 text-xs font-semibold self-start">
                                        Safety Alert
                                    </div>
                                )}
                                <h6 className='text-lg md:text-xl font-semibold'>
                                    {newsItem.title.rendered}
                                </h6>
                                <p className='text-base font-light text-gray-500'>
                                    {truncateToWords(newsItem.acf.excerpt, 20)}
                                </p>
                                </div>
                                
                                <Link 
                                    href={`/newsroom/${newsItem.slug}`} 
                                    className='flex flex-row items-center gap-2 rounded-full bg-[--primary-colour] text-white self-start text-sm py-2 px-5'
                                >
                                    Read More <IoIosArrowDroprightCircle />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;