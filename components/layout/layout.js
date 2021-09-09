import Header from "/components/header";
import Footer from "/components/footer/footer";

function Layout({ children }) {
  let  services = [
    [
      {
        id: 1,
        title: 'Cómo funciona',
        url: '/'
      },
      {
        id: 2,
        title: 'Sobre nosotros',
        url: '/'
      },
      {
        id: 3,
        title: 'Smart health coach',
        url: '/'
      },
    ],
    [
      {
        id: 4,
        title: 'Solicita una demo',
        url: '/'
      },
      {
        id: 5,
        title: 'Blog',
        url: '/'
      },
      {
        id: 6,
        title: 'Contacto',
        url: '/'
      },
    ],
    [
      {
        id: 7,
        title: 'Términos de uso',
        url: '/'
      },
      {
        id: 8,
        title: 'Política de privacidad',
        url: '/'
      },
      {
        id: 9,
        title: 'GDPR',
        url: '/'
      },
      {
        id: 10,
        title: 'Accesibilidad',
        url: '/'
      }
    ]
  ];

  return (
      <>
        <Header />
        <main>{children}</main>
        <Footer urls={services}/>
      </>
  )
}

export default Layout;