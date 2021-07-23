import React from 'react'

import Profile from './profile'

export default {
  title: 'Design System/templates/user/profile',
  decorators: [
    Story => (
      <div className={'bg-background w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const show = () => <Profile />
