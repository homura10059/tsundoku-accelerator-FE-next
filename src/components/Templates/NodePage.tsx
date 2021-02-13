import React from 'react'
import styled from 'styled-components'
import LinkButton from '../atoms/Button/LinkButton'
import CommandButton from '../molecules/Button/CommandButton'

type Props = {
  title: string
  basePath: string
  command?: {
    canUpdate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }
}

const Wrapper = styled.main`
  margin-top: 0.5rem;
`

const TopBar = styled.div`
  display: flex;
  * + * {
    margin-left: 0.5rem;
  }
`
const Title = styled.h1`
  font-size: 2rem;
`

const MainArea = styled.div`
  margin-top: 1rem;
`

const NodePage: React.FC<Props> = ({
  title,
  basePath,
  command = { canUpdate: false, canEdit: false, canDelete: false },
  children,
}) => {
  return (
    <Wrapper>
      <TopBar>
        <Title>{title}</Title>
        {command.canUpdate && (
          <CommandButton command={'Update'} basePath={basePath} />
        )}
        {command.canEdit && (
          <LinkButton href={`/${basePath}/edit`} label={'Edit'} />
        )}
        {command.canDelete && (
          <CommandButton command={'Delete'} basePath={basePath} />
        )}
      </TopBar>
      <MainArea>{children}</MainArea>
    </Wrapper>
  )
}

export default NodePage
