import { TrashIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Router from 'next/router'
import React, { useCallback, useState } from 'react'

import ActionIcon from '@/components/atoms/Button/ActionIcon'

type Props = {
  basePath: string
}

const onDelete = async (
  basePath: string,
  updateIsLoading: (isLoading: boolean) => void
): Promise<void> => {
  try {
    updateIsLoading(true)
    await fetch(`/api${basePath}`, {
      method: 'DELETE'
    })
    await Router.push(`${basePath}/../`)
  } catch (error) {
    updateIsLoading(false)
    console.log(error)
  }
}

const Delete: React.FC<Props> = ({ basePath }) => {
  const [isLoading, updateIsLoading] = useState(false)
  const callback = useCallback(() => onDelete(basePath, updateIsLoading), [
    basePath
  ])

  const className = classNames('w-5', 'h-5')

  return (
    <ActionIcon
      onClick={callback}
      disabled={isLoading}
      iconClassName={className}
    >
      <TrashIcon className={className} />
    </ActionIcon>
  )
}

export default Delete
