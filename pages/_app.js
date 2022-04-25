import React, { useEffect, useState } from "react";
import Preloader from '../components/elements/preloader';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <Preloader />
      )}
    </>
  )
}

export default MyApp
