import React from 'react'
import styled, { css } from 'styled-components'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import HiddenText from '../../atoms/Text/HiddenText'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  z-index: ${({ theme }) => theme.layer.top};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.isOpen
      ? css`
          left: 0;
        `
      : css`
          left: -100%;
        `}
`

const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  * + * {
    margin-top: 1rem;
  }
`

const CloseArea = styled.ul`
  background-color: ${({ theme }) => theme.colors.secondary.light};
  opacity: 0.5;
  width: 100%;
  text-decoration: none;
`

const SideBar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const router = useRouter()
  Router.events.on('routeChangeComplete', () => setIsOpen(false))

  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname

  return (
    <Nav isOpen={isOpen}>
      <List>
        <li>
          <Link href={'/'} passHref>
            <a data-active={isActive('/')}>HOME</a>
          </Link>
        </li>
        <li>
          <Link href={'/notification'} passHref>
            <a data-active={isActive('/notification')}>Notification</a>
          </Link>
        </li>
      </List>
      <CloseArea onClick={() => setIsOpen(false)}>
        <HiddenText text={'close'} />
      </CloseArea>
    </Nav>
  )
}

export default SideBar
