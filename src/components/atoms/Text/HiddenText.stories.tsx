import React from 'react'

import HiddenText from './HiddenText'

export default {
  title: 'Design System/atoms/Text/HiddenText',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const showHiddenText = () => <HiddenText text={'aaaaaaaaaaaaaaaaaaa'} />
