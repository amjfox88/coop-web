import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Banner from "../components/banner/banner";
import BannerCta from "../components/banner-cta/banner-cta";
import Card from "../components/card/card";
import ContentImage from "../components/content-image/content-image";
import Fade from "react-reveal/Fade";
import Image from 'next/image'
import Link from "next/link";
import {getEmployees, getServices} from './api/dataProvider';
import imgBanner from '/public/images/banner-home.jpg'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css';


function Home({services, employees}) {
  return (
      <>
        <Head>
          <title>Coop</title>
        </Head>
        <Banner title={"Healthy people, better humans"} backImage={imgBanner.src}
                cta={{url: '/solicita-demo', text: 'Solicita una demo'}}/>
        <section className="titleContent center">
          <Fade bottom>
            <h2>La salud es la cualidad que nos permite desarrollar nuestro máximo potencial en beneficio propio y de la
              comunidad</h2>
          </Fade>
          <Fade bottom>
            <p>Sin talento no hay negocio, sin equipo no hay proyecto, sin bienestar no hay futuro. Lo dicen las cifras,
              no nosotros. Un sinfín de estudios han demostrado que la implementación de programas encaminados a
              fomentar el bienestar y la salud de las personas dentro de las empresas tiene un resultado directo en el
              negocio. Mejorar su rendimiento cognitivo y físico, buscando el equilibrio entre lo profesional y lo
              personal, es el principal objetivo de Coop, la plataforma de Inteligencia Artificial que nace para
              revolucionar lo que entendemos por salud corporativa. Bienvenido a la era de la empresa comprometida y del
              empleado involucrado. Bienvenido a Coop.</p>
          </Fade>
        </section>
        <section className="titleContent">
          <ContentImage
              reverse={false}
              priority={2}
              title={"La salud y el bienestar, conceptos 360"}
              text={"Hablar de salud y bienestar es ir más allá de lo físico. Son conceptos transversales que también conectan con lo mental, lo emocional , lo social, lo espiritual y, por supuesto, lo profesional. Al menos así es como entendemos el cuidado en Coop: como una responsabilidad de los líderes que, de forma proactiva y positiva, deciden cuidarse para cuidar. De este compromiso nacen una serie de programas personalizados que inciden sobre cuestiones como la felicidad individual y organizativa, la actividad física, la alimentación inteligente o el descanso. Porque si la salud y el bienestar repercuten en todas las facetas de la vida, ¿por qué entenderlos de forma independiente?"}
              image="/images/content-home1.jpg"/>
        </section>
        <section className="titleContent center">
          <Fade bottom>
            <h2>¿Cómo abordamos la salud y el bienestar de manera integral?</h2>
          </Fade>
        </section>
        <section className="titleContent">
          <ContentImage
              reverse={true}
              priority={2}
              title={"Actividad física y prescripción de ejercicio"}
              text={"Mediante cuestionarios y test inspiramos, controlamos su buen desarrollo y realizamos el seguimiento periódico de actividades físicas que permiten la mejora de capacidades y la adquisición de rutinas saludables. ¡Mens sana in corpore sano!"}
              image="/images/content-home2.jpg"/>
          <ContentImage
              reverse={false}
              priority={2}
              title={"Neurofelicidad individual y organizativa"}
              text={"La felicidad no es una utopía. Tampoco un estado permanente que nos coloca una sonrisa en la cara y una frase optimista en la boca. En Coop la entendemos como un estado de calidad mental que nos ayuda a enfrentarnos a los desafíos diarios con entereza y determinación. Trabajamos habilidades para promover los pensamientos y emociones positivas y, así, favorecer el equilibrio mental y físico."}
              image="/images/content-home3.jpg"/>
          <ContentImage
              reverse={true}
              priority={2}
              title={"Alimentación inteligente"}
              text={"A aquellos que dicen que “somos lo que comemos” no les falta razón. La alimentación tiene dos caras: la ingesta de nutrientes para garantizar el rendimiento físico y mental, ¡pero también el disfrute! Ambas van de la mano y pueden trabajarse desde dinámicas que buscan contagiar e inculcar buenos hábitos. Cuidemos lo que comemos y cuidaremos también de quiénes somos."}
              image="/images/content-home4.jpg"/>
          <ContentImage
              reverse={false}
              priority={2}
              title={"Descanso y sueño, fuente de salud"}
              text={"La calidad del sueño es absolutamente esencial para la reparación y recuperación del organismo. Pero el sueño no solo se activa en la cama al caer la noche, sino que debe trabajarse durante la vigilia a través de la aplicación de una serie de técnicas con el objetivo de llegar al nido en las mejores condiciones. ¡Buenas noches!"}
              image="/images/content-home5.jpg"/>
          <ContentImage
              reverse={true}
              priority={2}
              title={"Mindfulness, hacia la consciencia plena"}
              text={"¿Has probado los beneficios de esta técnica milenaria? Su objetivo es lograr un profundo estado de atención al presente separando los juicios de las sensaciones, los sentimientos de los pensamientos. A través de la práctica de mindfulness se mejora la memoria, la capacidad de concentración, la autoconciencia y la inteligencia emocional."}
              image="/images/content-home6.jpg"/>
          <ContentImage
              reverse={false}
              priority={2}
              title={"Cultura y talento corporativo"}
              text={"La salud corporativa construye cultura de empresa y ayuda a preservar el talento in-house. Pero la cultura no nace por generación espontánea: se trabaja, se cuida, se articula a través de diferentes técnicas y herramientas testadas. ¿El resultado? Un entorno de trabajo en el que las personas están bien, se sienten equilibradas en las diferentes facetas de la vida y, por ende, también trabajan mejor."}
              image="/images/content-home7.jpg"/>
        </section>
        <section className="titleContent blueContent center">
          <Fade bottom casacade>
            <h2>Experiencia y conocimiento como punto clave en nuestro equipo</h2>
            <p>Coop tiene la base tecnológica, pero el alma humana. Todas las actividades y contenidos de la plataforma
              están basados en programas creados por nuestros colaboradores y especialistas, y avalados por nuestro
              comité de científicos expertos. Conócelos.</p>
          </Fade>
          <Swiper
              spaceBetween={24}
              slidesPerView="auto"
              breakpoints={{
                480: {
                  spaceBetween: 60,
                }
              }}
              className={styles.swiper}
          >
            {employees.length ? employees.map((emp) => (
                <SwiperSlide key={emp.name} className={styles.slideEmployee}>
                  <div>
                    <div className={styles.slideImageContainer}>
                      <Image className={styles.employeeImage} alt={emp.name} src={emp.image} layout={"fill"}
                             objectFit={"cover"}/>
                    </div>
                    <h4 className={styles.employeeName}>{emp.name}</h4>
                    <p className={styles.employeePosition}>{emp.position}</p>
                  </div>
                </SwiperSlide>
            )) : <Link href={"/sobre-nosotros"}><a>Conoce al equipo</a></Link>}
          </Swiper>
        </section>
        <section className="titleContent center">
          <div>
            <Fade bottom>
              <h2>Acompañamiento integral</h2>
            </Fade>
          </div>
          <Fade bottom cascade>
          <ul className={styles.services}>
            {services.map((srv) => (
                <li key={srv.title}><Card title={srv.title} text={srv.text} image={srv.image}/></li>
            ))}
          </ul>
            </Fade>
          <div className={styles.link}>
            <Link href={"/servicios"}>
              <a>Ver todos los servicios presenciales</a>
            </Link>
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

export async function getStaticProps() {
  const employees = await getEmployees();
  const services = await getServices();

  return {
    props: {
      services,
      employees
    }
  }
}

export default Home;
