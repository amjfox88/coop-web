import {getSinglePost, getAllPostsWithSlug} from '../api/blog';
import PostBanner from "../../components/post-banner/post-banner";

export default function Post(data) {
  const image = data.featuredImage.node.sourceUrl;

  return (
      <>
        <PostBanner image={image} title={data.title}/>
        <section className="titleContent">
          <div dangerouslySetInnerHTML={{ __html: data.content }}/>
          <hr/>
        </section>

      </>
  )
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context);

  return {
    props: post
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.nodes.map(node => ({
      params: {slug: node.slug}
    })),
    fallback: false,
  }
}