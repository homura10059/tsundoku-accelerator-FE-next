import { Popover } from '@mantine/core'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import React, { useEffect, useState } from 'react'

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
  const router = useRouter()
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    const handleRouteChange = (_url, { _shallow }) => {
      setOpened(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

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
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={
        <button
          className={'rounded-full flex items-center justify-center'}
          onClick={() => setOpened(o => !o)}
        >
          <Avatar name={session.user.name} image={session.user.image} />
        </button>
      }
      bodyStyle={{ border: 0 }}
      position="bottom"
      placement="end"
      spacing={5}
      withArrow
    >
      <LinkMenu links={links} />
    </Popover>
  )
}

export default User
