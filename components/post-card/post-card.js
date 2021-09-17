import Link from 'next/link';
import Image from 'next/image';
import styles from './post-card.module.css'

export default function PostCard({tag, title, excerpt, slug, image}) {
  const CustomTitle = `h${tag}`;

  return (
      <article className={styles.article}>
        {
          image && <div className={styles.imageCover}>
          <Link href={`/posts/${slug}`}>
            <a aria-label={title}>{image &&
            <Image
                objectFit='cover'
                layout='fill'
                alt={`Cover Image for ${title}`}
                src={image}
            />
            }</a>
          </Link>
        </div>
        }
        <div>
          <CustomTitle>{title}</CustomTitle>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} className={styles.excerpt}/>
          <Link href={`/posts/${slug}`}><a aria-label={title} className={styles.anchor}>Leer más</a></Link>
        </div>
      </article>
  )
}