import Banner from "../components/banner/banner";
import React, { useState, useEffect } from 'react';
import styles from "../styles/demo.module.css";
import Image from "next/image";
import {useForm, Controller} from "react-hook-form";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import axios from 'axios';
import Select from 'react-select';


export default function Demo() {
  const {register, handleSubmit, control, formState: {errors}} = useForm();
  
  const options = [
    { value: '0-10', label: '0-10' },
    { value: '11-50', label: '11-50' },
    { value: '51-250', label: '51-250' },
    { value: 'Más de 250', label: 'Más de 250' }
  ]

  const selectStyles = {
    control: (base,state) => ({
      ...base,
      border: '1',
      borderColor: '#262AF2',
      '&:hover': {
        border: '1',
        borderColor: '#262AF2'
      },
      fontSize: '14px',
      padding: '13px 20px',
      borderRadius: '10px',
      boxShadow: 'none',
      cursor: 'pointer',
    }),
    option: (provided,state) => ({
      ...provided,
      color: '#121473',
      backgroundColor: state.isSelected ? "white" : "white",
      ':active': {
        backgroundColor: state.isSelected ? "white" : "white"
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#121473'
    }),
    menu: (provided) => ({
      ...provided,
      paddingTop: '20px',
      borderRadius: '10px',
      border: '1',
      borderColor: '#262AF2',
    }),
    placeholder: () => ({
      color: '#121473'
    }),
    dropdownIndicator: () => ({
      color: '#121473',
    }),
    indicatorSeparator: () => ({
      display: 'none'
    })
  }
  const [count, setCount] = useState(0);

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
            text="Disfruta de una demostración gratuita y personalizada, donde te explicaremos todos los detalles de la herramienta, y hablaremos de cómo sacarle partido para que cuanto antes puedas empezar a mejorar el bienestar y el desempeño de tus empleados. ¿Hablamos?"
            theme={'light'}
        >
          <Fade className={styles.fade} right>
            <Image src={"/images/iphoneX.svg"} layout={"fill"}  objectFit={"contain"}/>
          </Fade>
        </Banner>
        <section className="titleContent">
          <h2 className={styles.title}>Formulario de contacto</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formData}>
              <div>
                <label htmlFor="name" className={styles.label}>Nombre*</label>
                <input {...register("name", {
                  required: {
                    value: true,
                    message: 'Debes escribir tu nombre'
                  }
                })} />
                {errors.name && <span>{errors?.name?.message}</span>}
              </div>

              <div>
                <label htmlFor="secondName" className={styles.label}>Apellido*</label>{errors.secondName &&
              <span className={styles.error}>{errors?.secondName?.message}</span>}
                <input {...register("secondName", {
                  required: {
                    value: true,
                    message: 'Debes escribir tu apellido'
                  }
                })} />
              </div>

              <div>
                <label htmlFor="company" className={styles.label}>Empresa*</label>
                <input {...register("company", {
                  required: {
                    value: true,
                    message: 'Necesitamos una empresa'
                  }
                })} />
              </div>

              <div>
                <label htmlFor="companyEmail" className={styles.label}>Email de empresa*</label>{errors.companyEmail &&
              <span className={styles.error}>{errors?.companyEmail?.message}</span>}
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
                <input {...register("position", {required: true})} />
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
                <Controller
                    control={control}
                    name="numberEmployees"
                    render={({
                       field: {onChange, onBlur, value, name, ref},
                       fieldState: {invalid, isTouched, isDirty, error},
                       formState,
                   }) => (
                      <Select
                          id={"gender"}
                          instanceId={"gender"}
                          placeholder={'Seleccionar un rango'}
                          styles={selectStyles}
                          options={options}
                          onChange={onChange}
                          selected={value}
                          inputRef={ref}
                      />
                  )}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={styles.label}>Mensaje*</label>
              <textarea {...register("message", {
                required: {
                  value: true,
                  message: 'Necesitamos que nos escribas tu consulta'
                },
                maxLength: {
                  value: 500,
                  message: 'No puedes escribir más de 500 caracteres'
                }
              })} onChange={(e) => {
                setCount(e.target.value.length);
              }} />
              <span>{count}/500</span>


              <label htmlFor="terms" className={styles.terms}>
                <input type="checkbox" {...register("terms", {
                  required: {
                    value: true,
                    message: 'Necesitamos que aceptes los términos'
                  }
                })}/>
                <Link href={"/terminos-y-condiciones"}><a>Acepto los términos legales y consiento el envío de
                  información.*</a></Link>
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