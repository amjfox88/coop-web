import styles from './banner-cta.module.css'
import Button from '/components/button/button'
import Link from "next/link";
import Fade from "react-reveal/Fade";

export default function BannerCta(props) {
  const background = {
    backgroundImage: 'url(' + props.backImage.src + ')',
  };
  return (
      <div className={styles.banner} style={background}>
          <Fade bottom>
            <h2 className={styles.title}>{props.title}</h2>
          </Fade>
          {props.cta ?
          <Fade bottom>
            <Button className={styles.button} url={props.cta.url} text={props.cta.text} size={"L"}/>
          </Fade> : ''
          }

        <Link href={"/servicios"}>
          <a className={styles.link}>{props.cta.link}</a>
        </Link>
      </div>
  )
}