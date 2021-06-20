import '../styles/globals.css'

import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import React from 'react'

import Header from '../components/organisms/Header/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}
