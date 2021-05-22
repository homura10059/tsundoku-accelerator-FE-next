import React from 'react'

import Hover from './Hover'

export default {
  title: 'Design System/atoms/Hover',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const show = () => <Hover>aaa</Hover>
