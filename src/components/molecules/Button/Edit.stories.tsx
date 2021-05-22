import React from 'react'

import Edit from './Edit'

export default {
  title: 'Design System/molecules/Button/Edit',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const showButton = () => <Edit basePath={'/'} />
