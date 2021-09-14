import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Banner from "../components/banner/banner";
import BannerCta from "../components/banner-cta/banner-cta";
import Card from "../components/card/card";
import bannerHome from "/public/images/banner-home.png"
import bannerCtaBackground from "/public/images/banner-cta-background.svg"
import ContentImage from "../components/content-image/content-image";
import Fade from "react-reveal/Fade";
import Image from 'next/image'
import Link from "next/link";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';

// install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function Home({services}) {
  return (
      <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner title={"Healthy people, better humans"} backImage={bannerHome} cta={{url: '/demo', text: 'Solicita una demo'}}/>
      {/*<MyApp></MyApp>*/}
      <main className={styles.main}>
        <section className={styles.titleContent}>
          <Fade bottom>
            <h2>La plataforma que entiende y cuida de la salud y bienestar de tus empleados</h2>
          </Fade>
          <Fade bottom>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh neque tortor scelerisque eget blandit metus turpis feugiat dis. Hendrerit magnis aliquet duis bibendum dolor mauris non sed proin. Nulla amet platea egestas sagittis sem. A tortor nunc maecenas quam mi. In faucibus hendrerit tristique amet, nec tristique sed nunc.</p>
          </Fade>
        </section>
        <section className="titleContent">
          <ContentImage reverse={false} priority={2} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh neque tortor scelerisque eget blandit metus turpis feugiat dis. Hendrerit magnis aliquet duis bibendum dolor mauris non sed proin. Nulla amet platea egestas sagittis sem. A tortor nunc maecenas quam mi. In faucibus hendrerit tristique amet, nec tristique sed nunc."} image={bannerHome} />
        </section>
        <section className={styles.titleContent}>
          <Fade bottom>
            <h2>¿Cómo entendemos la salud integral dentro de una empresa?</h2>
          </Fade>
        </section>
        <section className="titleContent">
          <ContentImage reverse={false} priority={2} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh neque tortor scelerisque eget blandit metus turpis feugiat dis. Hendrerit magnis aliquet duis bibendum dolor mauris non sed proin. Nulla amet platea egestas sagittis sem. A tortor nunc maecenas quam mi. In faucibus hendrerit tristique amet, nec tristique sed nunc."} image={bannerHome} />
          <ContentImage reverse={true} priority={2} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh neque tortor scelerisque eget blandit metus turpis feugiat dis. Hendrerit magnis aliquet duis bibendum dolor mauris non sed proin. Nulla amet platea egestas sagittis sem. A tortor nunc maecenas quam mi. In faucibus hendrerit tristique amet, nec tristique sed nunc."} image={bannerHome} />
          <ContentImage reverse={false} priority={2} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh neque tortor scelerisque eget blandit metus turpis feugiat dis. Hendrerit magnis aliquet duis bibendum dolor mauris non sed proin. Nulla amet platea egestas sagittis sem. A tortor nunc maecenas quam mi. In faucibus hendrerit tristique amet, nec tristique sed nunc."} image={bannerHome} />
          <ContentImage reverse={true} priority={2} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh neque tortor scelerisque eget blandit metus turpis feugiat dis. Hendrerit magnis aliquet duis bibendum dolor mauris non sed proin. Nulla amet platea egestas sagittis sem. A tortor nunc maecenas quam mi. In faucibus hendrerit tristique amet, nec tristique sed nunc."} image={bannerHome} />
        </section>
        <section className={`${styles.titleContent} ${styles.blueContent}`}>
          <Fade bottom>
            <h2>Experiencia y conocimiento como punto clave en nuestro equipo</h2>
          </Fade>
          <Fade bottom>
            <p>Todas las actividades y contenidos de la plataforma, están basados en programas creados por nuestros colaboradores y especialistas que avalan y certifican nuestro cómite de cientificos expertos.</p>
          </Fade>
          <Swiper
              spaceBetween={60}
              slidesPerView={2}
              onSwiper={(swiper) => console.log(swiper)}
              className={styles.swiper}
          >
            <SwiperSlide>
              <div className={styles.slideEmployee}>
                <Image className={styles.employeeImage} alt="Employee" src={"/"} width={467} height={374} />
                <h4 className={styles.employeeName}>Nombre del experto</h4>
                <p className={styles.employeePosition}>Cargo o aporte a la empresa</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideEmployee}>
                <Image className={styles.employeeImage} alt="Employee" src={"/"} width={467} height={374} />
                <h4 className={styles.employeeName}>Nombre del experto</h4>
                <p className={styles.employeePosition}>Cargo o aporte a la empresa</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideEmployee}>
                <Image className={styles.employeeImage} alt="Employee" src={"/"} width={467} height={374} />
                <h4 className={styles.employeeName}>Nombre del experto</h4>
                <p className={styles.employeePosition}>Cargo o aporte a la empresa</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideEmployee}>
                <Image className={styles.employeeImage} alt="Employee" src={"/"} width={467} height={374} />
                <h4 className={styles.employeeName}>Nombre del experto</h4>
                <p className={styles.employeePosition}>Cargo o aporte a la empresa</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className={styles.titleContent}>
          <div className={styles.center}>
            <Fade bottom>
              <h2>Servicios que ofrecemos</h2>
            </Fade>
            <Fade bottom>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi bibendum consectetur enim leo dui morbi consectetur amet. Viverra eu enim, cursus pellentesque habitasse sit.</p>
            </Fade>
          </div>
          <ul className={styles.services}>
            {services.map((srv) => (
                <li key={srv.id}><Card title={srv.title} text={srv.text}/></li>
            ))}
          </ul>
          <div className={styles.link}>
            <Link href={"/servicios"}>
              <a>Ver todos los servicios</a>
            </Link>
          </div>
        </section>
        <section>
          <BannerCta title={"Únete a la lista de empresas interesadas en mejorar el bienestar de sus empleados"} cta={{url: '/demo', text: 'Solicita una demo'}} backImage={bannerCtaBackground}/>
        </section>
      </main>

      </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      services: [
        {
          id: 1,
          title: 'Servicio #1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 2,
          title: 'Servicio #1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 3,
          title: 'Servicio #1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 4,
          title: 'Servicio #1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
      ]
    }, // will be passed to the page component as props
  }
}

export default Home;
