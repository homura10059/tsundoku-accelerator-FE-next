import React from 'react'

import Add from './Add'

export default {
  title: 'Design System/templates/notification/Add',
  decorators: [
    Story => (
      <div className={'bg-background w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const show = () => <Add />
