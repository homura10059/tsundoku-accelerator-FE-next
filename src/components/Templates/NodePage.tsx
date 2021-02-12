import React from 'react'
import styled from 'styled-components'
import LinkButton from '../atoms/Button/LinkButton'

type Props = {
  title: string
  basePath: string
  canUpdate?: boolean
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
`

const MainArea = styled.div`
  margin-top: 1rem;
`

const NodePage: React.FC<Props> = ({ title, basePath, canUpdate = false, children }) => {
  return (
    <Wrapper>
      <TopBar>
        <Title>{title}</Title>
        {canUpdate && (<LinkButton href={`/${basePath}/update`} label={'Update'} />)}
        <LinkButton href={`/${basePath}/edit`} label={'Edit'} />
        <LinkButton href={`/${basePath}/delete`} label={'Delete'} />
      </TopBar>
      <MainArea>{children}</MainArea>
    </Wrapper>
  )
}

export default NodePage
