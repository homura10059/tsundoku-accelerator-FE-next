import React from 'react'
import styled from 'styled-components'
import LinkButton from '../../atoms/LinkButton/LinkButton'
import Title from '../../atoms/Title/Title'

type Props = {
  title: string
  basePath: string
}

const TopBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  * + * {
    margin-left: 1rem;
  }
`
const MainArea = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.on.background};
`

const ListPage: React.FC<Props> = ({ title, basePath, children }) => {
  return (
    <div className={'bg-background p-1 h-screen'}>
      <TopBar>
        <Title>{title}</Title>
        <LinkButton href={`/${basePath}/add`}>Add</LinkButton>
      </TopBar>
      <MainArea>{children}</MainArea>
    </div>
  )
}

export default ListPage
