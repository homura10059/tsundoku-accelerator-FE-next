import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import Layout from '../components/Templates/Layout'
import { theme } from '../lib/theme'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

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
