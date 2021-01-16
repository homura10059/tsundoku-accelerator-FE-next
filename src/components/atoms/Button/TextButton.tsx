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
  border-radius: 6px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  :hover {
    transform: translate3d(0px,-1px,0px);
    background-color: ${({ theme }) => theme.colors.main};
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
`

const Button = styled.a`
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1rem;
`

const TextButton: React.FC<Props> = ({ label, href, onClick }) => (
  <Wrapper>
    <Button href={href} onClick={onClick}>{label}</Button>
  </Wrapper>
)

export default TextButton
