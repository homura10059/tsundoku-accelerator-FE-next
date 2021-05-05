import React from 'react'
import Refresh from './Refresh'

export default {
  title: 'Design System/molecules/Button/Refresh',
  decorators: [
    (Story) => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    ),
  ],
}

export const showButton = () => <Refresh basePath={'/'} />
