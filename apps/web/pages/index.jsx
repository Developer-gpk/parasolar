import React from 'react'
import Image from 'next/image'
import Layout from '../src/layout'
import { ParasolCover1, ParasolCover2 } from 'ui/constants'

export default function Web() {
  return (
    <Layout>
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
            <div className='row'>
              <div className='col-12 col-md-6'>
                <div class="mb-5">
                  <input type="text" class="form-control" id="" placeholder="Nombre*" />
                </div>
                <div class="mb-5">
                  <input type="text" class="form-control" id="" placeholder="Telefono*" />
                </div>
                <div class="mb-5">
                  <input type="email" class="form-control" id="" placeholder="email*" />
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div class="mb-3">
                  <textarea class="form-control" id="" placeholder='Mensaje' rows="6"></textarea>
                </div>
                <div class="mb-5 submit">
                  <button type="submit" class="btn ">Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
