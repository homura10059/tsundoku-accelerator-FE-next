import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/aTemplates/Layout'
import { GlobalStyle } from '../lib/style'
import { theme } from '../lib/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {
        // https://zenn.dev/catnose99/articles/3c106c81cbfdec
      }
      <script></script>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  )
}
