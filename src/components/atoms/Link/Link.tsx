import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  href?: string
  onClick?: () => void
}

const LinkText = styled.a`
  color: ${({ theme }) => theme.colors.on.surface};
  text-decoration: underline;
  cursor: pointer;
`

const Component: React.FC<Props> = ({ href, onClick, children }) => {
  if (href) {
    return onClick ? (
      <Link href={href} passHref>
        <LinkText onClick={onClick}>{children}</LinkText>
      </Link>
    ) : (
      <LinkText>{children}</LinkText>
    )
  }

  return onClick ? (
    <LinkText onClick={onClick}>{children}</LinkText>
  ) : (
    <LinkText>{children}</LinkText>)
}

export default Component
