import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/css/global.css'
import '../src/css/layout.css'
import '../src/css/index.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])
    return (
      <Component {...pageProps} />
    )
}

export default MyApp