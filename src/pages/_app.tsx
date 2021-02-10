import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import Layout from '../components/Page/Layout'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

// https://www.schemecolor.com/black-gray-white-red.php
const theme = {
  // https://material.io/design/color/the-color-system.html#color-theme-creation
  colors: {
    primary: {
      light: '#C21C0E',
      dark: '#9E1221',
    },
    secondary: {
      light: '#999999',
      dark: '#4C4C4C',
    },
    background: '#FDFDFD',
    surface: '#FDFDFD',
    error: '#33C4B3',
    on: {
      primary: '#FDFDFD',
      secondary: '#FDFDFD',
      background: '#0B0B0B',
      surface: '#0B0B0B',
      error: '#FDFDFD',
    },
  },
} as const

// theme の型推論をできるようにする https://qiita.com/Takepepe/items/eec6e1d2101570e7e241
type AppTheme = typeof theme
declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
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
