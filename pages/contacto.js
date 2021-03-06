import Banner from "../components/banner/banner";
import Link from "next/link";
import BannerCta from "../components/banner-cta/banner-cta";
import styles from '/styles/contacto.module.css'
import Head from "next/head";

export default function Contacto() {
  return (
      <>
        <Head>
          <title>Coop - Contacto</title>
        </Head>
        <Banner title={"Contacta con nosotros"} backImage={"/images/banner-contacto.jpg"}/>
        <section className={`titleContent ${styles.emailInfo}`}>
          <div>
            <h3>¿Tiene alguna pregunta, comentario o consulta?</h3>
          </div>
          <div>
            <h5>Colaboraciones</h5>
            <p>Explora las oportunidades de colaborar con nosotros.</p>
            <Link href="mailto:info@coophealth.es">
              <a>info@coophealth.es</a>
            </Link>
            <h5>Prensa</h5>
            <p>Nuestro equipo de comunicación te responderá todas las dudas que tengas sobre nuestra plataforma en los medios.</p>
            <Link href="mailto:prensa@coophealth.es">
              <a>prensa@coophealth.es</a>
            </Link>
          </div>
        </section>
        <BannerCta
            title={"Únete a la lista de empresas interesadas en mejorar el bienestar de sus empleados"}
            cta={{url: '/solicita-demo', text: 'Solicita una demo'}}
            backImage={"/images/banner-cta-background.svg"}
        />
      </>
  )
}