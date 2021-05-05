import React from 'react'
import CommandButton from './CommandButton'

export default {
  title: 'Design System/molecules/CommandButton',
  decorators: [
    (Story) => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    ),
  ],
}

export const showUpdateButton = () => (
  <CommandButton command={'Update'} basePath={'/'} />
)

export const showDeleteButton = () => (
  <CommandButton command={'Delete'} basePath={'/'} />
)
