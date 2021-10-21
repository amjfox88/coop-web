import PostBanner from "../components/post-banner/post-banner";

export default function PoliticaDeCookies() {
  return (
      <>
        <PostBanner image={false} title={'Política de Cookies'}/>
        <section className="titleContent">
          <p>COOPEL SMART COACH,S.L (en adelante, referida como “Coop Health” o como la “Compañía” o “nosotros”) es la propietaria de la plataforma accesible a través del nombre de dominio www.coophealth.es (el “Sitio Web”). Dicha Compañía es una sociedad de responsabilidad limitada de nacionalidad española y con domicilio social en C/Golfo de Salónica,27, 3ª Planta . 28033 - Madrid., está provista de C.I.F. B01708452. Con el fin de asegurar que puedes utilizar el Sitio y los servicios que prestamos a través del Sitio, tanto la Compañía como terceros instalamos y utilizamos cookies. Esta Política de Cookies (la “PC”) está pensada para facilitarte información sobre las cookies que se utilizan y cómo poderlas deshabilitar.</p>
          <p>En caso de que tengas alguna duda sobre esta PC, puedes contactarnos mediante correo electrónico (info@coophealth.es).</p>
          <h3>¿Qué es una cookie?</h3>
          <p>Una cookie es un archivo de texto que se almacena en el ordenador o dispositivo móvil mediante un servidor Web y tan solo ese servidor será capaz de recuperar o leer el contenido de la cookie y permiten al Sitio Web recordar preferencias de navegación y navegar de manera eficiente. Las cookies hacen la interacción entre el usuario y el sitio Web más rápida y fácil.</p>
          <h3>¿Qué cookies utilizamos?</h3>
          <p>En esta web utilizamos tanto cookies propias como de terceros. La finalidad de estas cookies es realizar las estadísticas de uso del Sitio Web, así utilizamos las cookies con la finalidad de conocer el nivel de recurrencia de nuestros visitantes y los contenidos que resultan más interesantes. De esta manera, podemos concentrar nuestros esfuerzos en mejorar las áreas más visitadas y hacer que el usuario encuentre más fácilmente lo que busca. En el Sitio Web puede utilizarse la información de tu visita para realizar evaluaciones y cálculos estadísticos sobre datos anónimos, así como para garantizar la continuidad del servicio o para realizar mejoras en tus sitios Web.</p>
          <p>A continuación, se indican las cookies que utilizamos en esta web. Como usuario, debes asegurarte de que estás conforme con ellas antes de seguir navegando.</p>
          <p>También puedes configurar el navegador para que no acepte cookies aunque eso puede afectar al correcto funcionamiento de la aplicación.</p>

          <div>
            <h5>Cookie</h5><h5>Duración</h5><h5>Proveedor</h5><h5>Final</h5>
            <p>_elevenlab</p><p>Sesión</p><p>Propia</p><p>Navegación</p>
            <p>cookie-policy-consent-accepted</p><p>2 años</p><p>Propia</p><p>Navegación</p>
            <p>_ga</p><p>2 años</p><p>Google</p><p>Analítica</p>
            <p>_gid</p><p>24 horas</p><p>Google</p><p>Analítica</p>
            <p>_dc_gtm_&lt;property-id&gt; </p><p>1 minuto</p><p>Google</p><p>Analítica</p>
            <p>_gac_&lt;property-id&gt; </p><p>90 días</p><p>Google</p><p>Publicidad</p>
          </div>

          <h3>¿Cómo desinstalar, bloquear o borrar cookies?</h3>
          <p>En cualquier momento puedes borrar las cookies que se hayan instalado en tu navegador. Aquí te proporcionamos las pautas para hacerlo:</p>
          <h4>Navegador Firefox:</h4>
          <p>Herramientas -&gt; Opciones -&gt; Privacidad -&gt; Historial -&gt; Configuración Personalizada</p>
          <p>Para más información, puedes consultar el soporte de Mozilla o la Ayuda del navegador.</p>
          <h4>Navegador Chrome:</h4>
          <p>Configuración -&gt; Mostrar opciones avanzadas -&gt; Privacidad -&gt; Configuración de contenido</p>
          <p>Para más información, puedes consultar el soporte de Google o la Ayuda del navegador.</p>
          <h4>Navegador Safari:</h4>
          <p>Preferencias -&gt; Seguridad</p>
          <p>Para más información, puedes consultar el soporte de Apple o la Ayuda del navegador.</p>
          <h4>Navegador Internet Explorer:</h4>
          <p>Herramientas -&gt; Opciones de Internet -&gt; Privacidad -&gt; Configuración</p>
          <p>Para más información, puedes consultar el soporte de Microsoft o la Ayuda del navegador.</p>
        </section>
        <style jsx>{`
        div {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      `}</style>
      </>
  )
}