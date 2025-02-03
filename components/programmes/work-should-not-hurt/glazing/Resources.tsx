'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

// Define a type for the post
type Post = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  date: string;
  categories: number[];
  _embedded: {
    'wp:featuredmedia': Array<{
      source_url: string;
    }>;
  };
};

const categoryMapping: Record<number, string> = {
  3: 'Guidance',
  6: 'Posters',
  5: 'Research & Innovation',
  4: 'Toolbox Talks',
};

// Define the order of categories
const orderedCategories = ['Guidance', 'Posters', 'Research & Innovation', 'Toolbox Talks'];

const Resources: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://cms.chasnz.org/wp-json/wp/v2/posts?_embed&categories=2&per_page=100',
          { next: { revalidate: 3600 } }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: Post[] = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredPosts(posts);
    } else {
      const categoryID = Object.keys(categoryMapping).find(
        key => categoryMapping[Number(key)] === category
      );
      setFilteredPosts(
        posts.filter(post => post.categories.includes(Number(categoryID)))
      );
    }
  };

  return (
    <section className="resource-section py-20 lg:py-32 bg-white" id="resources">
      <div className="content-wrapper">
        <div className="resource-container">
          <div className="resource-heading">
            <h4 className="text-2xl font-semibold text-[--dark-blue]">
              Browse "Glazing" resources to get you site-ready
            </h4>
          </div>
        </div>
      </div>
      <div className="resource-filters bg-gray-100 w-full mt-10">
        <div className="content-wrapper">
          <div className="scroll-bar py-8 overflow-x-scroll flex items-center flex-row gap-6 lg:gap-16">
            <p className="font-medium text-sm text-gray-500 whitespace-nowrap">Filter by type:</p>
            <ul className="flex flex-row gap-6 lg:gap-16 text-gray-600 items-center">
              {['All', ...orderedCategories].map(category => (
                <li
                  key={category}
                  className={`whitespace-nowrap cursor-pointer ${selectedCategory === category ? 'text-blue-500' : ''}`}
                  onClick={() => handleFilterClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="resource-layout mt-10">
        <div className="content-wrapper">
          <div className="resource-grid">
            {filteredPosts.map(post => (
              <a href={`/resources/${post.slug}`} key={post.id}>
                <div className="resource-card flex flex-row items-center justify-between py-4 pr-0 lg:pr-6" data-category={post.categories.map(id => categoryMapping[id]).join(' ')}>
                  <div className="flex flex-row gap-3 items-center">
                    <div className="resource-image">
                      <Image
                        src={post._embedded['wp:featuredmedia'][0]?.source_url || '/placeholder.jpg'}
                        alt="Post Image"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="resource-card_information flex flex-col gap-2 p-1 md:p-6">
                      <div>
                      <h4 className="text-sm md:text-base lg:text-lg font-medium">
                          {post.title.rendered}
                        </h4>
                        <p
                          className="text-sm font-light hidden md:block"
                          dangerouslySetInnerHTML={{
                            __html: `<span style="font-size: 0.875rem">${truncateText(post.excerpt.rendered, 100)}</span>`,
                          }}
                        />
                      </div>
                      <span className="text-sm font-light">
                        {new Date(post.date).toLocaleDateString('en-US', {
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
