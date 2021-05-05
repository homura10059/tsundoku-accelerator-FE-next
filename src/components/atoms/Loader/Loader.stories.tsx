import React from 'react'
import Loader from './Loader'

export default {
  title: 'Design System/atoms/Loader/Loader',
  decorators: [
    (Story) => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    ),
  ],
}

export const showLoader = () => (
  <Loader />
)

export const showLoaderWidth = () => (
  <Loader width={350} height={30}/>
)