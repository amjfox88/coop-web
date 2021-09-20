import styles from './post-banner.module.css'
export default function PostBanner({title, image}) {
  const background = {
    backgroundImage: `url('${image ? image : ''}')`,
  };

  return (
      <>
        <div className={`${styles.banner} ${!image ? styles.noBackground : ''}`} style={image ? background : null}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </>
  )
}