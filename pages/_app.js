import '../styles/globals.css'
import Layout from '/components/layout/layout'
// import 'semantic-ui-css/semantic.min.css'

export default function App({ Component, pageProps}) {
  return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
  )
}
