'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: number;
  title: { rendered: string };
  link: string;
  featured_media: number | null;
  content: { rendered: string };
  slug: string; // Add slug property
}

interface Media {
  source_url: string;
}

const Featuredresource: React.FC = () => {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [mediaUrls, setMediaUrls] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://cms.chasnz.org/wp-json/wp/v2/posts?_embed&categories=75&per_page=30'
        );
        const posts: Post[] = await response.json();

        // Log all fetched posts
        console.log('Fetched posts:', posts);

        // Set featured posts to state
        setFeaturedPosts(posts);

        // Fetch media URLs for featured posts
        const mediaPromises = posts.map(async post => {
          if (post.featured_media) {
            const mediaResponse = await fetch(
              `https://cms.chasnz.org/wp-json/wp/v2/media/${post.featured_media}`
            );
            const media: Media = await mediaResponse.json();
            return { id: post.featured_media, url: media.source_url };
          }
          return null;
        });

        const mediaResults = await Promise.all(mediaPromises);
        const mediaUrls = mediaResults.reduce((acc, media) => {
          if (media) {
            acc[media.id] = media.url;
          }
          return acc;
        }, {} as { [key: number]: string });

        setMediaUrls(mediaUrls);
      } catch (error) {
        console.error('Error fetching featured posts or media:', error);
      }
    };

    fetchPosts();
  }, []);

  const extractExcerpt = (content: string, wordLimit: number): string => {
    const plainText = content.replace(/<[^>]+>/g, ''); // Remove HTML tags
    const words = plainText.split(' ').slice(0, wordLimit);
    return words.join(' ') + (words.length === wordLimit ? '...' : '');
  };

  return (
    <section className="featured-resources pb-20 lg:pb-32">
      <div className="site-wrapper">
        <div className="featured-container">
          <h4 className="text-3xl md:text-4xl font-semibold text-[--text-colour]">
            Popular resources
          </h4>
          <div className="featured-grid mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPosts.map(post => (
              <div className="grid-card flex flex-col gap-4" key={post.id}>
                <div className="resource-image h-[250px] object-contain">
                  {post.featured_media && mediaUrls[post.featured_media] ? (
                    <Image
                      src={mediaUrls[post.featured_media]}
                      alt={post.title.rendered}
                      width={400}
                      height={300}
                      className="w-full h-full"
                    />
                  ) : (
                    <Image
                      src="/default-image.jpg" // Replace with your default image
                      alt="Default image"
                      width={225}
                      height={225}
                    />
                  )}
                </div>
                <div className="resource-information flex flex-col gap-2">
                  <h6 className="text-lg text-[--text-colour]">
                    {post.title.rendered}
                  </h6>
                  <p className="text-sm font-light text-[--text-colour]">
                    {extractExcerpt(post.content.rendered, 10)}
                  </p>
                  <Link
                    href={`/resources/${post.slug}`}
                    className="text-[--primary-colour] underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featuredresource;
