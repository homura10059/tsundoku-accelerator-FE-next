import React from 'react'
import styled from 'styled-components'
import LinkButton from '../atoms/Button/LinkButton'

type Props = {
  title: string
  basePath: string
}

const Wrapper = styled.main`
  margin-top: 0.5rem;
`

const TopBar = styled.div`
  display: flex;
  * + * {
    margin-left: 1rem;
  }
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.on.background};
`

const MainArea = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.on.background};
`

const ListPage: React.FC<Props> = ({ title, basePath, children }) => {
  return (
    <Wrapper>
      <TopBar>
        <Title>{title}</Title>
        <LinkButton href={`/${basePath}/add`} label={'Add'} />
      </TopBar>
      <MainArea>{children}</MainArea>
    </Wrapper>
  )
}

export default ListPage
