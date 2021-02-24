import React, { useState } from 'react'
import styled from 'styled-components'
import { useSession } from 'next-auth/client'
import Loader from '../../atoms/Loader/Loader'
import LinkButton from '../../atoms/LinkButton/LinkButton'
import Avatar from '../../atoms/Avatar/Avatar'
import { Session } from 'next-auth/client'
import LinkMenu, { LinkItemProps } from '../../molecules/LinkMenu/LinkMenu'
import { signOut } from 'next-auth/client'

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

const links: LinkItemProps[] = [
  {
    text: 'Profile',
    href: '/user/profile',
  },
  {
    text: 'Notification',
    href: '/notification',
  },
  {
    text: 'Logout',
    onClick: () => signOut(),
  },
]

type Props = SessionProps

export const User: React.FC<Props> = ({ session, loading }) => {
  const [isOpen, setIsOpen] = useState(false)

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
        {isOpen && <LinkMenu links={links} />}
      </div>
    </Wrapper>
  )
}

const Connect: React.FC<{}> = ({}) => {
  const [session, loading] = useSession()
  return (
    <User
      {...{
        session,
        loading,
      }}
    />
  )
}

export default Connect
