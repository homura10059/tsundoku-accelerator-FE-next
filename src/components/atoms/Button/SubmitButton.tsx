import classNames from 'classnames'
import React from 'react'

type Props = {
  disabled?: boolean
  value?: string
}

const SubmitButton: React.FC<Props> = ({
  disabled = false,
  value = 'submit'
}) => (
  <input
    className={classNames(
      'py-2',
      'px-4',
      'bg-secondary-light',
      'active:bg-secondary-dark',
      'text-on-secondary',
      'disabled:opacity-80'
    )}
    disabled={disabled}
    type="submit"
    value={value}
  />
)

export default SubmitButton
