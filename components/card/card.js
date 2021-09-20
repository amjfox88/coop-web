import Image from 'next/image'
import styles from './card.module.css'

export default function Card({title,text, image}) {
  return (
      <div className={styles.card}>
        {image && <div className={styles.cardImage}><Image src={image} alt={title} layout={"fill"} objectFit={"contain"}/></div>}
        {title ? <h4 className={styles.cardTitle}>{title}</h4> : ''}
        {text ? <p className={styles.cardText}>{text}</p> : ''}
      </div>
  )
}