import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/layout'
import { ParasolCover1, ParasolCover2 } from 'ui/constants'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export default function Web() {
  const validate = Yup.object().shape({
    nombre: Yup.string().min(2, 'Escribe tu nombre completo').max(100, 'Tu nombre es demaciado largo').required('Campo requerido'),
    telefono: Yup.string().min(10, 'El numero debe de ser de 10 digitos sin espacios').required('Campo requerido'),
    email: Yup.string().email('Ingrese un correo valido').required('Campo requerido'),
    mensaje: Yup.string()
  })
  return (
    <Layout>
      <Head>
        <title>PARASOLAR</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta name="description" content="Empresa 100% mexicana dedicada a la fabricación e implementación de sistemas de energía solar térmica por medio de sistemas de reflexión parabólica." />
        <meta name="keyword" content='Parasolar, para solar, enegia solar, solar, terminca, energia, empresa mexicana' />
      </Head>
      <section className='block' id="portada">
        <div className='holder'>
          <div className='container-fluid'>
            <div className='row my-5'>
              <h3 className=''>Empresa 100% mexicana dedicada a la fabricación e implementación de sistemas de energía solar térmica por medio de sistemas de reflexión parabólica.</h3>
            </div>
            <div className='portada-carousel'>
              <div id="carouselDesktop" className="carousel slide carousel-fade " data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image src={ParasolCover1} alt="Logo Lomas Home" width="1509" height="813" layout='responsive' />
                  </div>
                  <div className="carousel-item">
                    <Image src={ParasolCover2} alt="Logo Lomas Home" width="1509" height="813" layout='responsive' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='block' id="contacto">
        <div className='holder'>
          <div className='container-fluid'>
            <div className='row my-5'>
              <h3 className='text-center'>CONTACTO</h3>
            </div>
            <Formik
              initialValues={{
                nombre: "",
                telefono: "",
                email: "",
                mensaje: ""
              }}
              validationSchema={validate}
              onSubmit={async (values, { setSubmitting }) =>{
                console.log(values)
                setTimeout(() => {
                  setSubmitting(false)
                }, 3000)
              }}
              
            >
              {({errors, touched, isSubmitting}) =>(
                <Form>
                  <div className='row'>
                    <div className='col-12 col-md-6'>
                      <div className="mb-5">
                        <Field as="input" type="text" name="nombre" id="nombre" className="form-control" placeholder="Nombre*" />
                        {errors.nombre && touched.nombre ? (<div className="invalid-feedback">{errors.nombre}</div>) : null}
                      </div>
                      <div className="mb-5">
                        <Field as="input" type="text" name="telefono" id="telefono" className="form-control" placeholder="Telefono*" />
                        {errors.telefono && touched.telefono ? (<div className="invalid-feedback">{errors.telefono}</div>) : null}
                      </div>
                      <div className="mb-5">
                        <Field as="input" type="email" name="email" id="email" className="form-control" placeholder="email*" />
                        {errors.email && touched.email ? (<div className="invalid-feedback">{errors.email}</div>) : null}
                      </div>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div className="mb-3">
                        <Field as="textarea" className="form-control" name="mensaje" id="mensaje" placeholder='Mensaje' rows="6"></Field>
                      </div>
                      <div className="mb-5 submit">
                        <button type="submit" className="btn ">Enviar</button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </Layout>
  );
}
