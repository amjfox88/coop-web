import Head from "next/head";
import Image from "next/image"

export default function Custom404() {
  return (
      <>
        <Head>
          <title>Coop - Error 404</title>
        </Head>
        <section>
          <div>
            <h1>Error 404</h1>
            <p>Parece que la página que buscas no existe.</p>
          </div>
          <div className="imageContent">
            <Image alt={"Error 404"} src={"/images/404-image.svg"} layout={"fill"} objectFit={"contain"}/>
          </div>
        </section>
        <style jsx>{`
          section {
          background-color: #F0F0FF;
           height: 90vh;
           display: grid;
           grid-template-columns: 60% 40%;
           align-items: center;
           padding: 0 120px;
          }
          h1 {
            font-family: 'SF Pro Display Bold';
            line-height: 95px;
            margin-bottom: 25px;
          }
          .imageContent {
            position: relative;
            width: 100%;
            height: 100%;
          }
      `}</style>
      </>
  )
}