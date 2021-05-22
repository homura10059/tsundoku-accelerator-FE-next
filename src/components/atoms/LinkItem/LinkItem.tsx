import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import {
  parallelogram,
  parallelogramAnimation,
  widePentagon,
  widePentagonAnimation
} from '../Utils/Parallelogram'

const ItemWrapper = styled.a`
  display: block;
  position: relative;
  text-decoration: none;

  width: 100%;
  height: 100%;

  z-index: 0;

  :hover:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';

    width: 100%;
    height: 100%;

    z-index: 1;

    background-color: ${({ theme }) => theme.colors.reverse.light};
    ${widePentagon}
    ${widePentagonAnimation}
  }

  :hover:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';

    width: 100%;
    height: 100%;

    z-index: 2;

    background-color: ${({ theme }) => theme.colors.primary.light};
    mix-blend-mode: color-dodge;
    ${parallelogram}
    ${parallelogramAnimation}
  }
`

const Inner = styled.div`
  position: relative;
  z-index: 3;
  padding: 10px 8%;

  color: ${({ theme }) => theme.colors.on.background};

  :hover {
    color: ${({ theme }) => theme.colors.on.border};
  }
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
