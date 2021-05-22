import React from 'react'

import ActionIcon from './ActionIcon'

export default {
  title: 'Design System/atoms/Button/ActionIcon',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

const dummyOnClick = async () => {}

export const showDisabled = () => (
  <ActionIcon onClick={dummyOnClick} disabled={true}>
    Button
  </ActionIcon>
)

export const showDisabledWithSize = () => (
  <ActionIcon
    onClick={dummyOnClick}
    disabled={true}
    iconClassName={'w-10 h-10'}
  >
    Button
  </ActionIcon>
)

export const showEnabled = () => (
  <ActionIcon onClick={dummyOnClick} disabled={false}>
    Button
  </ActionIcon>
)
