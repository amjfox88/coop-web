import Card from "../card/card";
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from './card-description.module.css'

export default function CardDescription({cardTitle, cardText, linkedin, name, position, image}) {
  return (
      <div className={styles.cardDescription}>
        <div className={styles.cardImage}>
          {image && <Image src={image} objectFit={"cover"} layout={"fill"}/> }
        </div>
        <div className={styles.description}>
          { name ? <p className={styles.name}>{name}</p> : null}
          { position ? <span className={styles.position}>{position}</span> : null}
          { linkedin ? <Link href={linkedin}>
            <a className={styles.icon} target="_blank"><FontAwesomeIcon icon={faLinkedin} color={'#00D6DE'} size={'lg'}/></a>
          </Link> : null}
        </div>
      </div>
  )
}