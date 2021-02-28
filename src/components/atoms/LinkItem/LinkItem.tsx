import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { parallelogram, animationMoving } from '../../atoms/Utils/Parallelogram'

const ItemWrapper = styled.a`
  position: relative;
  color: ${({ theme }) => theme.colors.on.surface};
  text-decoration: none;
  padding: 5px;
  z-index: 1;
  display: block;

  :hover {
    background-color: ${({ theme }) => theme.colors.reverse.light};
  }

  :hover:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    z-index: 3;

    width: 100%;
    height: 100%;

    background-color: white;

    mix-blend-mode: difference;
    ${parallelogram}

    animation-name: moving;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  ${animationMoving}
`

const Inner = styled.div`
`

export type LinkItemProps = {
  href?: string
  onClick?: () => void
}

const LinkItem: React.FC<LinkItemProps> = ({ href, onClick, children }) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <ItemWrapper onClick={onClick}>
          <Inner>{children}</Inner>
        </ItemWrapper>
      </Link>
    )
  }
  return (
    <ItemWrapper onClick={onClick}>
      <Inner>{children}</Inner>
    </ItemWrapper>
  )
}

export default LinkItem
