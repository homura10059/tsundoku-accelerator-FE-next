import React from 'react'
import styled, { css } from 'styled-components'
import Router from 'next/router'
import HiddenText from '../../atoms/Text/HiddenText'
import Title from '../../atoms/Title/Title'
import LinkMenu, { LinkProps } from '../../molecules/LinkMenu/LinkMenu'

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

const LinkArea = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.dark};
`

const TitleArea = styled.div`
  padding: 0.5rem;
`

const CloseArea = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary.light};
  opacity: 0.5;
  width: 100%;
  text-decoration: none;
`

const links: LinkProps[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'WishList',
    href: '/wishList',
  },
  {
    text: 'Notification',
    href: '/notification',
  },
]

const SideBar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  Router.events.on('routeChangeComplete', () => setIsOpen(false))

  return (
    <Nav isOpen={isOpen}>
      <LinkArea>
        <TitleArea>
          <Title>Menu</Title>
        </TitleArea>
        <LinkMenu links={links} />
      </LinkArea>
      <CloseArea onClick={() => setIsOpen(false)}>
        <HiddenText text={'close'} />
      </CloseArea>
    </Nav>
  )
}

export default SideBar
