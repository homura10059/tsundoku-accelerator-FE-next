import React from 'react'

import Login from './Login'

export default {
  title: 'Design System/molecules/Button/Login',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const showButton = () => <Login />
