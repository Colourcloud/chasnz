import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";

interface Post {
  id: number;
  title: { rendered: string };
  slug: string;
  excerpt: { rendered: string };
  _embedded?: { 'wp:featuredmedia'?: [{ source_url: string }] };
}

interface Event {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  excerpt: { rendered: string };
  acf: {
    cover_image: string;
    isactive: string;
  };
}

const isPost = (result: Post | Event): result is Post => {
  return (result as Post).excerpt !== undefined;
};

const Searchbox: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<'posts' | 'events'>('posts');
  const [isVisible, setIsVisible] = useState<boolean>(false); // State for visibility

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  useEffect(() => {
    const fetchData = async () => {
      if (query.length === 0) {
        setPosts([]);
        setEvents([]);
        return;
      }

      setIsLoading(true);

      try {
        const [postResponse, eventResponse] = await Promise.all([
          fetch(`https://cms.chasnz.org/wp-json/wp/v2/posts?search=${query}&_embed`),
          fetch(`https://cms.chasnz.org/wp-json/wp/v2/event?search=${query}&_embed`)
        ]);

        const postData = await postResponse.json();
        const eventData = await eventResponse.json();

        const eventsWithImages = await Promise.all(eventData.map(async (event: Event) => {
          if (event.acf.cover_image) {
            const imgResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/media/${event.acf.cover_image}`);
            const imgData = await imgResponse.json();
            event.acf.cover_image = imgData.source_url;
          }
          return event;
        }));

        setPosts(Array.isArray(postData) ? postData : []);
        setEvents(Array.isArray(eventsWithImages) ? eventsWithImages : []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      setIsLoading(false);
    };

    const debounceFetch = setTimeout(fetchData, 300);

    return () => clearTimeout(debounceFetch);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="navigation-search pl-8">
        <div className="mobile-toggle flex">
              <button>
                <IoSearch className="text-3xl" 
                onClick={() => setIsVisible(true)}
                />
              </button>
            </div>
      </div>

      {isVisible && (
        <>
          <div className="search-box-overlay fixed w-full h-screen bg-black/50 z-50 left-0 bottom-0 backdrop-blur-sm" onClick={() => setIsVisible(false)}></div>
          <div className="search-box-container-mobile z-50 flex justify-center items-center fixed left-0 right-0 bottom-0 top-0 w-full">
            <div className="search-container fixed w-full lg:w-2/4 h-screen z-50 flex items-center justify-center">
              <div className="search-box w-full h-screen bg-white rounded-xl">
                <div className='flex flex-1 border-b'>
                  <form action="" className='flex flex-1 items-center px-6 h-16'>
                    <IoIosSearch className='text-gray-400 text-2xl' />
                    <input 
                      type="text" 
                      placeholder="Search resources, events, and more" 
                      className='mx-3 flex-auto h-full' 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </form>
                  <button className='py-2 font-semibold px-2 mr-6 text-[9px] rounded-md self-center bg-gray-200 text-gray-700' onClick={() => setIsVisible(false)}>ESC</button>
                </div>
                <div className="tabs flex justify-around border-b">
                  <button
                    className={`py-2 px-4 w-2/4 text-black ${selectedTab === 'posts' ? 'border-b-2 border-[--primary-colour]' : ''}`}
                    onClick={() => setSelectedTab('posts')}
                  >
                    Resources
                  </button>
                  <button
                    className={`py-2 px-4 w-2/4 text-black ${selectedTab === 'events' ? 'border-b-2 border-[--primary-colour]' : ''}`}
                    onClick={() => setSelectedTab('events')}
                  >
                    Events
                  </button>
                </div>
                <div className="search-results min-h-60 max-h-[40rem] overflow-y-auto border-b flex">
                  {isLoading ? (
                    <span className='italic text-sm text-gray-400 font-light self-center text-center w-full'>Loading...</span>
                  ) : (selectedTab === 'posts' ? posts : events).length === 0 ? (
                    <span className='italic text-sm text-gray-400 font-light self-center text-center w-full'>No search results, start searching</span>
                  ) : (
                    <ul className='search-result-list flex flex-col gap-10 py-8 px-8 h-full'>
                      {(selectedTab === 'posts' ? posts : events).map((result) => (
                        <li key={result.id} className='text-sm text-gray-700'>
                          {selectedTab === 'posts' ? (
                            <a href={`/resources/${result.slug}`} target="_blank" rel="noopener noreferrer" className='flex flex-row gap-3 items-center'>
                              {isPost(result) && result._embedded?.['wp:featuredmedia'] && (
                                <Image
                                  src={result._embedded['wp:featuredmedia'][0].source_url}
                                  alt={result.title.rendered}
                                  width={100}
                                  height={100}
                                  className='object-fill'
                                />
                              )}
                              <div className='flex flex-col w-4/5'>
                                <h3 className='text-base'>{result.title.rendered}</h3>
                                {isPost(result) && (
                                  <p
                                    className="!text-sm font-light hidden md:block"
                                    dangerouslySetInnerHTML={{
                                      __html: `<span style="font-size: 0.2rem">${truncateText(result.excerpt.rendered, 150)}</span>`,
                                    }}
                                  />
                                )}
                              </div>
                            </a>
                          ) : (
                            <a href={`/events/${(result as Event).slug}`} target="_blank" rel="noopener noreferrer" className='flex flex-row gap-3 items-center'>
                              {(result as Event).acf.cover_image && (
                                <Image
                                  src={(result as Event).acf.cover_image || '/placeholder.jpg'}
                                  alt={result.title.rendered}
                                  width={100}
                                  height={100}
                                  className='object-fill'
                                />
                              )}
                              <div className='flex flex-col w-4/5'>
                                <h3 className='text-base'>{result.title.rendered}</h3>
                                <p
                                    className="!text-sm font-light hidden md:block"
                                    dangerouslySetInnerHTML={{
                                      __html: `<span style="font-size: 0.2rem">${truncateText(result.excerpt.rendered, 150)}</span>`,
                                    }}
                                  />
                              </div>
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="search-footer px-5 py-8">
                  {/* Additional footer content can go here */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Searchbox;
