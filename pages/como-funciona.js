import Banner from "../components/banner/banner";
import Image from 'next/image'
import Link from 'next/link'
import Fade from "react-reveal/Fade";
import ContentImage from "../components/content-image/content-image";
import BannerCta from "../components/banner-cta/banner-cta";
import styles from '/styles/como-funciona.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";

export default function ComoFunciona() {
  return (
      <>
        <Banner title={"Comprometidos con la salud"} backImage={"/images/banner-como-funciona.svg"} cta={{url: '/solicita-demo', text: 'Solicita una demo'}}>
            <Image src={"/images/iphoneX.svg"} alt="" layout={"fill"} objectFit={"contain"}/>
        </Banner>
        <section className="titleContent center">
          <Fade bottom>
            <h2>Análisis y aprendizaje constantes para brindar la mejor experiencia</h2>
          </Fade>
          <Fade bottom>
            <p>Para Coop la salud es la cualidad que nos permite desarrollar nuestro máximo potencial en beneficio propio y de la comunidad. Por eso se articula como un servicio integral que conecta a las personas con las organizaciones pero también con su propio autocuidado. ¿De qué manera? A través de la recogida y el análisis de datos anonimizados que nos permiten sofisticar la experiencia y aprender a lo largo del proceso. A más participación y uso, mejores resultados.</p>
          </Fade>
        </section>
        <section className="titleContentImage">
          <ContentImage
              reverse={true}
              priority={2}
              title={"Recogida de información anonimizada"}
              text={"El sistema recopila datos de los usuarios, sus experiencias y gustos que se aplicarán a la mejora de su bienestar. Analizamos las necesidades y los objetivos que se marcan, los cruzamos con las recomendaciones de nuestro comité científico… ¡y empieza la experiencia Coop! Un flujo de información constante donde el usuario se compromete, Coop aprende y acompaña, ofreciendo cada vez un mejor seguimiento gracias al algoritmo que analiza los datos en tiempo real."}
              image={"/images/como-funciona1.png"} />
          <ContentImage
              reverse={false}
              priority={2}
              title={"Un panel creciente de actividades"}
              text={"Ejercicio físico personalizado, alimentación inteligente, neurofelicidad individual y organizacional, bienestar emocional, descanso y sueño, higiene postural, salud visual, medioambiente… Son muchas las actividades y formatos —vídeos, streaming, infografías...— que tienen cabida en este sistema flexible que continúa integrando ejercicios a demanda de los responsables de RR. HH. de las empresas."}
              image={"/images/como-funciona2.png"} />
          <ContentImage
              reverse={true}
              priority={2}
              title={"Conocimiento, motor del cambio"}
              text={"Acceder a información actualizada es esencial para los responsables de las empresas que con Coop pueden conocer de primera mano las necesidades del equipo e implementar mejoras en consecuencia. ¿Cuántos usuarios están utilizando la herramienta? ¿Qué actividades tienen mayor aceptación? ¿Con qué objetivos? ¿Cuánta gente participa y en qué horarios? ¿Cómo afectan estos cambios a la productividad? ¿Y al absentismo? ¿Y al ROI…? Cada compañía puede configurar los indicadores que quiere medir para evaluarlos en tiempo real."}
              image={"/images/como-funciona3.png"} />
        </section>
        <section className="titleContent blueContent center">
          <Fade bottom>
            <h2>¿Conoces a nuestro Smart Health Coach?</h2>
          </Fade>
          <div className={`${styles.twoColumns}`}>
            <div>
              <Image src={"/images/mobile-health-coach.png"} layout={'fill'} objectFit={"contain"}/>
            </div>
            <div>
              <p>Más que un chatbot, un sistema de orientación y acompañamiento inteligente que se nutre de información anonimizada en tiempo real adaptándose a las necesidades y demandas de cada usuario. Así opera la Inteligencia Artificial cuando persigue la mejora de la calidad de vida de las personas.</p>
              <Link href={"/smart-health-coach"}><a>Ver más <FontAwesomeIcon icon={faArrowCircleRight} color={'#ffffff'} className={styles.icon}/></a></Link>
            </div>
          </div>
        </section>
        <section>
          <BannerCta
              title={"¿Eres una empresa? Únete a Coop y mejora la calidad de vida y bienestar de tus empleados"}
              cta={{url: '/solicita-demo', text: 'Solicita una demo'}}
              link={{url: '/contacto', text: 'Contacta con nosotros'}}
              backImage={"/images/banner-cta-background.svg"}/>
        </section>
      </>
  )
}