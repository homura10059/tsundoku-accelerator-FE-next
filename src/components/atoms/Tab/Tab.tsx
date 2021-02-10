import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  href: string
}

const TabLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.on.primary};
  display: inline-block;

  &[data-active='false'] {
    cursor: pointer;
  }

  &[data-active='true'] {
    color: gray;
  }
`

const Tab: React.FC<Props> = ({ href, children }) => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname
  return (
    <Link href={href}>
      <TabLink data-active={isActive(href)}>{children}</TabLink>
    </Link>
  )
}

export default Tab
