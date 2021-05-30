import { LoginIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Router from 'next/router'
import React, { useCallback, useState } from 'react'

import ActionIcon from '@/components/atoms/Button/ActionIcon'

type Props = {}

const onLogin = async (
  updateIsLoading: (isLoading: boolean) => void
): Promise<void> => {
  try {
    updateIsLoading(true)
    await Router.push(`/api/auth/signin`)
  } catch (error) {
    updateIsLoading(false)
    console.log(error)
  }
}

const Login: React.FC<Props> = () => {
  const [isLoading, updateIsLoading] = useState(false)
  const callback = useCallback(() => onLogin(updateIsLoading), [])

  const className = classNames('w-7', 'h-7')

  return (
    <ActionIcon
      onClick={callback}
      disabled={isLoading}
      iconClassName={className}
    >
      <LoginIcon className={className} />
    </ActionIcon>
  )
}

export default Login
