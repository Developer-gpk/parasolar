import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Parasolar } from 'ui/constants'

export default function Navbar(){
    return(
        <div className='navigation'>
            <div className='holder'>
                <nav className='navbar navbar-expand-lg'>
                    <div className='container-fluid'>
                        <a className='navbar-brand'>
                            <Image src={Parasolar} alt="Logo de Parasolar" width="183" height="110" />
                        </a>
                        <div class="navbar-nav ms-auto d-none d-sm-none d-md-block">
                            <a class="nav-link active" href="#contacto">CONTACTO</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}