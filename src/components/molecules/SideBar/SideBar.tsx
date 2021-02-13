import React from 'react'
import styled, { css } from 'styled-components'
import Router, { useRouter } from 'next/router'
import HiddenText from '../../atoms/Text/HiddenText'
import TextLink from '../../atoms/Text/TextLink'

type LinkItemProps = {
  href: string
  text: string
}

const LinkItem: React.FC<LinkItemProps> = ({ href, text }) => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname

  return (
    <li>
      <TextLink href={href} isActive={isActive(href)}>
        {text}
      </TextLink>
    </li>
  )
}

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

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.on.background};
`

const LinkArea = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 0.5rem;
`

const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  margin-top: 1rem;
  * + * {
    margin-top: 0.5rem;
  }
`

const CloseArea = styled.ul`
  background-color: ${({ theme }) => theme.colors.secondary.light};
  opacity: 0.5;
  width: 100%;
  text-decoration: none;
`

const SideBar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  Router.events.on('routeChangeComplete', () => setIsOpen(false))

  return (
    <Nav isOpen={isOpen}>
      <LinkArea>
        <Title>Menu</Title>
        <List>
          <LinkItem href={'/'} text={'HOME'} />
          <LinkItem href={'/wishList'} text={'WishList'} />
          <LinkItem href={'/notification'} text={'Notification'} />
        </List>
      </LinkArea>

      <CloseArea onClick={() => setIsOpen(false)}>
        <HiddenText text={'close'} />
      </CloseArea>
    </Nav>
  )
}

export default SideBar
