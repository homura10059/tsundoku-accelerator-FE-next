import React from 'react'
import styled from 'styled-components'

type Props = {
  onClick?: () => void
}

const Button = styled.a`
  text-decoration: none;
  height: 36px;
  width: 36px;
  min-width: 36px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.on.primary};
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`

const Bar = styled.span`
  position: absolute;
  content: '';
  display: block;
  height: 4px;
  width: 28px;
  background-color: ${({ theme }) => theme.colors.on.primary};

  :nth-of-type(1) {
    top: 6px;
    left: 4px;
  }
  :nth-of-type(2) {
    top: 16px;
    left: 4px;
  }
  :nth-of-type(3) {
    bottom: 6px;
    left: 4px;
  }
`

const MenuButton: React.FC<Props> = ({ onClick }) => (
  <Button onClick={onClick}>
    {/* <HiddenText text={'Menu'} /> */}
    <Bar />
    <Bar />
    <Bar />
  </Button>
)

export default MenuButton
