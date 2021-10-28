import Head from 'next/head'
import {getSinglePost, getAllPostsWithSlug} from '../api/blog';
import PostBanner from "../../components/post-banner/post-banner";
import styles from '/styles/post.module.css';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";

export default function Post({post, siblingsPosts}) {
  const image = post.featuredImage ? post.featuredImage.node.sourceUrl : '';

  return (
      <>
        <Head>
          <title>{`Coop - ${post.title}`}</title>
        </Head>
        <PostBanner image={image} title={post.title}/>
        <section className="titleContent">
          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }}/>
          <hr/>
          <div className={styles.navigation}>
            {siblingsPosts.prev &&
              <div className={styles.prev}>
                <FontAwesomeIcon icon={faChevronLeft} color={'#262AF2'} className={styles.icon}/>
                <Link href={`/posts/${siblingsPosts.prev.slug}`} passHref>
                  <div>
                    <h5>{siblingsPosts.prev.title}</h5>
                    <a aria-label="Post anterior" className={styles.anchor}>Leer más</a>
                  </div>
                </Link>
              </div>
            }
              {siblingsPosts.next &&
              <div className={styles.next}>
                <Link href={`/posts/${siblingsPosts.next.slug}`} passHref>
                  <div>
                    <h5>{siblingsPosts.next.title}</h5>
                    <a aria-label="Post siguiente" className={styles.anchor}>Leer más</a>
                  </div>
                </Link>
                <FontAwesomeIcon icon={faChevronRight} color={'#262AF2'} className={styles.icon}/>
              </div>
              }
          </div>
        </section>
      </>
  )
}

export async function getServerSideProps(context) {
  const post = await getSinglePost(context);
  const allPosts = await getAllPostsWithSlug();
  const slugIndex = allPosts.nodes.findIndex((item) => {
    return item.slug === context.params.slug
  });
  const prev = allPosts.nodes[slugIndex - 1] ? {slug: allPosts.nodes[slugIndex - 1].slug, title: allPosts.nodes[slugIndex - 1].title} : '';
  const next = allPosts.nodes[slugIndex + 1] ? {slug: allPosts.nodes[slugIndex + 1].slug, title: allPosts.nodes[slugIndex + 1].title} : '';

  const siblingsPosts = {
    prev,
    next
  }

  return {
    props: {post, siblingsPosts}
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  let paths = allPosts.nodes.map(node => ({
    params: {slug: node.slug}
  }));
  return {
    paths,
    fallback: false,
  }
}