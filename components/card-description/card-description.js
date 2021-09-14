import Card from "../card/card";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from './card-description.module.css'

export default function CardDescription({cardTitle, cardText, linkedin, name, position}) {
  return (
      <div className={styles.cardDescription}>
        <Card title={cardTitle} text={cardText} />
        <div className={styles.description}>
          { name ? <p className={styles.name}>{name}</p> : null}
          { position ? <span className={styles.position}>{position}</span> : null}
          { linkedin ? <Link href={linkedin}>
            <a><FontAwesomeIcon icon={faLinkedin} color={'#00D6DE'} size={'lg'}/></a>
          </Link> : null}
        </div>
      </div>
  )
}