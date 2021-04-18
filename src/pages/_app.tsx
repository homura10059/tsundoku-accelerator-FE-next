import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../components/organisms/Header/Header'
import Metadata from '../components/organisms/Metadata/Metadata'
import { GlobalStyle } from '../functions/style'
import { theme } from '../functions/theme'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider session={pageProps.session}>
        <Metadata />
        <Header />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
