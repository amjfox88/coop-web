import styles from './banner-cta.module.css'
import Button from '/components/button/button'
import Link from "next/link";
import Fade from "react-reveal/Fade";

export default function BannerCta(props) {
  const background = {
    backgroundImage: 'url(' + props.backImage + ')',
  };
  return (
      <div className={styles.banner} style={background}>
          <Fade bottom>
            <h4 className={styles.title}>{props.title}</h4>
          </Fade>
          { props.text ? <Fade bottom>
            <p className={styles.text}>{props.text}</p>
          </Fade> : null}
          {props.cta ?
          <Fade bottom>
            <Button className={styles.button} url={props.cta.url} text={props.cta.text} size={"L"}/>
          </Fade> : ''
          }
        { props.link ? <Link href={props.link.url}>
          <a className={styles.link}>{props.link.text}</a>
        </Link> : null}
      </div>
  )
}