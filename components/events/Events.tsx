'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface Event {
    id: number;
    date: string;
    slug: string; // Ensure the slug is part of your Event interface
    link: string;
    title: {
        rendered: string;
    };
    acf: {
        title: string;
        excerpt: string;
        date: string;
        time: string;
        location: string;
        cover_image: string;
        content: string;
    };
}

const Events = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('https://cms.chasnz.org/wp-json/wp/v2/event');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
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
            } catch (error) {
                console.error('Failed to fetch events:', error);
                setError('Failed to fetch events.');
            }
        };

        fetchEvents();
    }, []);

    if (error) {
        return <div>Error loading events: {error}</div>;
    }

    return (
        <section className='events-container py-20 lg:py-32'>
            <div className="content-wrapper">
                <div className="board-member-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {events.map((event) => (
                        <div key={event.id} className="event-card relative overflow-hidden">
                            <div className="event-card-image">
                                <Image src={event.acf.cover_image || '/events/default-image.jpg'} alt={event.title.rendered} width={600} height={600} />
                            </div>
                            <div className="event-information absolute bottom-0 p-6">
                                <div className='flex flex-col gap-3 text-white relative z-10'>
                                <span className="text-sm">
                                    {new Date(event.date).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                    </span>
                                    <h6 className='event-name text-2xl font-semibold'>{event.title.rendered}</h6>
                                    <Link href={`/events/${event.slug}`} className='flex flex-row items-center gap-2'>
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

export default Events;
