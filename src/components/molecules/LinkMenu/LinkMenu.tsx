import classNames from 'classnames'
import React from 'react'

import LinkItem, { LinkItemProps } from '../../atoms/LinkItem/LinkItem'

export type LinkProps = LinkItemProps & { text: string }

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
          <LinkItem href={link.href} onClick={link.onClick}>
            {link.text}
          </LinkItem>
        </li>
      ))}
    </ul>
  )
}

export default LinkMenu
