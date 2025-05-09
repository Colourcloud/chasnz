'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/common/Navigation';
import { IoArrowBackOutline } from "react-icons/io5";
import Head from 'next/head';
import { Metadata } from 'next';

interface Event {
    id: number;
    date: string;
    slug: string;
    link: string;
    title: {
        rendered: string;
    };
    acf: {
        isactive: string;
        title: string;
        excerpt: string;
        date: string;
        time: string;
        duration: string;
        location: string;
        cover_image: string; // Assuming this might be an ID that needs resolving to a URL
        content: string;
        link: string;
        webinar_link: string;
        webinar_link_button_title: string;
    };
}

const EventDetails: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      const reqUrl = `https://cms.chasnz.org/wp-json/wp/v2/event?_embed&slug=${params.slug}`;
      try {
        const response = await fetch(reqUrl);
        const events: Event[] = await response.json();

        if (events.length > 0) {
          const fetchedEvent = events[0];

          // Assume cover_image is an ID and fetch the actual image URL
          if (isNaN(Number(fetchedEvent.acf.cover_image))) {
            setEvent(fetchedEvent);
          } else {
            const imageResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/media/${fetchedEvent.acf.cover_image}`);
            const imageData = await imageResponse.json();
            fetchedEvent.acf.cover_image = imageData.source_url;
            setEvent(fetchedEvent);
          }
        } else {
          setEvent(null);
        }
      } catch (error) {
        console.error('Failed to fetch event:', error);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [params.slug]);

  if (loading) {
    return <div>Loading event details...</div>;
  }

  if (!event) {
    return <div>No event found for the given slug</div>;
  }

  return (
    <>
      <Navigation />
      <head>
       <title>{event.title.rendered}</title>
      </head>
      <div className="article-header events-background w-full h-[500px] bg-black"></div>
      <div>
          {event.acf.isactive === "Yes" ? (
               <span></span>
               ) : (
             <div className='w-full text-center text-sm text-white py-3 px-6 bg-red-600'>This event has finished and is no longer open for new registrations</div>
           )}
        </div>
      <div className="article-content py-20 lg:py-40">
        <div className='content-wrapper'>
          <div className="events-page-layout flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between">
              <div className="left-col w-full lg:w-[75%]">
                <div className="event-wrapper max-w-[980px] mx-auto flex flex-col gap-6">
                  <Link href="/events" className='flex flex-row items-center gap-1 text-xl'><IoArrowBackOutline /> Back to Events</Link>
                  <span className="text-base text-[#9C9C9C]">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <h1 className='text-3xl lg:text-4xl font-semibold'>{event.title.rendered}</h1>
                  <div className='flex flex-col gap-5 post-content' dangerouslySetInnerHTML={{ __html: event.acf.content }}></div>
                </div>
              </div>
              <div className="right-col w-full lg:w-[25%] border rounded-lg border-gray-200 p-6 flex flex-col gap-4">
                <div className="event-image">
                  <Image className='w-full' src={event.acf.cover_image || '/events/default-image.jpg'} alt={event.title.rendered} width={300} height={300} layout='responsive' />
                </div>
                <div className="section-block flex flex-col">
                  <span className='text-sm text-gray-500'>Date:</span>
                  <p className='text-base font-medium'>
                  {new Date(
                    `${event.acf.date.slice(0, 4)}-${event.acf.date.slice(4, 6)}-${event.acf.date.slice(6)}`
                  ).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                </div>
                <div className="section-block flex flex-col">
                  <span className='text-sm text-gray-500'>Time:</span>
                  <p className='text-base  font-medium'>{event.acf.time}</p>
                </div>
                <div className="section-block flex flex-col">
                  <span className='text-sm text-gray-500'>Duration:</span>
                  <p className='text-base font-medium'>{event.acf.duration}</p>
                </div>
                <div className="section-block flex flex-col">
                  <span className='text-sm text-gray-500'>Location:</span>
                  <p className='text-base font-medium'>{event.acf.location}</p>
                </div>
                <div className="section-block flex flex-col">
                  {event.acf.webinar_link && event.acf.webinar_link_button_title ? (
                    <a href={event.acf.webinar_link} className='w-full text-center font-medium text-sm text-white py-3 px-6 rounded-full bg-[--primary-colour]' target='_blank'>
                      {event.acf.webinar_link_button_title}
                    </a>
                  ) : event.acf.isactive === "Yes" ? (
                    <a href={event.acf.link} className='w-full text-center text-sm text-white py-3 px-6 rounded-full bg-[--primary-colour]'>Register for the event</a>
                  ) : (
                    <div className='w-full text-center text-sm text-white py-3 px-6 rounded-full bg-gray-400'>Event has Ended</div>
                  )}
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
  
  
  export default EventDetails;