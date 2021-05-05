import React, { useCallback, useState } from 'react'
import Router from 'next/router'
import { RefreshIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Icon from '@/components/atoms/Loader/Icon'

type Props = {
  basePath: string
}

const onRefresh = async (
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

const Refresh: React.FC<Props> = ({ basePath }) => {
  const [isLoading, updateIsLoading] = useState(false)
  const callback = useCallback(() => onRefresh(basePath, updateIsLoading), [
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
        <RefreshIcon className={className} />
      )}
    </button>
  )
}

export default Refresh
