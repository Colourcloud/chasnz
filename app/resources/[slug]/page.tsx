import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/common/Navigation'
import { IoArrowBackOutline } from "react-icons/io5";
import Head from 'next/head';
import { Metadata } from 'next';


export async function generateStaticParams() {

  const res = await fetch(`https://chasnz.org/wp-json/wp/v2/posts`)
  const data = await res.json()

  return data.map((resource: any) => ({
    slug: resource.slug
  }))
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
  }
}

interface PostParams {
  params: {
    slug: string;
  };
}

const BlogPost: React.FC<{ params: { slug: string }, title?: string }> = async ({ params, title }) => {
  const reqUrl = `https://cms.chasnz.org/wp-json/wp/v2/posts?_embed&slug=${params.slug}`;
  const response = await fetch(reqUrl);
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
      <Navigation />
      <div className="article-header w-full h-[500px] bg-black"></div>
      <div className="article-content py-20 lg:py-40">
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
                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                <div className='flex flex-col gap-5 post-content' dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                {post.acf.download && (
                  <a href={post.acf.download} className='text-white text-sm font-medium py-3 px-6 rounded-full bg-[--primary-colour] self-start'>{post.acf.button_label}</a>
                )}
              </div>
          </div>
      </div>
    </>
  );
};

export async function generateMetadata({ params }: { params: PostParams }) {
  const reqUrl = `https://cms.chasnz.org/wp-json/wp/v2/posts?_embed&slug=${params.slug}`;
  const response = await fetch(reqUrl);
  const posts: Post[] = await response.json();
  const post = posts.length > 0 ? posts[0] : null;

  if (!post) {
    return {
      title: 'No post found',
    }
  }

  return {
    title: `Chasnz - ${post.title.rendered}`, // Set the title from post data
    description: post.excerpt.rendered, // Set the description from post data
  }
}

export default BlogPost;