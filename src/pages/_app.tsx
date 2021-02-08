import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import Layout from '../components/Page/Layout'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const theme = {
  colors: {
    primary: '#15BDD8',
    base: '#EEF2F5',
    main: '#AFB7C2',
    sub: '#424C58',
    accent: '#33C4B3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
