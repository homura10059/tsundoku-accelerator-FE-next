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

const Component: React.FC<Props> = ({ href, onClick, children }) =>
  href ? (
    <Link href={href} passHref>
      <LinkText onClick={onClick}>{children}</LinkText>
    </Link>
  ) : (
    <LinkText onClick={onClick}>{children}</LinkText>
  )

export default Component
