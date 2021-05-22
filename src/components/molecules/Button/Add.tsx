import { DocumentAddIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Router from 'next/router'
import React, { useCallback, useState } from 'react'

import ActionIcon from '@/components/atoms/Button/ActionIcon'

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
    console.log(error)
  }
}

const Add: React.FC<Props> = ({ basePath }) => {
  const [isLoading, updateIsLoading] = useState(false)
  const callback = useCallback(() => onAdd(basePath, updateIsLoading), [
    basePath
  ])

  const className = classNames('w-5', 'h-5')

  return (
    <ActionIcon
      onClick={callback}
      disabled={isLoading}
      iconClassName={className}
    >
      <DocumentAddIcon className={className} />
    </ActionIcon>
  )
}

export default Add
