import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({children}){
    return(
        <>
            <Navbar />
            <div className='outer-wrapper'>
                {children}
            </div>
            <Footer />
        </>
    )
}