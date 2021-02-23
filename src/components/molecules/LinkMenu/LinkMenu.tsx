import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { parallelogram, animationMoving } from '../../atoms/Utils/Parallelogram'

type Props = {
  links: LinkItemProps[]
}

const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 10px;
  height: 100%;
  li + li {
    margin-top: 20px;
  }
`
const ItemWrapper = styled.a`
  position: relative;

  text-decoration: none;
  padding: 5px;
  z-index: 1;

  :hover {
    background-color: ${({ theme }) => theme.colors.reverse.light};
  }

  :hover:after {
    position: absolute;
    top: -5%;
    left: -5%;
    content: '';
    z-index: 3;

    width: 110%;
    height: 110%;

    background-color: white;

    mix-blend-mode: difference;
    ${parallelogram}

    animation-name: moving;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  ${animationMoving}
`

const ItemText = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.on.surface};
  z-index: 5;
`

type LinkItemProps = {
  href: string
  text: string
}

const LinkItem: React.FC<LinkItemProps> = ({ href, text }) => {
  return (
    <li>
      <Link href={href} passHref>
        <ItemWrapper>
          <ItemText>{text}</ItemText>
        </ItemWrapper>
      </Link>
    </li>
  )
}

const LinkMenu: React.FC<Props> = ({ links }) => {
  if (links.length === 0) {
    return null
  }
  return (
    <List>
      {links.map((link) => (
        <LinkItem {...link} />
      ))}
    </List>
  )
}

export default LinkMenu
