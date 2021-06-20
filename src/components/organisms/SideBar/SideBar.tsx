import { MenuIcon } from '@heroicons/react/solid'
import { Drawer } from '@mantine/core'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Title from '../../atoms/Title/Title'
import LinkMenu, { LinkProps } from '../../molecules/LinkMenu/LinkMenu'

type Props = {}

const links: LinkProps[] = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'WishList',
    href: '/wishList'
  },
  {
    text: 'Notification',
    href: '/notification'
  }
]

const SideBar: React.VFC<Props> = () => {
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

  return (
    <>
      <Drawer opened={opened} onClose={() => setOpened(false)}>
        <div className={'bg-primary-dark p-2'}>
          <Title>Menu</Title>
        </div>
        <LinkMenu links={links} />
      </Drawer>

      <button onClick={() => setOpened(true)}>
        <MenuIcon className={'w-10 h-10 text-white cursor-pointer'} />
      </button>
    </>
  )
}

export default SideBar
