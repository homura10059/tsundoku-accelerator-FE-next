import { Popover } from '@headlessui/react'
import classNames from 'classnames'
import { signOut } from 'next-auth/client'
import React from 'react'

import Icon from '@/components/atoms/Loader/Icon'
import Login from '@/components/molecules/Button/Login'
import { SessionProps } from '@/interfaces/Session'

import Avatar from '../../atoms/Avatar/Avatar'
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
        <Icon
          className={classNames(
            'border-2',
            'border-solid',
            'border-on-background',
            'rounded-md',
            'w-10',
            'h-10',
            'p-1',
            'bg-secondary-dark'
          )}
        />
      </div>
    )
  }
  if (!session) {
    return (
      <div className={'relative'}>
        <Login />
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
