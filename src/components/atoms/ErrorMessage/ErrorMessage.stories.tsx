import React from 'react'
import ErrorMessage from './ErrorMessage'

export default {
  title: 'Design System/atoms/ErrorMessage',
  decorators: [
    (Story) => (
      <Story />
    )
  ]
}

export const showErrorIsUndefined = () => (
  <ErrorMessage error={undefined} />
)

export const showErrorMessageIsEmpty = () => (
  <ErrorMessage error={{ message: undefined }} />
)

export const showErrorMessage = () => (
  <ErrorMessage error={{ message: 'dummy error message' }} />
)