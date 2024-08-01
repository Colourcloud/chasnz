'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

type Event = {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  date: string;
  acf: {
    cover_image: string;
    excerpt: string;
    isactive: string;
  };
};

const Eventlist: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

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
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          'https://cms.chasnz.org/wp-json/wp/v2/event?_embed&per_page=30',
          { next: { revalidate: 3600 } }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data: Event[] = await response.json();

        const eventsWithImages = await Promise.all(data.map(async (event) => {
          if (event.acf.cover_image) {
            const imgResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/media/${event.acf.cover_image}`);
            const imgData = await imgResponse.json();
            event.acf.cover_image = imgData.source_url;
          }
          return event;
        }));

        setEvents(eventsWithImages);
        setFilteredEvents(eventsWithImages.slice(3)); // Skip the first 3 events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="resource-section py-20 bg-white" id="previous-events">
      <div className="content-wrapper">
        <div className="resource-container">
          <div className="resource-heading">
            <h4 className="text-2xl font-semibold">
              Browse previous events from CHASNZ
            </h4>
          </div>
        </div>
      </div>

      <div className="resource-layout mt-10">
        <div className="content-wrapper">
          <div className="resource-grid">
            {filteredEvents.map(event => (
              <Link href={`/events/${event.slug}`} key={event.id}>
                <div className="resource-card flex flex-row items-center justify-between py-4 pr-0 lg:pr-6">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="resource-image">
                      <Image
                        src={event.acf.cover_image || '/placeholder.jpg'}
                        alt="Event Image"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="resource-card_information flex flex-col gap-2 p-1 md:p-6">
                      <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-medium">
                          {event.title.rendered}
                        </h4>
                        <p className="text-sm font-light hidden md:block">
                          {truncateText(event.acf.excerpt, 100)}
                        </p>
                      </div>
                      <span className="text-sm font-light">
                        {new Date(event.date).toLocaleDateString('en-US', {
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

export default Eventlist;
