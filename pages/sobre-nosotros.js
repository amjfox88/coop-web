import Banner from "../components/banner/banner";
import CardDescription from "../components/card-description/card-description";
import Fade from "react-reveal/Fade";
import styles from "../styles/sobre-nosotros.module.css";
import BannerCta from "../components/banner-cta/banner-cta";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Head from "next/head";
import {getAllEmployees} from "./api/dataProvider";

const CustomTab = ({ children, ...otherProps }) => (
    <Tab className="coopTab" {...otherProps}>
      <span>{children}</span>
    </Tab>
);

CustomTab.tabsRole = 'Tab';

resetIdCounter();


export default function ComoFunciona({allEmployees}) {
  return (
      <>
        <Head>
          <title>Coop - Sobre Nosotros</title>
        </Head>
        <Banner title={"Experiencia y conocimiento con propósito"} backImage={"/images/banner-sobre-nosotros.jpg"} cta={{url: '/solicita-demo', text: 'Únete al equipo'}} />
        <section className="titleContent center">
          <Fade bottom cascade>
            <h2>Un equipo multidisciplinar comprometido con el bienestar y la salud corporativa</h2>
            <p>Un mundo global requiere de una salud que acompañe a las personas en todas sus dimensiones: física, mental, social,  emocional, espiritual y profesional. Por eso Coop está formado por profesionales de diferentes áreas, cuya visión creativa, actitud proactiva y dilatada experiencia los convierten en el equipo perfecto para el cuidado integral de las personas. </p>
          </Fade>
        </section>
        <section className="titleContent blueContent">
          <Tabs className="tabs" selectedTabClassName="selected">
            <TabList className="tabList">
              {allEmployees.map((type) => {
                return (
                    <CustomTab key={type}>{type.type}</CustomTab>
                )
              })
              }
            </TabList>
            {allEmployees.map((team, index) => {
              return (
                  <TabPanel key={index}>
                    <ul className={styles.teamGrid}>
                      {team.employees.map((emp) => {
                        return (
                            <li key={emp}><CardDescription linkedin={emp.linkedin} name={emp.name} position={emp.position} image={emp.img}/></li>
                        )
                      })}
                    </ul>
                  </TabPanel>
              )
            })
            }
          </Tabs>
        </section>
        <section>
          <BannerCta
              title={"¿Quieres unirte a Coop?"}
              text={"Si tú también te has hecho las preguntas —¿cómo contribuir a mejorar la salud de mi entorno? ¿Cómo mejorar el día a día dentro de las organizaciones? ¿Cómo facilitar el buen clima empresarial?— quizá compartas nuestra visión. Ofrecemos autonomía y crecimiento profesional en un espacio absolutamente innovador. ¿Quieres transformar la realidad con nosotros?"}
              cta={{url: '/solicita-demo', text: 'Únete al equipo'}}
              backImage={"/images/banner-cta-background.svg"}/>
        </section>
      </>
  )
}

export async function getStaticProps() {
  const allEmployees = await getAllEmployees();

  return {
    props: {
      allEmployees,
    }
  }
}