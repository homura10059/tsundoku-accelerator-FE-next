import React from 'react'

type Props = {
  error?: {
    message?: string
  }
}

const ErrorMessage: React.FC<Props> = ({ error }) => {
  const message = error?.message
  return message ? <p>{message}</p> : null
}

export default ErrorMessage
