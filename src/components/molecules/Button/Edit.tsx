import { PencilAltIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Router from 'next/router'
import React, { useCallback, useState } from 'react'

import Icon from '@/components/atoms/Loader/Icon'

type Props = {
  basePath: string
}

const onEdit = async (
  basePath: string,
  updateIsLoading: (isLoading: boolean) => void
): Promise<void> => {
  try {
    updateIsLoading(true)
    await fetch(`/api${basePath}`, {
      method: 'PATCH'
    })
    await Router.reload()
  } catch (error) {
    updateIsLoading(false)
    console.log(error)
  }
}

const Edit: React.FC<Props> = ({ basePath }) => {
  const [isLoading, updateIsLoading] = useState(false)
  const callback = useCallback(() => onEdit(basePath, updateIsLoading), [
    basePath
  ])

  const className = classNames('w-5', 'h-5')

  return (
    <button
      className={classNames(
        'border-2',
        'border-solid',
        'border-on-background',
        'rounded-md',
        'p-1',
        'text-on-background',
        'bg-secondary-dark',
        { 'hover:bg-primary-light': !isLoading }
      )}
      onClick={callback}
    >
      {isLoading ? (
        <Icon className={className} />
      ) : (
        <PencilAltIcon className={className} />
      )}
    </button>
  )
}

export default Edit
