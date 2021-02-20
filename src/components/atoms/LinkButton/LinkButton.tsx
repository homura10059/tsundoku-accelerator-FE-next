import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import Loader from '../Loader/Loader'

type Props = {
  isLoading?: boolean
  href?: string
  onClick?: () => void
}

const Wrapper = styled.div<{ isLoading: boolean }>`
  border: solid 2px ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.secondary.dark};

  /* centering */
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    !props.isLoading &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.light};
      }
    `}
`

const LoaderWrapper = styled.div`
  padding: 3px 10px;
`

const Button = styled.a`
  display: block;
  padding: 5px 10px;

  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.on.surface};
  font-weight: bold;
  text-align: center;
`

const LinkButton: React.FC<Props> = ({
  isLoading = false,
  href,
  onClick,
  children,
}) => {
  if (isLoading) {
    return (
      <Wrapper isLoading={isLoading}>
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      </Wrapper>
    )
  }

  if (href) {
    return (
      <Wrapper isLoading={isLoading}>
        <Link href={href}>
          <Button onClick={onClick}>{children}</Button>
        </Link>
      </Wrapper>
    )
  }

  return (
    <Wrapper isLoading={isLoading}>
      <Button onClick={onClick}>{children}</Button>
    </Wrapper>
  )
}

export default LinkButton
