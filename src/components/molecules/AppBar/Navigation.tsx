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
  &:first-child {
    margin-bottom: 20px;
  }
`

const Item = styled.div`
  &:not(:last-child) {
    margin-right: 0.2rem;
  }
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
      <Item>
        <p>
          {session.user.name} ({session.user.email})
        </p>
      </Item>
      <Item>
        <LinkButton href="/create" label={'New post'} />
      </Item>
      <Item>
        <LinkButton href="/wishList/add" label={'Add WishList'} />
      </Item>
      <Item>
        <TextButton label={'Log out'} onClick={() => signOut()} />
      </Item>
    </Wrapper>
  )
}

export default Navigation
