import Banner from "../components/banner/banner";
import styles from "../styles/demo.module.css";
import Image from "next/image";
import mobileImg from "../public/images/iphoneX.svg";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Fade from "react-reveal/Fade";

export default function Demo() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));
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
          <h3>Formulario de contacto</h3>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formData}>
              <div>
                <label htmlFor="name" className={styles.label}>Nombre*</label>
                <input  {...register("name")} />
              </div>

              <div>
                <label htmlFor="secondName" className={styles.label}>Apellido*</label>
                <input {...register("exampleRequired", { required: true })} />
              </div>

              <div>
                <label htmlFor="company" className={styles.label}>Empresa*</label>
                <input {...register("company")} />
              </div>

              <div>
                <label htmlFor="companyEmail" className={styles.label}>Email de empresa*</label>
                <input {...register("companyEmail", { required: true })} />
              </div>
            </div>
            <div className={styles.formAdditionalData}>
              <div>
                <label htmlFor="position" className={styles.label}>Cargo*</label>
                <input {...register("position", { required: true })} />
              </div>

              <div>
                <label htmlFor="phone" className={styles.label}>Teléfono*</label>
                <input {...register("phone", { required: true })} />
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
              <textarea {...register("message", { required: true })} />
              <label className={styles.terms}>
                <input type="checkbox" {...register("terms", { required: true })}/>
                <span className={styles.checkmark}/>
                <Link href={"/terms-and-conditions"}><a>Acepto los términos legales y consiento el envío de información.*</a></Link>
              </label>

            </div>

            {errors.exampleRequired && <span>This field is required</span>}

            <div className={styles.submitButton}>
              <input type="submit" />
            </div>
          </form>
        </section>
      </>
  )
}