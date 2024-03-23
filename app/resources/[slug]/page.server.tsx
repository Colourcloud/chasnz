const reqUrl = 'https://chasnz.org/wp-json/wp/v2/';

interface StaticPropsParams {
    params: {
      slug: string;
    };
  }
  
  

  export async function getStaticProps({ params }: StaticPropsParams) {
  const { slug } = params;
  const res = await fetch(`${reqUrl}posts?_embed&slug=${slug}`);
  const postArray = await res.json();
  const post = postArray.length > 0 ? postArray[0] : null;

  return { props: { post } }; // These props are passed to your page component.
}
