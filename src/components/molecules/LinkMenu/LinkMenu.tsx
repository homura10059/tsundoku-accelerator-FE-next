import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

import Hover from '@/components/atoms/Hover/Hover'

export type LinkProps = {
  href?: string
  onClick?: () => void
  text: string
}

type Props = {
  links: LinkProps[]
}

const LinkMenu: React.FC<Props> = ({ links }) => {
  if (links.length === 0) {
    return null
  }
  return (
    <ul className={classNames('bg-surface', 'p-4', 'h-full', 'space-y-3')}>
      {links.map(link => (
        <li key={link.text}>
          <Hover>
            <Link href={link.href ?? '#'}>
              <a onClick={link.onClick}>{link.text}</a>
            </Link>
          </Hover>
        </li>
      ))}
    </ul>
  )
}

export default LinkMenu
