import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from './header.module.css';
import logo from '/public/coop-logo.svg';
import Button from '/components/button/button';

import {useState} from "react";

export default function Header(props) {
  const [show, showMenu] = useState(true);
  const router = useRouter();

  function isPathActive(path) {
    return router.pathname === path ? styles.active : '';
  }

  function showSideMenu(e) {
    props.onBurgerClick(e);
  }

  return (
      <header className={styles.header}>
        <Link href="/"><a><Image src={logo} alt="Coop Logo" width={100} height={20} quality={100}/></a></Link>
        {show && <nav className={styles.nav}>
          <Link href="/como-funciona">
            <a className={isPathActive('/como-funciona')}>Cómo funciona</a>
          </Link>
          <Link href="/sobre-nosotros">
            <a className={isPathActive('/sobre-nosotros')}>Sobre nosotros</a>
          </Link>
          <Link href="/servicios">
            <a className={isPathActive('/servicios')}>Servicios presenciales</a>
          </Link>
          <Link href="/smart-health-coach">
            <a className={isPathActive('/smart-health-coach')}>Smart health coach</a>
          </Link>
          <Link href="/blog">
            <a className={isPathActive('/blog')}>Blog</a>
          </Link>
        </nav>}

        {show && <div className={styles.headerButton}>
          <Button url={"/solicita-demo"} text={"Solicita una demo"} theme={"light"}/>
        </div>}
        <div className={styles.burgerButton} onClick={showSideMenu}>
          <span />
          <span />
        </div>
      </header>
  )
}