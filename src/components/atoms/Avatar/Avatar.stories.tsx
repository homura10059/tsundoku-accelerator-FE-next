import React from 'react'
import Avatar from './Avatar'

export default {
  title: 'Design System/atoms/Avatar',
  decorators: [
    (Story) => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    ),
  ],
}

export const showAvatarFromImage = () => (
  <Avatar
    image={
      'https://raw.githubusercontent.com/o-hayato/sophia-bot/master/image/P5S_icon_sophia.png'
    }
    name={'sophia'}
  />
)

export const showAvatarBig = () => (
  <Avatar
    image={
      'https://raw.githubusercontent.com/o-hayato/sophia-bot/master/image/P5S_icon_sophia.png'
    }
    size={{ width: 36, height: 36 }}
    name={'sophia'}
  />
)

export const showAvatarInitial = () => <Avatar name={'sophia'} />

export const showAvatarInitialBlack = () => (
  <Avatar name={'sophia'} color={'black'} />
)
