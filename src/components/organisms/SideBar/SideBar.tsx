import React from 'react'
import Title from '../../atoms/Title/Title'
import LinkMenu, { LinkProps } from '../../molecules/LinkMenu/LinkMenu'
import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/solid'
import classNames from 'classnames'

type Props = {}

const links: LinkProps[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'WishList',
    href: '/wishList',
  },
  {
    text: 'Notification',
    href: '/notification',
  },
]

const SideBar: React.VFC<Props> = ({}) => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <MenuIcon className={'w-10 h-10 text-white cursor-pointer'} />
      </Popover.Button>

      <Popover.Panel
        className={classNames(
          'absolute',
          'z-10',
          '-top-2',
          '-left-2',
          'h-screen',
          'bg-primary-dark'
        )}
      >
        <div className={'p-2'}>
          <Title>Menu</Title>
        </div>
        <LinkMenu links={links} />
      </Popover.Panel>
    </Popover>
  )
}

export default SideBar
