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
    command={{ canUpdate: true, canEdit: true, canDelete: true }}
  >
    ダミーダミー
  </NodePage>
)

export const showUpdateButton = () => (
  <NodePage
    title={'ダミータイトル'}
    basePath={`/`}
    command={{ canUpdate: true, canEdit: false, canDelete: false }}
  >
    ダミーダミー
  </NodePage>
)

export const showEditButton = () => (
  <NodePage
    title={'ダミータイトル'}
    basePath={`/`}
    command={{ canUpdate: false, canEdit: true, canDelete: false }}
  >
    ダミーダミー
  </NodePage>
)

export const showDeleteButton = () => (
  <NodePage
    title={'ダミータイトル'}
    basePath={`/`}
    command={{ canUpdate: false, canEdit: false, canDelete: true }}
  >
    ダミーダミー
  </NodePage>
)
