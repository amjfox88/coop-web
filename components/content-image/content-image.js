import styles from './content-image.module.css'
import Image from 'next/image'
import Fade from "react-reveal/Fade";

export default function ContentImage({title, priority, text, image, reverse}) {
  const CustomTag = `h${priority}`;
  return (
      <div className={`${styles.contentImage} ${reverse ? styles.reverse : ''} `}>
        <div className={styles.textBox}>
          {title && <Fade bottom>
            <CustomTag className={styles.title}>{title}</CustomTag>
          </Fade>}
          {text && <Fade bottom>
            <p className={styles.text}>{text}</p>
          </Fade>}
        </div>
        <div className={styles.imgBox}>
          <Fade right={!reverse} left={reverse}>
            <Image src={image} alt="image" layout={"fill"} objectFit={"cover"}/>
          </Fade>
        </div>
      </div>
  )
}