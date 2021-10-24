import Banner from "../components/banner/banner";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '/styles/servicios.module.css'
import ContentImage from "../components/content-image/content-image";
import {getFullServices} from "./api/dataProvider";
import Head from "next/head";

const CustomTab = ({ children, ...otherProps }) => (
    <Tab className="coopTab" {...otherProps}>
      <span>{children}</span>
    </Tab>
);

CustomTab.tabsRole = 'Tab';

resetIdCounter();

export default function Servicios({services}) {
  return (
      <>
        <Head>
          <title>Coop - Servicios</title>
        </Head>
        <Banner title={"Allá donde está tu equipo"} backImage={"/images/banner-servicios.jpg"}/>
        <section className="titleContent blueContent center">
          <Fade bottom>
            <h2>¿Eres una pyme o una gran corporación?</h2>
            <p>Sea cual sea tu caso, ya puedes solicitar los servicios presenciales de Coop y aplicarlos para el
              bienestar de tu equipo y de tu negocio. Servicios que abarcan desde la auditoría a la celebración de
              talleres específicos, con una visión de la salud de manera integral, teniendo en cuenta todos los factores
              que intervienen en ella.</p>
          </Fade>

          <Tabs className="tabs" selectedTabClassName="selected">
            <TabList className={`${styles.servicesTabs} tabList`}>
              {
                services.map((tab) => {
                  return (
                      <CustomTab key={tab.title}>{tab.title}</CustomTab>
                  )
                })
              }
            </TabList>
            {
              services.map((type) => {
                return (
                    <TabPanel key={type.title}>
                      {
                        type.services.map((srv, index) => {
                          return (
                              <ContentImage
                                  key={srv.title}
                                  priority={2}
                                  reverse={!(index % 2 === 0)}
                                  title={srv.title}
                                  text={srv.text}
                                  image={srv.image}/>
                          )
                        })
                      }
                    </TabPanel>
                )
              })
            }
          </Tabs>
        </section>
      </>
  )
}

export async function getStaticProps() {
  const services = await getFullServices();

  return {
    props: {
      services
    }
  }
}