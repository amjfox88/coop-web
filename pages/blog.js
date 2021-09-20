import Banner from "../components/banner/banner";
import PostCard from "../components/post-card/post-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import styles from '/styles/blog.module.css'
import {getNewsBlog} from './api/blog';
import Link from "next/link";

function Blog({news, posts}) {
  return (
      <>
        <Banner title={"Noticias y publicaciones"} backImage={"/images/blog-banner.png"}/>
        <section className="titleContent">
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Noticias</h2>
          </div>
          {
            news.nodes.length && <ul className={styles.postsList}>
              {
                news.nodes.map((n) => {
                  return (
                      <li key={n.slug}>
                        <PostCard
                            tag="5"
                            title={n.title}
                            excerpt={n.excerpt}
                            image={n.featuredImage.node.sourceUrl}
                            slug={n.slug}/>
                      </li>
                  )
                })
              }
            </ul>
          }
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Publicaciones</h2>
            <Link href={"/posts"}><a aria-label={"Publicaciones"}>Ver todas las publicaciones <FontAwesomeIcon icon={faArrowCircleRight} color={'#262AF2'} className={styles.icon}/></a></Link>
          </div>
          {
            posts.nodes.length && <ul className={styles.postsList}>
              {posts.nodes.map((post) => {
                return (
                    <li key={post.slug}>
                      <PostCard
                          tag="5"
                          title={post.title}
                          excerpt={post.excerpt}
                          image={post.featuredImage?.node.sourceUrl} slug={post.slug}/>
                    </li>
                )
              })}
            </ul>
          }
        </section>
      </>
  )
}

export async function getStaticProps() {
  const news = await getNewsBlog('noticias');
  const posts = await getNewsBlog('publicaciones');

  return {
    props: {news, posts},
  }
}

export default Blog;