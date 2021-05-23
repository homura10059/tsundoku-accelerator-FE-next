import classNames from 'classnames'
import React from 'react'

type Props = {
  onClick?: () => void
  children?: React.ReactNode
}

const TextButton: React.FC<Props> = ({ onClick, children }) => (
  <button
    className={classNames(
      'py-2',
      'px-4',
      'bg-secondary-light',
      'active:bg-secondary-dark',
      'text-on-secondary',
      'disabled:opacity-80'
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default TextButton
