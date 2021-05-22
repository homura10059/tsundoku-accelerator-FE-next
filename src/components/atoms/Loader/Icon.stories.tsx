import React from 'react'

import Icon from './Icon'

export default {
  title: 'Design System/atoms/Loader/Icon',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const showIcon = () => <Icon />

export const showIconWithClass = () => <Icon className={'w-20 h-20'} />
