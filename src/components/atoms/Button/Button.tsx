import React from 'react'
import styled from 'styled-components'

type Props = {
  label?: string
  href?: string
  onClick?: () => void
}

const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.sub};
  border: none;
  border-radius: 3px;
  :hover {
    border-bottom-color: transparent;
    transform: translateY(0.1875em);
  }
`

const TextButton = styled.a`
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1rem;
`

const Button: React.FC<Props> = ({ label, href, onClick }) => (
  <Wrapper>
    <TextButton href={href} onClick={onClick}>{label}</TextButton>
  </Wrapper>
)

export default Button
