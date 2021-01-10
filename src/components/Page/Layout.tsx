import React, { ReactNode } from 'react'
import Header from '../organisms/Header/Header'
import Metadata from '../organisms/Metadata/Metadata'
import styled from 'styled-components'

type Props = {
  title: string
  children: ReactNode
}

const Wrapper = styled.div`
  padding: 0 2rem;
`

const Layout: React.FC<Props> = ({ title, children }) => (
  <div>
    <Metadata title={title} />
    <Header />
    <Wrapper>{children}</Wrapper>
  </div>
)

export default Layout
