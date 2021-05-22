import classNames from 'classnames'
import React from 'react'

import Delete from '@/components/molecules/Button/Delete'
import Edit from '@/components/molecules/Button/Edit'
import Refresh from '@/components/molecules/Button/Refresh'

import Title from '../../atoms/Title/Title'

type Props = {
  title: string
  basePath: string
  command?: {
    canRefresh?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }
}

const NodePage: React.FC<Props> = ({
  title,
  basePath,
  command = {
    canRefresh: false,
    canEdit: false,
    canDelete: false
  },
  children
}) => {
  return (
    <div className={'p-1'}>
      <div
        className={classNames('flex', 'flex-wrap', 'items-center', 'space-x-4')}
      >
        <Title>{title}</Title>
        <div className={classNames('flex', 'space-x-2')}>
          {command.canRefresh && <Refresh basePath={basePath} />}
          {command.canEdit && <Edit basePath={basePath} />}
          {command.canDelete && <Delete basePath={basePath} />}
        </div>
      </div>
      <div className={classNames('mt-4', 'text-on-background')}>{children}</div>
    </div>
  )
}

export default NodePage
