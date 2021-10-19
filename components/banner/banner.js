import styles from './banner.module.css'
import { useEffect, useState } from 'react'
import Button from '/components/button/button'
import Fade from "react-reveal/Fade";

export default function Banner(props) {
  const [height, setHeight] = useState();
  const divStyle = {
    backgroundImage: `url('${props.backImage ? props.backImage : ''}')`,
  };
  const className = props.theme === 'light' ? `${styles.banner} ${styles[props.theme]}` : `${styles.banner}`;

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  return (
      <>
        <style jsx>{`
          @media (max-width: 480px) {
            .${className} {
              height: calc(${height}px - (68px * 2));
            }
          }
        `}</style>
      <section className={className} style={props.backImage ? divStyle : null}>
        <div className={styles.left}>
          <Fade bottom>
            <h1 className={styles.title}>{props.title}</h1>
          </Fade>
          {
            props.text &&
              <Fade bottom>
                {
                  !Array.isArray(props.text) ? <p>{props.text}</p> : props.text.map((txt, index) => {
                    return (<p key={index}>{txt}</p>)
                  })
                }
              </Fade>
          }
          {props.cta &&
              <div>
                <Fade bottom>
                  <Button url={props.cta.url} text={props.cta.text} size={"L"}/>
                </Fade>
              </div>
          }
        </div>
        <div className={styles.right}>
          <Fade right cascade>
            {props.children}
          </Fade>
        </div>
      </section>
        </>
  )
}