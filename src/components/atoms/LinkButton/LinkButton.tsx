import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  href?: string
  onClick?: () => void
}

const Button = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.on.surface};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.secondary.dark};
  border: solid 2px ${({ theme }) => theme.colors.border};
  padding: 5px 10px;
  border-radius: 6px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
`

const LinkButton: React.FC<Props> = ({ href, onClick, children }) => {
  if (href) {
    return (
      <Link href={href}>
        <Button onClick={onClick}>{children}</Button>
      </Link>
    )
  }
  return <Button onClick={onClick}>{children}</Button>
}

export default LinkButton
