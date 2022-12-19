import React, { useEffect } from 'react'
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.css'
import '../src/css/global.css'
import '../src/css/layout.css'
import '../src/css/index.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])
    return (
      <>
        <Script id='analytics-cdn' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-JWYEG3Y4DE`} />
        <Script id='script-analytics' strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JWYEG3Y4DE');
          `}
        </Script>
        <Component {...pageProps} />
      </>
    )
}

export default MyApp