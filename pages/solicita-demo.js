import Banner from "../components/banner/banner";
import styles from "../styles/demo.module.css";
import Image from "next/image";
import mobileImg from "../public/images/iphoneX.svg";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import axios from 'axios';

export default function Demo() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  async function onSubmit(data) {

    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    }

    try {
      await axios(config)
    } catch (err) {
      console.log(err);
    }
  }

  return (
      <>
        <Banner
            title={"¿Interesado en conocer más sobre Coop? "}
            text="Disfruta de una demostración gratuita de nuestras capacidades y descubre cómo podemos colaborar juntos a mejorar el bienestar y desempeño de tus empleados."
            theme={'light'}
        >
          <Fade className={styles.fade} right>
            <Image src={mobileImg} layout={"intrinsic"} />
          </Fade>
        </Banner>
        <section className="titleContent">
          <h2 className={styles.title}>Formulario de contacto</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formData}>
              <div>
                <label htmlFor="name" className={styles.label}>Nombre*</label>
                <input {...register("name", {required: {
                    value: true,
                    message: 'Debes escribir tu nombre'
                  }})} />
                {errors.name && <span>{errors?.name?.message}</span>}
              </div>

              <div>
                <label htmlFor="secondName" className={styles.label}>Apellido*</label>{errors.secondName && <span className={styles.error}>{errors?.secondName?.message}</span>}
                <input {...register("secondName", {required: {
                    value: true,
                    message: 'Debes escribir tu apellido'
                  }})} />
              </div>

              <div>
                <label htmlFor="company" className={styles.label}>Empresa*</label>
                <input {...register("company", {required: {
                    value: true,
                    message: 'Necesitamos una empresa'
                  }})} />
              </div>

              <div>
                <label htmlFor="companyEmail" className={styles.label}>Email de empresa*</label>{errors.companyEmail && <span className={styles.error}>{errors?.companyEmail?.message}</span>}
                <input type="email" {...register("companyEmail", {
                  required: {
                    value: true,
                    message: 'Necesitamos un correo válido'
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@(?!(gmail|yahoo|outlook|hotmail)).*\.[a-zA-Z]{2,6}$/,
                    message: 'Necesitamos un correo de empresa'
                  }
                })} />
              </div>
            </div>
            <div className={styles.formAdditionalData}>
              <div>
                <label htmlFor="position" className={styles.label}>Cargo*</label>
                <input {...register("position", { required: true })} />
              </div>

              <div>
                <label htmlFor="phone" className={styles.label}>Teléfono*</label>
                <input {...register("phone", {
                  required: {
                    value: true,
                    message: 'Necesitamos un número de teléfono'
                  },
                  minLength: {
                    value: 9,
                    message: 'Necesitamos un número de teléfono válido'
                  }
                })} />
              </div>

              <div>
                <label htmlFor="numberEmployees" className={styles.label}>Nº de empleados</label>
                <select {...register("numberEmployees")}>
                  <option value="0-10">0-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-250">51-250</option>
                  <option value="more">Más de 250</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={styles.label}>Mensaje*</label>
              <textarea {...register("message", {
                required: {
                  value: true,
                  message: 'Necesitamos que nos escribas tu consulta'
                }
              })} />
              <label htmlFor="terms" className={styles.terms}>
                <input type="checkbox" {...register("terms", { required: {
                    value: true,
                    message: 'Necesitamos que aceptes los términos'
                  } })}/>
                <Link href={"/terminos-y-condiciones"}><a>Acepto los términos legales y consiento el envío de información.*</a></Link>
                {errors.terms && <span className={styles.error}>{errors?.terms?.message}</span>}
              </label>

            </div>

            <div className={styles.submitButton}>
              <input className={styles.disabled} type="submit" value="Enviar"/>
            </div>
          </form>
        </section>
      </>
  )
}