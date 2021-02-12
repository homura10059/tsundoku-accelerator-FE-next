import React from 'react'
import styled from 'styled-components'
import TextButton from '../../atoms/Button/TextButton'
import LinkButton from '../../atoms/Button/LinkButton'
import { signOut } from 'next-auth/client'

type Props = {
  session?: {
    user: {
      name: string
      email: string
    }
  }
  loading: boolean
}

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  * + * {
    margin-left: 0.2rem;
  }
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.on.primary};
`

const Navigation: React.FC<Props> = ({ session, loading }) => {
  if (loading) {
    return (
      <Wrapper>
        <p>Validating session ...</p>
      </Wrapper>
    )
  }

  if (!session) {
    return (
      <Wrapper>
        <LinkButton href="/api/auth/signin" label={'Log in'} />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Text>
        {session.user.name} ({session.user.email})
      </Text>
      <TextButton label={'Log out'} onClick={() => signOut()} />
    </Wrapper>
  )
}

export default Navigation
