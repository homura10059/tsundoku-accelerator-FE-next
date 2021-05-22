import React from 'react'

import Delete from './Delete'

export default {
  title: 'Design System/molecules/Button/Delete',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const showButton = () => <Delete basePath={'/'} />
