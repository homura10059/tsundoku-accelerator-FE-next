import React, { useState } from 'react'
import styled from 'styled-components'
import SideBar from '../SideBar/SideBar'
import MenuButton from '../../atoms/MenuButton/MenuButton'
import User from '../User/User'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.light};
  padding: 0.2rem;
`

const Left = styled.div`
  display: flex;
`
const Right = styled.div`
  display: flex;
  margin-left: auto;
`

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <Left>
        <MenuButton onClick={() => setIsOpen(!isOpen)} />
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </Left>
      <Right>
        <User />
      </Right>
    </Wrapper>
  )
}

export default Header
