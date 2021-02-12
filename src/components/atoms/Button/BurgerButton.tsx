import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Button = styled.button``
const HamburgerLine = styled.span``
const VisuallyHidden = styled.span``

const BurgerButton: React.FC<Props> = ({ isOpen, setIsOpen: setIsOpen }) => {
  return (
    <Button
      type="button"
      aria-controls="global-nav"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <HamburgerLine>
        <VisuallyHidden>メニューを開閉する</VisuallyHidden>
      </HamburgerLine>
    </Button>
  )
}

export default BurgerButton
