import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import TextButton from './TextButton'

type Props = {
  href: string
  label: string
  onClick?: () => {}
}

const LinkButton: React.FC<Props> = ({ href, label, onClick }) => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname
  return (
    <Link href={href}>
      <TextButton
        label={label}
        onClick={onClick}
        data-active={isActive(href)}
      />
    </Link>
  )
}

export default LinkButton
