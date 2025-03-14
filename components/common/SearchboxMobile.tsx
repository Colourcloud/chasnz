import { IoSearch } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image';

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

interface Programme {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  acf: {
    title: string;
    blurb: string;
    content: string;
    image: string; // Assuming image ID is stored here
  };
}

const isPost = (result: Post | Event | Programme): result is Post => {
  return (result as Post).excerpt !== undefined;
};

const Searchbox: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [researchPosts, setResearchPosts] = useState<Post[]>([]);
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<'posts' | 'events' | 'research' | 'programmes'>('posts');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const containsEvent = (url: string) => url.includes('/events/');

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
        setResearchPosts([]);
        setProgrammes([]);
        return;
      }

      setIsLoading(true);

      try {
        const [postResponse, eventResponse, videoWebinarResponse, researchResponse, programmeResponse] = await Promise.all([
          fetch(`https://cms.chasnz.org/wp-json/wp/v2/posts?search=${query}&_embed&per_page=100&categories_exclude=74,5,12,17,22,32,37,42,47,52,57,63,68,28,72`),
          fetch(`https://cms.chasnz.org/wp-json/wp/v2/event?search=${query}&_embed&per_page=20`),
          fetch(`https://cms.chasnz.org/wp-json/wp/v2/posts?search=${query}&categories=74&_embed&per_page=20`),
          fetch(`https://cms.chasnz.org/wp-json/wp/v2/posts?search=${query}&categories=5,12,17,22,32,37,42,47,52,57,63,68,28,72&_embed&per_page=100`),
          fetch(`https://cms.chasnz.org/wp-json/wp/v2/programme?search=${query}&_embed&per_page=100`)
        ]);

        const postData = await postResponse.json();
        const eventData = await eventResponse.json();
        const videoWebinarData = await videoWebinarResponse.json();
        const researchData = await researchResponse.json();
        const programmeData = await programmeResponse.json();

        // Process events to ensure they have cover images
        const eventsWithImages = await Promise.all(eventData.map(async (event: Event) => {
          if (event.acf.cover_image) {
            const imgResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/media/${event.acf.cover_image}`);
            const imgData = await imgResponse.json();
            event.acf.cover_image = imgData.source_url;
          }
          return event;
        }));

        const programmesWithImages = await Promise.all(programmeData.map(async (programme: Programme) => {
          if (programme.acf.image) {
            const imgResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/media/${programme.acf.image}`);
            const imgData = await imgResponse.json();
            programme.acf.image = imgData.source_url;
          }
          return programme;
        }));

        // Process webinars to ensure they have featured images
        const webinarsWithImages = videoWebinarData.map((webinar: Post) => {
          if (webinar._embedded?.['wp:featuredmedia']) {
            (webinar as any).acf = { cover_image: webinar._embedded['wp:featuredmedia'][0].source_url };
          }
          return webinar;
        });

        setPosts(postData);
        setEvents([...eventsWithImages, ...webinarsWithImages]);
        setResearchPosts(researchData);
        setProgrammes(programmeData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
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

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('fixed-body');
    } else {
      document.body.classList.remove('fixed-body');
    }
  }, [isVisible]);

  return (
    <>
      <div className="navigation-search pl-8">
        <div className="mobile-toggle flex">
          <button>
            <IoSearch className="text-3xl" onClick={() => setIsVisible(true)} />
          </button>
        </div>
      </div>

      {isVisible && (
        <>
          <div className="search-box-overlay fixed w-full h-screen bg-black/50 z-50 left-0 bottom-0 backdrop-blur-sm" onClick={() => setIsVisible(false)}></div>
          <div className="search-container fixed w-full lg:w-2/4 h-auto z-50 left-[50%] translate-x-[-50%] bottom-[50%] flex items-center justify-center mx-auto top-[50%]">
            <div className="search-box w-full h-auto bg-white rounded-xl">
              <div className='flex flex-1'>
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
              <div className="tabs flex overflow-x-scroll gap-4 border-b">
                <button className={`py-3 px-4 text-black ${selectedTab === 'programmes' ? 'border-b-2 border-[--primary-colour]' : ''}`} onClick={() => setSelectedTab('programmes')}>Programmes</button>
                <button className={`py-3 px-4 text-black ${selectedTab === 'posts' ? 'border-b-2 border-[--primary-colour]' : ''}`} onClick={() => setSelectedTab('posts')}>Resources</button>
                <button className={`py-3 px-4 text-black ${selectedTab === 'research' ? 'border-b-2 border-[--primary-colour]' : ''}`} onClick={() => setSelectedTab('research')}>Research</button>
                <button className={`py-3 px-4 text-black text-nowrap ${selectedTab === 'events' ? 'border-b-2 border-[--primary-colour]' : ''}`} onClick={() => setSelectedTab('events')}>Webinars & Events</button>
              </div>
              <div className="search-results min-h-60 max-h-[25rem] overflow-y-auto border-b flex">
                {isLoading ? (
                  <span className='italic text-sm text-gray-400 font-light self-center text-center w-full'>Loading...</span>
                ) : (selectedTab === 'posts' ? posts : selectedTab === 'events' ? events : selectedTab === 'research' ? researchPosts : programmes).length === 0 ? (
                  <div className='flex flex-col items-center w-full justify-center gap-3'>
                    <Image src="/common/road-block.png" alt="Not found" width={100} height={200} className="mx-auto" />
                    <span className='italic text-sm text-gray-400 font-light self-center text-center w-full'>No search results, start searching</span>
                  </div>
                ) : (
                  <ul className='search-result-list flex flex-col gap-10 py-8 px-8 h-full'>
                    {(selectedTab === 'posts' ? posts : selectedTab === 'events' ? events : selectedTab === 'research' ? researchPosts : programmes).map((result) => (
                      <li key={result.id} className='text-sm text-gray-700'>
                        {selectedTab === 'posts' ? (
                          <a href={`/resources/${result.slug}`} target="_blank" rel="noopener noreferrer" className='flex flex-row gap-3 items-center'>
                            {isPost(result) && result._embedded?.['wp:featuredmedia'] && (
                              <Image src={result._embedded['wp:featuredmedia'][0].source_url} alt={result.title.rendered} width={64} height={64} className='object-fill' />
                            )}
                            <div className='flex flex-col w-4/5'>
                              <h3 className='text-base'>{result.title.rendered}</h3>
                              {isPost(result) && (
                                <p className="!text-sm font-light hidden md:block" dangerouslySetInnerHTML={{ __html: `<span style="font-size: 0.2rem">${truncateText(result.excerpt.rendered, 150)}</span>` }} />
                              )}
                            </div>
                          </a>
                        ) : selectedTab === 'events' ? (
                          <a href={`/${(result as Event).acf.isactive ? 'events' : 'resources'}/${result.slug}`} target="_blank" rel="noopener noreferrer" className='flex flex-row gap-3 items-center'>
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
                              <h3 className='text-base flex flex-row gap-2'>
                                {result.title.rendered}
                                {containsEvent(`/${(result as Event).acf.isactive ? 'events' : 'resources'}/${result.slug}`) && (
                                  <span className='text-xs font-medium text-white bg-[--primary-colour] py-1 px-3 self-start rounded-full'>Event</span>
                                )}
                              </h3>
                              <p
                                className="!text-sm font-light hidden md:block"
                                dangerouslySetInnerHTML={{
                                  __html: `<span style="font-size: 0.2rem">${truncateText(result.excerpt.rendered, 150)}</span>`,
                                }}
                              />
                            </div>
                          </a>
                          ) : selectedTab === 'programmes' ? (
                            // Define how to display programmes
                            <a href={`${result.slug}`} target="_blank" rel="noopener noreferrer" className='flex flex-row gap-3 items-center'>
                              {(result as Programme).acf.image && (
                              <Image
                                src={(result as Programme).acf.image || '/placeholder.jpg'}
                                alt={result.title.rendered}
                                width={100}
                                height={100}
                                className='object-cover'
                              />
                            )}
                              <div className='flex flex-col w-4/5'>
                                <h3 className='text-base'>{result.title.rendered}</h3>
                                <p className="!text-sm font-light md:block" dangerouslySetInnerHTML={{ __html: `<span style="font-size: 0.9rem">${truncateText(result.excerpt.rendered, 150)}</span>` }} />
                              </div>
                            </a>
                          ) : (
                          <a href={`/resources/${result.slug}`} target="_blank" rel="noopener noreferrer" className='flex flex-row gap-3 items-center'>
                            {isPost(result) && result._embedded?.['wp:featuredmedia'] && (
                              <Image src={result._embedded['wp:featuredmedia'][0].source_url} alt={result.title.rendered} width={100} height={100} className='object-fill' />
                            )}
                            <div className='flex flex-col w-4/5'>
                              <h3 className='text-base'>{result.title.rendered}</h3>
                              {isPost(result) && (
                                <p className="!text-sm font-light hidden md:block" dangerouslySetInnerHTML={{ __html: `<span style="font-size: 0.2rem">${truncateText(result.excerpt.rendered, 150)}</span>` }} />
                              )}
                            </div>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Searchbox;
