import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './sidebar.module.css'
import Link from "next/link";
import options from '/pages/api/navigation.json'
import logo from "../../public/coop-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar({show, move, closeSidebar}) {
  const router = useRouter();

  function closeMenu() {
    closeSidebar();
  }
  return (
      <>
      <div style={move} className={`${styles.menu} ${show ? styles.showMenu : ''}`}>
        <div className={styles.menuHeader}>
          <Image src={logo} alt="Coop Logo" width={100} height={20}/>
          <div className={styles.closeButton} onClick={closeMenu}>
            <span />
            <span />
          </div>
        </div>
        <nav className={styles.nav}>
          <ul>
            {
              options.sidebar.map((item) => (
                <li key={item.name} onClick={closeMenu} className={`${router.pathname === item.link ? styles.active : ""}`}>
                  <Link href={item.link}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className={styles.menuSocial}>
          <span>Síguenos en:</span>
          <Link href={"/"}><a><FontAwesomeIcon icon={faLinkedin} color={'#ffffff'} className={styles.icon}/></a></Link>
        </div>
      </div>
      </>
  )
}