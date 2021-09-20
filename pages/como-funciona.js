import Banner from "../components/banner/banner";
import Image from 'next/image'
import Fade from "react-reveal/Fade";
import ContentImage from "../components/content-image/content-image";
import BannerCta from "../components/banner-cta/banner-cta";

export default function ComoFunciona() {
  return (
      <>
        <Banner title={"Un servicio integral 360º"} backImage={"/images/banner-como-funciona.svg"} cta={{url: '/solicita-demo', text: 'Solicita una demo'}}>
          <Image src={"/images/iphoneX.svg"} alt="Iphone X" layout={"fill"} objectFit={"contain"}/>
        </Banner>
        <section className="titleContent">
          <Fade bottom>
            <h2>Cómo conseguimos, analizamos y ofrecemos la mejor experiencia</h2>
          </Fade>
          <Fade bottom>
            <p>Facilitamos las herramientas para que puedan afrontar los obstáculos comunes para el bienestar y cómo llevar una vida saludable y productiva tanto dentro como fuera del trabajo. A medida que vayan avanzando, obtendrán métricas en tiempo real relacionados con sus niveles de compromiso, bienestar y productividad gracias a nuestros algoritmos.</p>
          </Fade>
        </section>
        <section>
          <ContentImage
              reverse={true}
              priority={2}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh neque tortor scelerisque eget blandit metus turpis feugiat dis. Hendrerit magnis aliquet duis bibendum dolor mauris non sed proin. Nulla amet platea egestas sagittis sem. A tortor nunc maecenas quam mi. In faucibus hendrerit tristique amet, nec tristique sed nunc."}
              image={"/images/banner-home.png"} />
          <ContentImage
              reverse={false}
              priority={2}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh neque tortor scelerisque eget blandit metus turpis feugiat dis. Hendrerit magnis aliquet duis bibendum dolor mauris non sed proin. Nulla amet platea egestas sagittis sem. A tortor nunc maecenas quam mi. In faucibus hendrerit tristique amet, nec tristique sed nunc."}
              image={"/images/banner-home.png"} />
          <ContentImage
              reverse={true}
              priority={2}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh neque tortor scelerisque eget blandit metus turpis feugiat dis. Hendrerit magnis aliquet duis bibendum dolor mauris non sed proin. Nulla amet platea egestas sagittis sem. A tortor nunc maecenas quam mi. In faucibus hendrerit tristique amet, nec tristique sed nunc."}
              image={"/images/banner-home.png"} />
          <ContentImage
              reverse={false}
              priority={2}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh neque tortor scelerisque eget blandit metus turpis feugiat dis. Hendrerit magnis aliquet duis bibendum dolor mauris non sed proin. Nulla amet platea egestas sagittis sem. A tortor nunc maecenas quam mi. In faucibus hendrerit tristique amet, nec tristique sed nunc."}
              image={"/images/banner-home.png"} />
        </section>
        <section className="titleContent blueContent">
          <Fade bottom>
            <h2>Os presentamos a nuestro Smart Health Coach</h2>
          </Fade>
          <div className="two-columns">
            <aside></aside>
            <aside>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus tincidunt mi, imperdiet enim. Quam faucibus quam non tristique ornare mauris, elit. Sit semper massa ut at tempus justo justo aliquam. Proin ut diam magnis egestas ut scelerisque. Rhoncus mi massa lorem adipiscing. Risus, sit eget eleifend phasellus non varius pellentesque egestas. Ut arcu arcu, lectus ante duis vel laoreet quis. Ut at ipsum adipiscing euismod sit cursus mi augue pharetra.</p>
            </aside>
          </div>
        </section>
        <section>
          <BannerCta
              title={"Únete a la lista de empresas interesadas en mejorar el bienestar de sus empleados"}
              cta={{url: '/demo', text: 'Solicita una demo'}}
              link={{url: '/contacto', text: 'Contacta con nosotros'}}
              backImage={"/images/banner-cta-background.svg"}/>
        </section>
      </>
  )
}