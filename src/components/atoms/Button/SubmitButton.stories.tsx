import React from 'react'
import SubmitButton from './SubmitButton'

export default {
  title: 'Design System/atoms/Button/SubmitButton',
  decorators: [
    (Story) => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    ),
  ],
}

export const showEnabled = () => (
  <SubmitButton disabled={false} value={'送信ボタン'} />
)

export const showDisabled = () => (
  <SubmitButton disabled={true} value={'送信ボタン'} />
)

export const showDefault = () => <SubmitButton />
