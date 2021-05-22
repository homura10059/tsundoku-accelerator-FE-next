import { Popover } from '@headlessui/react'
import { signOut } from 'next-auth/client'
import React from 'react'

import { SessionProps } from '@/interfaces/Session'

import Avatar from '../../atoms/Avatar/Avatar'
import LinkButton from '../../atoms/LinkButton/LinkButton'
import Loader from '../../atoms/Loader/Loader'
import LinkMenu, { LinkProps } from '../../molecules/LinkMenu/LinkMenu'

const links: LinkProps[] = [
  {
    text: 'Profile',
    href: '/user/profile'
  },
  {
    text: 'Notification',
    href: '/notification'
  },
  {
    text: 'Logout',
    onClick: () => signOut()
  }
]

type Props = SessionProps

export const User: React.FC<Props> = ({ session, loading }) => {
  if (loading) {
    return (
      <div className={'relative'}>
        <Loader width={32} height={32} />
      </div>
    )
  }
  if (!session) {
    return (
      <div className={'relative'}>
        <LinkButton href="/api/auth/signin">Log in</LinkButton>
      </div>
    )
  }

  return (
    <Popover className="relative">
      <Popover.Button
        className={'rounded-full flex items-center justify-center'}
      >
        <Avatar name={session.user.name} image={session.user.image} />
      </Popover.Button>
      <Popover.Panel className="absolute z-10 right-0">
        <LinkMenu links={links} />
      </Popover.Panel>
    </Popover>
  )
}

export default User
