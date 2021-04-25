import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import classNames from 'classnames'

type Props = {
  href?: string
  onClick?: () => void
  color?: string
}

const LinkText = styled.a`
  color: ${({ theme }) => theme.colors.on.surface};
  text-decoration: underline;
  cursor: pointer;
`

const Component: React.FC<Props> = ({
  href,
  onClick,
  color = 'on-surface',
  children,
}) => {
  const textClass = classNames('underline', 'cursor-pointer', `text-${color}`)

  if (href) {
    return (
      <Link href={href}>
        <a className={textClass} onClick={onClick}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <a className={textClass} onClick={onClick}>
      {children}
    </a>
  )
}

export default Component
