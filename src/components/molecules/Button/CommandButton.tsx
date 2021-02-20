import React, { useState } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import LinkButton from '../../atoms/LinkButton/LinkButton'

type Props = {
  command: 'Delete' | 'Update' | 'Edit'
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

const onEdit = async (
  basePath: string,
  updateIsLoading: (isLoading: boolean) => void
): Promise<void> => {
  try {
    updateIsLoading(true)
    await fetch(`/api${basePath}`, {
      method: 'PATCH',
    })
    await Router.reload()
  } catch (error) {
    updateIsLoading(false)
    console.error(error)
  }
}

const Wrapper = styled.div`
  width: 84px;
  height: 26px;
`

const CommandButton: React.FC<Props> = ({ command, basePath }) => {
  const [isLoading, updateIsLoading] = useState(false)

  const method =
    command === 'Delete'
      ? () => onDelete(basePath, updateIsLoading)
      : command === 'Update'
      ? () => onUpdate(basePath, updateIsLoading)
      : command === 'Edit'
      ? () => onEdit(basePath, updateIsLoading)
      : () => {}

  return (
    <Wrapper>
      <LinkButton isLoading={isLoading} onClick={method}>
        {command}
      </LinkButton>
    </Wrapper>
  )
}

export default CommandButton
