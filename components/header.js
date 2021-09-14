import Link from 'next/link'
import styles from './header.module.css';
import Image from 'next/image'
import logo from '/public/coop-logo.png'
import Button from '/components/button/button'

export default function Header() {
  return (
      <header className={styles.header}>
        <Link href="/"><a><Image src={logo} alt="Coop Logo" width={100} height={20} /></a></Link>
        <nav className={styles.nav}>
          <Link href="/como-funciona">
            <a>Cómo funciona</a>
          </Link>
          <Link href="/sobre-nosotros">
            <a>Sobre nosotros</a>
          </Link>
          <Link href="/smart-health-coach">
            <a>Smart health coach</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </nav>

        <div>
          <Button url={"/demo"} text={"Solicita una demo"} theme={""}/>
        </div>
      </header>
  )
}