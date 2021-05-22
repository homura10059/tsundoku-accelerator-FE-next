import React from 'react'

import Title from './Title'

export default {
  title: 'Design System/atoms/Title',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const showTitle = () => <Title>仮タイトル Persona 5</Title>
