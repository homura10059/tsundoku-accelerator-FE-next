import React from 'react'

import ListPage from './ListPage'

export default {
  title: 'Design System/organisms/Flame/ListPage',
  decorators: [
    Story => (
      <div className={'bg-background w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const showListPage = () => (
  <ListPage title={'ダミータイトル'} basePath={`/`}>
    ダミーダミー
  </ListPage>
)
