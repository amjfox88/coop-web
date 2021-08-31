import styles from './banner.module.css'
import Button from '/components/button/button'
import Fade from "react-reveal/Fade";

export default function Banner(props) {
  const divStyle = {
    backgroundImage: 'url(' + props.backImage.src + ')',
  };
  return (
      <section className={styles.banner} style={divStyle}>
        <div className="left">
          <Fade bottom>
            <h1 className={styles.title}>{props.title}</h1>
          </Fade>
          {props.cta &&
          <Fade bottom>
            <Button url={props.cta.url} text={props.cta.text} size={"L"}/>
          </Fade>
          }
        </div>
        <div className="right">
        </div>
      </section>
  )
}