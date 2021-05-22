import React from 'react'
import styled from 'styled-components'

import LinkItem, { LinkItemProps } from '../../atoms/LinkItem/LinkItem'

export type LinkProps = LinkItemProps & { text: string }

type Props = {
  links: LinkProps[]
}

const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 15px;
  height: 100%;
  li + li {
    margin-top: 20px;
  }
`

const LinkMenu: React.FC<Props> = ({ links }) => {
  if (links.length === 0) {
    return null
  }
  return (
    <List>
      {links.map(link => (
        <li key={link.text}>
          <LinkItem href={link.href} onClick={link.onClick}>
            {link.text}
          </LinkItem>
        </li>
      ))}
    </List>
  )
}

export default LinkMenu
