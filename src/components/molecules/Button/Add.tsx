import React, { useCallback, useState } from 'react'
import Router from 'next/router'
import { DocumentAddIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Icon from '@/components/atoms/Loader/Icon'

type Props = {
  basePath: string
}

const onAdd = async (
  basePath: string,
  updateIsLoading: (isLoading: boolean) => void
): Promise<void> => {
  try {
    updateIsLoading(true)
    await Router.push(`${basePath}/add`)
  } catch (error) {
    updateIsLoading(false)
    console.error(error)
  }
}

const Add: React.FC<Props> = ({ basePath }) => {
  const [isLoading, updateIsLoading] = useState(false)
  const callback = useCallback(() => onAdd(basePath, updateIsLoading), [
    basePath,
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
      disabled={isLoading}
    >
      {isLoading ? (
        <Icon className={className} />
      ) : (
        <DocumentAddIcon className={className} />
      )}
    </button>
  )
}

export default Add
