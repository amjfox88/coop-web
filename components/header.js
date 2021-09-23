import Link from 'next/link'
import styles from './header.module.css';
import Image from 'next/image'
import logo from '/public/coop-logo.svg';
import Button from '/components/button/button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import {useState} from "react";

export default function Header(props) {
  const [show, showMenu] = useState(true);

  function showSideMenu(e) {
    props.onBurgerClick(e);
  }

  return (
      <header className={styles.header}>
        <Link href="/"><a><Image src={logo} alt="Coop Logo" width={100} height={20} /></a></Link>
        {show && <nav className={styles.nav}>
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