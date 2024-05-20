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
    };
    featured_media: number;
}

const LatestNews = () => {
    const [news, setNews] = useState<News[]>([]);
    const [error, setError] = useState<string>('');

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

    const latestNews = news[0];
    const otherNews = news.slice(1);

    return (
        <section className='news-container py-20 lg:py-32'>
            <div className="content-wrapper">
                <div className="latest-news mb-12">
                    <div className="news-card relative overflow-hidden flex flex-col md:flex-row gap-8">
                        <div className="news-card-image w-full lg:w-3/5">
                            <Image src={latestNews.acf.featured_image || '/news/default-image.jpg'} alt={latestNews.title.rendered} width={1200} height={600} className='aspect-[4/3]' />
                        </div>

                        <div className="news-information w-full lg:w-3/5">
                            <div className='flex flex-col gap-6 text-black relative z-10'>
                                <span className="text-base text-gray-400">
                                    {new Date(latestNews.date).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                                <h6 className='news-title text-3xl font-semibold'>{latestNews.title.rendered}</h6>
                                <p>{latestNews.acf.excerpt}</p>
                                <Link href={`/news-and-updates/${latestNews.slug}`} className='flex flex-row items-center gap-2 rounded-full bg-[--primary-colour] text-white self-start text-sm py-3 px-6'>
                                    Read More <IoIosArrowDroprightCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="news-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {otherNews.map((item) => (
                        <div key={item.id} className="news-card relative overflow-hidden">
                            <div className="news-card-image aspect-[4/3]">
                                <Image src={item.acf.featured_image || '/news/default-image.jpg'} alt={item.title.rendered} width={600} height={600} className='aspect-[4/3]' />
                            </div>
                            <div className="news-information absolute bottom-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                                <div className='flex flex-col gap-3 text-white relative z-10'>
                                    <span className="text-sm">
                                        {new Date(item.date).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </span>
                                    <h6 className='news-title text-2xl font-semibold'>{item.title.rendered}</h6>
                                    <Link href={`/news-and-updates/${item.slug}`} className='flex flex-row items-center gap-2'>
                                        Read More <IoIosArrowDroprightCircle />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
