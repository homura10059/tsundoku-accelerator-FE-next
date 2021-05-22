import { Session } from 'next-auth/client'
import React from 'react'

import { User } from './User'

export default {
  title: 'Design System/organisms/User',
  decorators: [
    Story => (
      <div className={'bg-green-300 w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const showUserInLoading = () => (
  <User session={undefined} loading={true} />
)

export const showUserNotLoggedIn = () => (
  <User session={undefined} loading={false} />
)

const mockSession: Session = {
  expires: '1',
  user: {
    email: 'a',
    name: 'sophia',
    image:
      'https://raw.githubusercontent.com/o-hayato/sophia-bot/master/image/P5S_icon_sophia.png'
  }
}
export const showUserLoggedIn = () => (
  <User session={mockSession} loading={false} />
)
