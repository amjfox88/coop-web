import Link from "next/link";
import Image from 'next/image'
import claimLogo from "/public/coop-claim.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import styles from './footer.module.css'
import footerData from "/pages/api/footer.json";

export default function Footer () {
  return (
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.logo}>
            <Link href={"/"}><a><Image src={claimLogo} alt={"Logo Coop"} layout={"fill"} objectFit={"contain"} quality={100}/></a></Link>
          </div>
          <ul className={styles.socialIcons}>
            <li><FontAwesomeIcon icon={faLinkedin} color={'#262AF2'}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faTwitter} color={'#262AF2'}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faFacebook} color={'#262AF2'}></FontAwesomeIcon></li>
          </ul>
          <div className={styles.copyright}>© 2021 Coop Health. All rights reserved</div>
        </div>
        <div className={styles.linksColumns}>
          {footerData.map((col, index) => (
              <ul key={index} className={`column-${index+1}`}>
                {col.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url}>
                        <a>{link.title}</a>
                      </Link>
                    </li>
                ))}
              </ul>
          ))}
        </div>
      </footer>
  )
}