import PostBanner from "../components/post-banner/post-banner";
import Link from 'next/link';

export default function Gdpr() {
  return (
      <>
        <PostBanner image={false} title={'Compromiso GDPR'}/>
        <section className="titleContent">
          <h5>Introducción</h5>
          <p>Como se ha informado ampliamente, la Unión Europea ha dado un gran paso en la protección del derecho fundamental a la privacidad de todos los residentes de la UE con el Reglamento General de Protección de Datos (GDPR), que entró en vigor el 25 de mayo de 2018.</p>
          <p>Los residentes de la UE ahora tendrán más voz sobre qué, cómo, por qué, dónde y cuándo se utilizan, procesan o eliminan sus datos personales. Esta regla aclara cómo se aplican las leyes de datos personales de la UE incluso más allá de las fronteras de la UE. Cualquier empresa que trabaje con datos personales de residentes de la UE de cualquier manera, independientemente de su ubicación, tiene la obligación de proteger los datos.</p>
          <p>En Coop, nos tomamos muy en serio la confianza depositada en nosotros para asegurar y proteger estrictamente los datos de nuestros clientes y damos la bienvenida al Reglamento General de Protección de Datos (GDPR). Creemos que todas las empresas deben ser responsables de los mismos altos estándares a los que nos sometemos y apreciamos estas nuevas medidas de responsabilidad que podemos utilizar para mejorar nuestras prácticas.</p>
          <h5>Compromiso</h5>
          <p>Estamos totalmente comprometidos con GDPR y hemos publicado actualizaciones de nuestra <Link href={"/politica-de-privacidad"}><a>Política de privacidad</a></Link> y <Link href={"/politica-de-cookies"}><a>Política de cookies</a></Link>. Los cambios reflejan el aumento de los requisitos de transparencia del GDPR.</p>
          <p>Como siempre, Coop se compromete a proteger la privacidad de nuestros usuarios. Eso nunca cambiará. Estas mejoras aclaran y proporcionan información adicional sobre:</p>
          <ul style={{listStyle: 'initial', paddingLeft: '40px'}}>
            <li><p>Los derechos de privacidad de nuestros usuarios y cómo ejercerlos;</p></li>
            <li><p>Cómo recopilamos, usamos, compartimos y protegemos los datos personales;</p></li>
            <li><p>Cómo operamos en nuestra capacidad como procesadores de datos que actúan en nombre de nuestros usuarios.</p></li>
          </ul>
          <p>Continuaremos monitoreando activamente la orientación regulatoria y las interpretaciones de los requisitos clave del GDPR para asegurarnos de estar al día con todos los requisitos legales y las mejores prácticas de privacidad.</p>
          <p>Las personas en la Unión Europea pueden tener derecho a presentar una queja con respecto a una presunta infracción del GDPR ante la Autoridad de Supervisión Europea correspondiente, en particular en el Estado miembro de su residencia habitual o lugar de trabajo. Una lista de autoridades supervisoras está <a href={"https://edpb.europa.eu/about-edpb/about-edpb/members_en"}>disponible aquí</a>.</p>

        </section>
      </>
  )
}