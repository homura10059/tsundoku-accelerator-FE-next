import { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'

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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
