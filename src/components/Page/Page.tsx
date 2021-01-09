import React from 'react'
import Metadata from '../organisms/Metadata/Metadata'
import MustHead from '../organisms/MustHead/MustHead'
import styled from 'styled-components'

type Props = {
  title?: string
}

const Body = styled.body`
  background-color: ${({ theme }) => theme.colors.base};
`

const Main = styled.main`
  width: 700px;
  margin-right: auto;
  margin-left: auto;
`

const Page: React.FC<Props> = ({ title, children }) => (
  <div>
    <Metadata title={title} />
    <Body>
      <MustHead />
      <Main>{children}</Main>
    </Body>
  </div>
)

export default Page
