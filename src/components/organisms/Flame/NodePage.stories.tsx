import React from 'react'
import NodePage from './NodePage'

export default {
  title: 'Design System/organisms/Flame/NodePage',
  decorators: [
    (Story) => (
      <div className={'bg-background w-full p-2'}>
        <Story />
      </div>
    ),
  ],
}

export const showAllButton = () => (
  <NodePage
    title={'ダミータイトル'}
    basePath={`/`}
    command={{
      canRefresh: true,
      canEdit: true,
      canDelete: true,
    }}
  >
    ダミーダミー
  </NodePage>
)

export const showRefreshButton = () => (
  <NodePage
    title={'ダミータイトル'}
    basePath={`/`}
    command={{
      canRefresh: true,
    }}
  >
    ダミーダミー
  </NodePage>
)

export const showEditButton = () => (
  <NodePage title={'ダミータイトル'} basePath={`/`} command={{ canEdit: true }}>
    ダミーダミー
  </NodePage>
)

export const showDeleteButton = () => (
  <NodePage
    title={'ダミータイトル'}
    basePath={`/`}
    command={{ canDelete: true }}
  >
    ダミーダミー
  </NodePage>
)
