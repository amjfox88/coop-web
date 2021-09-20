import Banner from "../components/banner/banner";
import CardDescription from "../components/card-description/card-description";
import Fade from "react-reveal/Fade";
import styles from "../styles/sobre-nosotros.module.css";
import BannerCta from "../components/banner-cta/banner-cta";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CustomTab = ({ children, ...otherProps }) => (
    <Tab className={styles.coopTab} {...otherProps}>
      <span>{children}</span>
    </Tab>
);

CustomTab.tabsRole = 'Tab'; // Required field to use your custom Tab


export default function ComoFunciona() {
  return (
      <>
        <Banner title={"Experiencia y conocimiento con propósito"} backImage={"/images/sobre-nosotros-banner.png"} cta={{url: '/solicita-demo', text: 'Únete al equipo'}} />
        <section className="titleContent center">
          <Fade bottom>
            <h2>Un equipo preocupado y centrado en la salud integral de las personas</h2>
          </Fade>
          <Fade bottom>
            <p>Se necesitan todo tipo de talento para resolver problemas globales enormemente complejos, por lo que hemos creado un equipo específicamente equipado para abordar los desafíos que enfrenta el mundo todos los días.</p>
            <p>Encontramos los profesionales más inteligentes y los científicos más creativos. Y les damos un lugar para colaborar por el bien común.</p>
          </Fade>
        </section>
        <section className="titleContent blueContent">
          <Tabs className={styles.tabs} selectedTabClassName="select">
            <TabList className={styles.tabList}>
              <CustomTab>Leadership</CustomTab>
              <CustomTab>Comité Científico</CustomTab>
              <CustomTab>Especialistas</CustomTab>
              {/*<Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
              <Tab>Title 2</Tab>*/}
            </TabList>

            <TabPanel>
              <ul className={styles.teamGrid}>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className={styles.teamGrid}>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className={styles.teamGrid}>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
                <li><CardDescription linkedin={'/'} name={"Luis Galán"} position={"CEO - Founder"}/></li>
              </ul>
            </TabPanel>
          </Tabs>
        </section>
        <section>
          <BannerCta
              title={"¿Quieres unirte a nosotros?"}
              text={"Trabajamos con personas que realmente se preocupan. Coop Health está impulsado por una misión y es emprendedor, ofrecemos autonomía y potencial de crecimiento en un espacio verdaderamente transformador."}
              cta={{url: '/demo', text: 'Únete al equipo'}}
              backImage={"/images/banner-cta-background.svg"}/>
        </section>
      </>
  )
}