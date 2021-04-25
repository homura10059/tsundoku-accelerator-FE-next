import React from 'react'
import SideBar from './SideBar'

export default {
  title: 'Design System/organisms/SideBar',
  decorators: [
    (Story) => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    ),
  ],
}

export const show = () => <SideBar />
