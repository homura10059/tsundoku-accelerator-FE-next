import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../components/organisms/Header/Header'
import Metadata from '../components/organisms/Metadata/Metadata'
import { GlobalStyle } from '../lib/style'
import { theme } from '../lib/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {
        // https://zenn.dev/catnose99/articles/3c106c81cbfdec
      }
      <script></script>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider session={pageProps.session}>
          <Metadata />
          <Header />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  )
}
