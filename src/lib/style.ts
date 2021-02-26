import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  font-family: "Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif;

  #__next {
    width: 100%;
    min-height: 900px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${({ theme }) => theme.colors.background};

    @media screen and (min-width: 990px) {
      width: 70.6em;
      min-width: 990px;
    }
  }
`
