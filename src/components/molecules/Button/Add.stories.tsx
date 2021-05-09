import React from 'react'
import Add from './Add'

export default {
  title: 'Design System/molecules/Button/ActionIcon',
  decorators: [
    (Story) => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    ),
  ],
}

export const showButton = () => <Add basePath={'/'} />
