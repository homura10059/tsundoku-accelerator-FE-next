import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

type Props = {
  href?: string
  onClick?: () => void
  color?: string
}

const Component: React.FC<Props> = ({
  href,
  onClick,
  color = 'on-surface',
  children
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
