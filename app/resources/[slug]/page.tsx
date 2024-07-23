import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/common/Navigation';
import { IoArrowBackOutline } from "react-icons/io5";
import { Metadata } from 'next';
import Head from 'next/head';
import ConsentForm from '@/components/common/ConsentForm';

// export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => ({
//   title: `Chasnz - ${params.slug.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`,
//   description: `${params.slug.replace(/-/g, ' ')}`,
// });


type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const url = `https://cms.chasnz.org/wp-json/wp/v2/posts?_embed&slug=${params.slug}`;
  const response = await fetch(url);
  const resMetadata = await response.json();

  // Assuming resMetadata is an array and we are interested in the first element
  if (resMetadata.length > 0 && resMetadata[0]) {
    return {
      title: resMetadata[0].title.rendered,
      description: resMetadata[0].excerpt.rendered, // Use excerpt for description
    };
  } else {
    throw new Error("No data received from the API");
  }
}


interface Post {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  content: { rendered: string };
  _embedded: {
    'wp:featuredmedia': [{
      source_url: string;
    }]
  };
  acf: {
    download: string;
    button_label: string
    ctaid: string | null
  }
}


const BlogPost: React.FC<{ params: { slug: string } }> = async ({ params }) => {
  const reqUrl = `https://cms.chasnz.org/wp-json/wp/v2/posts?_embed&slug=${params.slug}`;
  const response = await fetch(reqUrl, { next: { revalidate: 600 } });
  const posts: Post[] = await response.json();

  // Check if any posts are returned
  const post = posts.length > 0 ? posts[0] : null;

  if (!post) {
    console.error('No post found for the given slug:', params.slug);
    return <div>No post found</div>;
  }

  const featuredMediaUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <>
      <ConsentForm />
      <Navigation />
      <div className="article-header resource-header-background w-full h-[60px] xl:h-[100px] bg-black header-gradient relative"></div>
      <div className="article-content py-20 lg:py-32">
        <div className='content-wrapper'>
          <div className="article-wrapper max-w-[980px] mx-auto flex flex-col gap-6">
            <a href="javascript:window.history.back();" className='flex flex-row items-center gap-1 text-xl'><IoArrowBackOutline /> Back to Resources</a>
            <div className='w-full'>
              {featuredMediaUrl && (
                <Image src={featuredMediaUrl} alt="Featured Media" className='w-full' height={800} width={600} />
              )}
            </div>
            <span className="text-base text-[#9C9C9C]">
              {new Date(post.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <h1 className='text-3xl lg:text-4xl font-semibold'>{post.title.rendered}</h1>
            <div className='flex flex-col gap-6 post-content' dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>

            <div className={`hs-web-interactive-inline text-white text-sm font-medium py-3 px-6 rounded-full bg-[--primary-colour] self-start`} data-hubspot-wrapper-cta-id={post.acf.ctaid}>
              {post.acf.download && (
                <a 
                  href={post.acf.download} 
                  className={`hs-inline-web-interactive-${post.acf.ctaid}`} 
                  target="_blank" 
                  rel="noopener" 
                  data-hubspot-cta-id={post.acf.ctaid}
                >
                  {post.acf.button_label}
                </a>
              )}
            </div>

            
            {/* <div className="hs-web-interactive-inline" data-hubspot-wrapper-cta-id="169009420371">
              {post.acf.download && (
                <a href={post.acf.download} className='text-white text-sm font-medium py-3 px-6 rounded-full bg-[--primary-colour] self-start' target="_blank" rel="noopener" className="hs-inline-web-interactive-169009420371   " data-hubspot-cta-id="169009420371">{post.acf.button_label}</a>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export async function generateStaticParams() {
  const reqUrl = `https://cms.chasnz.org/wp-json/wp/v2/posts?slug`; // Fetch all slugs

  const response = await fetch(reqUrl);
  const posts: { slug: string }[] = await response.json(); // Get an array of objects with just "slug" property

  // Return an array of objects with the "params" key containing the slug
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}


export default BlogPost;

