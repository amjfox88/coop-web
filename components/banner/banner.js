import styles from './banner.module.css'
import Button from '/components/button/button'
import Fade from "react-reveal/Fade";

export default function Banner(props) {
  const divStyle = {
    backgroundImage: `url('${props.backImage ? props.backImage.src : ''}')`,
  };
  const className = props.theme === 'light' ? `${styles.banner} ${styles[props.theme]}` : `${styles.banner}`;
  return (
      <section className={className} style={props.backImage ? divStyle : null}>
        <div className="left">
          <Fade bottom>
            <h1 className={styles.title}>{props.title}</h1>
          </Fade>
          {props.text ? <Fade bottom><p>{props.text}</p></Fade> : <></>}
          {props.cta &&
          <Fade bottom>
            <Button url={props.cta.url} text={props.cta.text} size={"L"}/>
          </Fade>
          }
        </div>
        <div className={styles.right}>
          {props.children}
        </div>
      </section>
  )
}