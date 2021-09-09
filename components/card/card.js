import Link from "next/link";
import styles from './card.module.css'

export default function Card({title,text}) {
  return (
      <div className={styles.card}>
        {title ? <h3 className={styles.cardTitle}>{title}</h3> : ''}
        {text ? <p className={styles.cardText}>{text}</p> : ''}
      </div>
  )
}