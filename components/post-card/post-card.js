import Link from 'next/link';
import Image from 'next/image';
import styles from './post-card.module.css'

export default function PostCard({tag, title, excerpt, slug, externalLink, image, direction}) {
  const CustomTitle = `h${tag}`;

  return (
      <article className={`${styles.article} ${styles[direction]}`}>
        {
          image && <div className={styles.imageCover}>
            {!externalLink ? <Link href={slug}>
              <a aria-label={title}>
                <Image
                    objectFit='cover'
                    layout='fill'
                    alt={`Cover Image for ${title}`}
                    src={image}
                />
              </a>
            </Link> : <a href={externalLink} target="_blank" aria-label={title} rel="noreferrer">
              <Image
                  objectFit='cover'
                  layout='fill'
                  alt={`Cover Image for ${title}`}
                  src={image}
              />
            </a>}
        </div>
        }
        <div className={styles.postcardContent}>
          <CustomTitle className={styles.title}>{title}</CustomTitle>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} className={styles.excerpt}/>
          {!externalLink ?
              <Link href={slug}><a aria-label={title} className={styles.anchor}>Leer más</a></Link> :
              <a href={externalLink} target="_blank" aria-label={title} className={styles.anchor} rel="noreferrer">Leer más</a>
          }
        </div>
      </article>
  )
}