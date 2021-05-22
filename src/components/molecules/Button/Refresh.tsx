import { RefreshIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Router from 'next/router'
import React, { useCallback, useState } from 'react'

import ActionIcon from '@/components/atoms/Button/ActionIcon'

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
      method: 'PUT'
    })
    await Router.reload()
  } catch (error) {
    updateIsLoading(false)
    console.log(error)
  }
}

const Refresh: React.FC<Props> = ({ basePath }) => {
  const [isLoading, updateIsLoading] = useState(false)
  const callback = useCallback(() => onRefresh(basePath, updateIsLoading), [
    basePath
  ])

  const className = classNames('w-5', 'h-5')

  return (
    <ActionIcon
      onClick={callback}
      disabled={isLoading}
      iconClassName={className}
    >
      <RefreshIcon className={className} />
    </ActionIcon>
  )
}

export default Refresh
