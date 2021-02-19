import React from 'react'
import styled, { css } from 'styled-components'
import Router from 'next/router'
import HiddenText from '../../atoms/Text/HiddenText'
import LinkBox from '../../molecules/LinkBox/LinkBox'
import Title from '../../atoms/Title/Title'

type LinkItemProps = {
  href: string
}

const ItemText = styled.div`
  padding: 0.5rem;
`

const LinkItem: React.FC<LinkItemProps> = ({ href, children }) => {
  return (
    <li>
      <LinkBox href={href}>
        <ItemText>{children}</ItemText>
      </LinkBox>
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

const LinkArea = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.dark};
`

const TitleArea = styled.div`
  padding: 0.5rem;
`

const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.secondary.dark};
  padding: 0.5rem;
  height: 100%;
  * + * {
    margin-top: 0.5rem;
  }
`

const CloseArea = styled.a`
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
        <TitleArea>
          <Title>Menu</Title>
        </TitleArea>
        <List>
          <LinkItem href={'/'}>HOME</LinkItem>
          <LinkItem href={'/wishList'}>WishList</LinkItem>
          <LinkItem href={'/notification'}>Notification</LinkItem>
        </List>
      </LinkArea>
      <CloseArea onClick={() => setIsOpen(false)}>
        <HiddenText text={'close'} />
      </CloseArea>
    </Nav>
  )
}

export default SideBar
