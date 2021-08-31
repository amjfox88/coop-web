import Link from "next/link";
import styles from './button.module.css'

export default function Button({text, url, theme, size}) {
  const themeButton = theme === 'light' ? styles.light : styles.dark
  return (
      <Link href={url}>
        <a className={`${styles.button} ${themeButton} ${styles[size]}`}>{text}</a>
      </Link>
  )
}