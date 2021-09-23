import Banner from "../components/banner/banner";
import ContentImage from "../components/content-image/content-image";
import Fade from "react-reveal/Fade";
import BannerCta from "../components/banner-cta/banner-cta";

export default function SmartHealthCoach() {
  return (
      <>
        <Banner title={"La AI que cuida y acompaña al empleado"} backImage={"/images/smart-health-coach-banner.png"}/>
        <section className="titleContent center">
          <Fade bottom>
            <h2>Un gran poder conlleva una gran responsabilidad</h2>
          </Fade>
          <Fade bottom>
            <p>...Y el desarrollo y gestión de una plataforma inteligente lo es. Conscientes de ello, en Coop recopilamos datos de forma completamente anonimizada para que esta información pueda aportar valor no solo a nivel individual sino también de manera colectiva. Cuantos más seamos y más utilicemos la plataforma y sus actividades, más estaremos contribuyendo a transformar la vida dentro de las empresas... Y ahí entra nuestro Smart Health Coach.</p>
          </Fade>
        </section>
        <section className="titleContent center blueContent">
          <h2 className="title">Este es Coop, nuestro Smart Health Coach</h2>
          <ContentImage
              reverse={true}
              text={"Coop es un nuevo paradigma del bienestar individual y corporativo que acompaña y ayuda a las personas a conseguir el equilibrio mental y físico necesario para vivir mejor y para incrementar el rendimiento y la productividad."}
              image={"/images/mobiles.png"}
              layout='fill'/>
          <ContentImage
              reverse={false}
              text={"¿La clave? El conocimiento. Coop acompaña a las personas y a las organizaciones de las que estas forman parte a través de la formulación de preguntas y la recogida de datos que se analizan en profundidad para extraer patrones aplicables a diferentes situaciones. Frente a los chatbots simples que reaccionan a comandos y palabras clave previamente preparados, esta nueva era de la inteligencia artificial que ofrece una experiencia de mayor calidad, más natural y humana."}
              image={"/images/demo.png"}
              layout='fill'/>
        </section>
        <section className="titleContent center blueContent">
          <Fade bottom>
            <h2 className="title">Una experiencia conversacional que transforma la manera de entender la salud dentro y fuera del trabajo</h2>
          </Fade>
          <Fade bottom>
            <p>El algoritmo de Coop, basado en machine learning, permite que sea capaz de aprender e interactuar automáticamente con usuarios y empleados con el fin de guiarles y proveerles de las herramientas y consejos más adecuados. Coop interpreta sus hábitos, empatiza con sus gustos y reconoce sus preferencias.</p>
          </Fade>
        </section>
        <section>
          <BannerCta
              title={"¿Eres una empresa? Únete a Coop y mejora la calidad de vida y bienestar de tus empleados"}
              cta={{url: '/solicita-demo', text: 'Solicita una demo'}}
              link={{url: '', text: 'Contacta con nosotros'}}
              backImage={"/images/banner-cta-background.svg"}/>
        </section>
      </>
  )
}