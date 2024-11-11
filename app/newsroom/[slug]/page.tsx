'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/common/Navigation';
import { IoArrowBackOutline } from "react-icons/io5";
import Head from 'next/head';

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
        content: string;
        featured_image: string; // Assuming this might be an ID that needs resolving to a URL
        link: string;
        link_label: string;
    };
    featured_media: number;
}

const NewsDetails: React.FC<{ params: { slug: string } }> = ({ params }) => {
    const [news, setNews] = useState<News | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            const reqUrl = `https://cms.chasnz.org/wp-json/wp/v2/news?_embed&slug=${params.slug}`;
            try {
                const response = await fetch(reqUrl);
                const newsItems: News[] = await response.json();

                if (newsItems.length > 0) {
                    const fetchedNews = newsItems[0];

                    // Assume featured_image is an ID and fetch the actual image URL
                    if (isNaN(Number(fetchedNews.featured_media))) {
                        setNews(fetchedNews);
                    } else {
                        const imageResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/media/${fetchedNews.featured_media}`);
                        const imageData = await imageResponse.json();
                        fetchedNews.acf.featured_image = imageData.source_url;
                        setNews(fetchedNews);
                    }
                } else {
                    setNews(null);
                }
            } catch (error) {
                console.error('Failed to fetch news:', error);
                setNews(null);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [params.slug]);

    if (loading) {
        return <div>Loading news details...</div>;
    }

    if (!news) {
        return <div>No news found for the given slug</div>;
    }

    return (
        <>
            <Navigation />
            <head>
                <title>{news.title.rendered}</title>
            </head>
            <div className="article-header w-full h-[110px] bg-black"></div>
            <div className="article-content py-16 lg:py-32">
                <div className='content-wrapper'>
                    <div className="news-page-layout flex flex-col gap-5 lg:gap-0">
                        <div className="left-col w-full lg:w-full">
                            <div className="news-wrapper max-w-[980px] mx-auto flex flex-col gap-6">
                                <Link href="/newsroom" className='flex flex-row items-center gap-1 text-xl'><IoArrowBackOutline /> Back to News</Link>
                                <div className="news-image">
                                    <Image className='w-full' src={news.acf.featured_image || '/news/default-image.jpg'} alt={news.title.rendered} width={800} height={800} layout='responsive' />
                                </div>
                                <span className="text-base text-[#9C9C9C]">
                                    {new Date(news.date).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                                <h1 className='text-3xl lg:text-4xl font-semibold'>{news.title.rendered}</h1>
                                <div className='flex flex-col gap-5 post-content' dangerouslySetInnerHTML={{ __html: news.acf.content }}></div>
                                {news.acf.link && (
                                    <a href={news.acf.link} className='text-white text-sm font-medium py-3 px-6 rounded-full bg-[--primary-colour] self-start'>{news.acf.link_label}</a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsDetails;
