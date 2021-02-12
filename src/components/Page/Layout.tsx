import React, { ReactNode } from 'react'
import Header from '../organisms/Header/Header'
import Metadata from '../organisms/Metadata/Metadata'
import styled from 'styled-components'

type Props = {
  title?: string
  children: ReactNode
}

const Wrapper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 990px) {
    width: 70.6em;
    min-width: 990px;
  }
`

const Layout: React.FC<Props> = ({ title, children }) => (
  <>
    <Metadata title={title} />
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  </>
)

export default Layout
