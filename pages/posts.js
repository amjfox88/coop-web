import styles from "/styles/posts.module.css";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons/faArrowCircleLeft";
import {getAllPosts} from "./api/blog";
import PostCard from "../components/post-card/post-card";

export default function Posts({allPosts}) {
  return (
      <>
        <section className="titleContent">
          <Link href={"/posts"}><a><FontAwesomeIcon icon={faArrowCircleLeft} color={'#262AF2'} className={styles.icon}/> Volver atrás</a></Link>
          <h2 className={styles.title}>Publicaciones</h2>
          <ul className={styles.postsList}>
            {
              allPosts.nodes.map((post) => {
                return (
                  <li key={post.slug}>
                    <PostCard
                        tag="2"
                        direction={"horizontal"}
                        title={post.title}
                        excerpt={post.excerpt}
                        image={post.featuredImage?.node.sourceUrl}
                        slug={`/posts/${post.slug}`}/>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </>
  )
}

export async function getStaticProps() {
  // See API to know how to fetch paginated posts
  const allPosts = await getAllPosts();

  return {
    props: {allPosts},
  }
}