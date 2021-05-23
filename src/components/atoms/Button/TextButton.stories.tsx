import React from 'react'

import TextButton from './TextButton'

export default {
  title: 'Design System/atoms/Button/TextButton',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const textButton = () => <TextButton>test</TextButton>
