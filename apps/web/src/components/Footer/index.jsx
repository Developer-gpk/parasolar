import React from 'react'
import Image from 'next/image'
import { Parasolar, Goplek } from 'ui/constants'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-md-2 logo'>
                            <Image src={Parasolar} alt="Logo de Parasolar" width="183" height="110" />
                        </div>
                        <div className='col-6 col-md-2'>
                            <h4 className='mb-4'>Dirección</h4>
                            <p>
                                Blvd Circunvalación 604-1<br/>
                                Col. Bugambilias C.P. 75654<br/>
                                Puebla, Pue.
                            </p>
                        </div>
                        <div className='col-6 col-md-2'>
                            <h4 className='mb-4'>Teléfonos</h4>
                            <p>Cel. 2224 818 634<br/>
                            Tel. 2221 691 832</p>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-8 col-md-10'>
                            <p>2022 ©  Parasolar · Todos los derechos Reservados<br/>
                            Aviso de privacidad</p>
                        </div>
                        <div className='col-4 col-md-2 logo-goplek'>
                            <Image src={Goplek} alt="Logo de Goplek" width="53" height="15" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}