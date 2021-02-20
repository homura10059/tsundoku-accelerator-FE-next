import React, { useState } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import LinkButton from '../../atoms/LinkButton/LinkButton'

type Props = {
  command: 'Delete' | 'Update'
  basePath: string
}

const onDelete = async (
  basePath: string,
  updateIsLoading: (isLoading: boolean) => void
): Promise<void> => {
  try {
    updateIsLoading(true)
    await fetch(`/api${basePath}`, {
      method: 'DELETE',
    })
    await Router.push(`${basePath}/../`)
  } catch (error) {
    updateIsLoading(false)
    console.error(error)
  }
}

const onUpdate = async (
  basePath: string,
  updateIsLoading: (isLoading: boolean) => void
): Promise<void> => {
  try {
    updateIsLoading(true)
    await fetch(`/api${basePath}`, {
      method: 'PUT',
    })
    await Router.reload()
  } catch (error) {
    updateIsLoading(false)
    console.error(error)
  }
}

const Wrapper = styled.div`
  height: 10px;
  width: 10px;
`
const SpinnerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.light};
`

const Spinner = styled.div`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.on.background};
  border-top-color: ${({ theme }) => theme.colors.on.primary};
  animation: spinner 600ms linear infinite;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`

const CommandButton: React.FC<Props> = ({ command, basePath }) => {
  const [isLoading, updateIsLoading] = useState(false)

  const method =
    command === 'Delete'
      ? () => onDelete(basePath, updateIsLoading)
      : command === 'Update'
      ? () => onUpdate(basePath, updateIsLoading)
      : () => {}

  return (
    <Wrapper>
      {!isLoading ? (
        <LinkButton onClick={method}>{command}</LinkButton>
      ) : (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </Wrapper>
  )
}

export default CommandButton
