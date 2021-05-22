import '../styles/globals.css'

import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/functions/style'
import { theme } from '@/functions/theme'

import Header from '../components/organisms/Header/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
