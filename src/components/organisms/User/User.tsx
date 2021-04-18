import React, { useState } from 'react'
import styled from 'styled-components'
import { signOut } from 'next-auth/client'
import Loader from '../../atoms/Loader/Loader'
import LinkButton from '../../atoms/LinkButton/LinkButton'
import Avatar from '../../atoms/Avatar/Avatar'
import LinkMenu, { LinkProps } from '../../molecules/LinkMenu/LinkMenu'
import { SessionProps } from '@/interfaces/Session'

const Wrapper = styled.div`
  position: relative;
`
const MenuWrapper = styled.div`
  position: absolute;
  right: 0;
`

const AvatarLink = styled.a`
  cursor: pointer;
`

const links: LinkProps[] = [
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
      <p className="text-3xl text-red-500 font-bold">Hello Tailwind</p>

      <AvatarLink onClick={() => setIsOpen(!isOpen)}>
        <Avatar name={session.user.name} image={session.user.image} />
      </AvatarLink>
      {isOpen && (
        <MenuWrapper>
          <LinkMenu links={links} />
        </MenuWrapper>
      )}
    </Wrapper>
  )
}

export default User
