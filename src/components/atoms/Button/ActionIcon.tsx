import { Loader } from '@mantine/core'
import classNames from 'classnames'
import React from 'react'

type Props = {
  onClick: () => Promise<void>
  disabled: boolean
  iconClassName?: string
  children?: React.ReactNode
}

const ActionIcon: React.VFC<Props> = ({
  onClick,
  disabled,
  iconClassName = 'w-5 h-5',
  children
}) => {
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
        { 'hover:bg-primary-light': !disabled }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? (
        <Loader className={iconClassName} style={{ fill: '#FFFFFF' }} />
      ) : (
        <>{children}</>
      )}
    </button>
  )
}

export default ActionIcon
