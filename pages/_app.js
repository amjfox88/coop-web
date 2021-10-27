import '../styles/globals.css'
import Layout from '/components/layout/layout'
import CookiesConsent from '/components/cookies-consent/cookiesConsent'
import Head from 'next/head'


export default function App({Component, pageProps}) {
  return (
      <>
        <Head>
          <title>Coop</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32"/>
          <meta name="title" content="El nuevo paradigma de la salud corporativa"/>
          <meta name="description"
                content="Coop es la herramienta que acompaña a los empleados en la mejora de su rendimiento cognitivo y físico a través de Inteligencia Artificial."/>
          {/*Open Graph / Facebook*/}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://coophealth.es/"/>
          <meta property="og:title" content="El nuevo paradigma de la salud corporativa"/>
          <meta property="og:description"
                content="Coop es la herramienta que acompaña a los empleados en la mejora de su rendimiento cognitivo y físico a través de Inteligencia Artificial."/>
          <meta property="og:image" content="/public/coop-logo-og.jpeg"/>

          {/*Twitter*/}
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://coophealth.es/"/>
          <meta property="twitter:title" content="El nuevo paradigma de la salud corporativa"/>
          <meta property="twitter:description"
                content="Coop es la herramienta que acompaña a los empleados en la mejora de su rendimiento cognitivo y físico a través de Inteligencia Artificial."/>
          <meta property="twitter:image" content="/public/coop-logo-og.jpeg"/>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/*<CookiesConsent/>*/}
      </>
  )
}
