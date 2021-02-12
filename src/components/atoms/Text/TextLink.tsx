import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

type Props = {
  href: string
  isActive: boolean
}

const Text = styled.a`
  color: ${({ theme }) => theme.colors.on.primary};

  :hover {
    color: ${({ theme }) => theme.colors.on.background};
  }
`

const TextLink: React.FC<Props> = ({ href, isActive, children }) => (
  <Link href={href} passHref>
    <Text data-active={isActive}>{children}</Text>
  </Link>
)

export default TextLink
