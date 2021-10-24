import '../styles/globals.css'
import Layout from '/components/layout/layout'
import CookiesConsent from '/components/cookies-consent/cookiesConsent'
import Head from 'next/head'


export default function App({ Component, pageProps}) {
  return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon.ico"/>
        </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        <CookiesConsent />
      </>
  )
}
