import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import Loading from '../components/_Loading/Loading';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000)
  })

  return (
  <>
  { loading ? (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  ) : (
    <Loading />
  )}
  </>
  )
}

export default MyApp
