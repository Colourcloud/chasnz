import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define TypeScript interfaces for the expected API response shapes
interface Post {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
}

interface PostParams {
  params: {
    slug: string;
  };
}

const reqUrl = 'https://chasnz.org/wp-json/wp/v2/';

const BlogPost: React.FC<{ params: { slug: string } }> = async ({ params }) => {
  const req = await fetch(`${reqUrl}posts?_embed&slug=${params.slug}`);
  const post: Post[] = await req.json();

  const posts = post.length > 0 ? post[0] : null;

  if (posts === null) {
    console.error('No post found for the given slug:', params.slug);
    return <div>No post found</div>;
  }

  return (
    <div>
      <h1>{posts.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}></div>
      <span className="text-sm font-light">
        {new Date(posts.date).toLocaleDateString('en-US', {
          year: 'numeric',
           month: 'long',
           day: 'numeric',
         })}
      </span>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${reqUrl}posts`);
  const posts: Post[] | undefined = await res.json();

  if (!Array.isArray(posts)) {
    console.error('Expected an array of posts but got:', posts);
    return { paths: [], fallback: true };
  }

  const paths: PostParams[] = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export default BlogPost;
