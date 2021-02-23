import React, { useState } from 'react'
import styled from 'styled-components'
import { useSession } from 'next-auth/client'
import Loader from '../../atoms/Loader/Loader'
import LinkButton from '../../atoms/LinkButton/LinkButton'
import Avatar from '../../atoms/Avatar/Avatar'
import { Session } from 'next-auth/client'

type SessionProps = {
  session?: Session
  loading: boolean
}

const Wrapper = styled.div`
  /* centering */
  display: flex;
  justify-content: center;
  align-items: center;
`

const AvatarLink = styled.a`
  cursor: pointer;
`


type Props = SessionProps & {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
export const User: React.FC<Props> = ({
  session,
  loading,
  isOpen,
  setIsOpen,
}) => {
  if (loading) {
    return (
      <Wrapper>
        <Loader width={32} height={32} />
      </Wrapper>
    )
  }
  if (!session) {
    return (
      <Wrapper>
        <LinkButton href="/api/auth/signin">Log in</LinkButton>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div>
        <AvatarLink onClick={() => setIsOpen(!isOpen)}>
          <Avatar name={session.user.name} image={session.user.image} />
        </AvatarLink>
        {isOpen && (
          <ul>
            <li>profile</li>
            <li>notification</li>
            <li>logout</li>
          </ul>
        )}
      </div>
    </Wrapper>
  )
}

const Connect: React.FC<{}> = ({}) => {
  const [session, loading] = useSession()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <User
      {...{
        session,
        loading,
        isOpen,
        setIsOpen,
      }}
    />
  )
}

export default Connect
