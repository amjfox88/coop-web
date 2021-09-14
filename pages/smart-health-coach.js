import bannerImage from "../public/images/smart-health-coach-banner.png";
import img1 from "../public/images/mobiles.png";
import img2 from "../public/images/demo.png";
import Banner from "../components/banner/banner";
import ContentImage from "../components/content-image/content-image";
import Fade from "react-reveal/Fade";
import BannerCta from "../components/banner-cta/banner-cta";
import bannerCtaBackground from "../public/images/banner-cta-background.svg";

export default function SmartHealthCoach() {
  return (
      <>
        <Banner title={"AI potente y que acompaña al empleado"} backImage={bannerImage}/>
        <section className="titleContent center">
          <Fade bottom>
            <h2>El desarrollo y gestión de una plataforma inteligente conlleva una responsabilidad</h2>
          </Fade>
          <Fade bottom>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam nulla enim ipsum mi mi consequat eget ac. Consequat volutpat hendrerit mi in.</p>
          </Fade>
        </section>
        <section className="titleContent center blueContent">
          <h2 className="title">Este es Coop, nuestro Smart Health Coach</h2>
          <ContentImage reverse={true} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus tincidunt mi, imperdiet enim. Quam faucibus quam non tristique ornare mauris, elit. Sit semper massa ut at tempus justo justo aliquam. Proin ut diam magnis egestas ut scelerisque. Rhoncus mi massa lorem adipiscing. Risus, sit eget eleifend phasellus non varius pellentesque egestas. Ut arcu arcu, lectus ante duis vel laoreet quis. Ut at ipsum adipiscing euismod sit cursus mi augue pharetra."} image={img1} layout='fill'/>
          <ContentImage reverse={false} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus tincidunt mi, imperdiet enim. Quam faucibus quam non tristique ornare mauris, elit. Sit semper massa ut at tempus justo justo aliquam. Proin ut diam magnis egestas ut scelerisque. Rhoncus mi massa lorem adipiscing. Risus, sit eget eleifend phasellus non varius pellentesque egestas. Ut arcu arcu, lectus ante duis vel laoreet quis. Ut at ipsum adipiscing euismod sit cursus mi augue pharetra."} image={img2} layout='fill'/>
        </section>
        <section className="titleContent center blueContent">
          <h2 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla adipiscing elementum sed non, mauris commodo placerat nullam.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam nulla enim ipsum mi mi consequat eget ac. Consequat volutpat hendrerit mi in.</p>
        </section>
        <section>
          <BannerCta
              title={"Únete a la lista de empresas interesadas en mejorar el bienestar de sus empleados"}
              cta={{url: '/demo', text: 'Solicita una demo'}}
              link={{url: '', text: 'Contacta con nosotros'}}
              backImage={bannerCtaBackground}/>
        </section>
      </>
  )
}