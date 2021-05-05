import React from 'react'
import Title from '../../atoms/Title/Title'
import CommandButton from '../../molecules/Button/CommandButton'
import classNames from 'classnames'
import Refresh from '@/components/molecules/Button/Refresh'
import Delete from '@/components/molecules/Button/Delete'

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
    canDelete: false,
  },
  children,
}) => {
  return (
    <div className={'p-1'}>
      <div
        className={classNames(
          'flex',
          'flex-wrap',
          'items-center',
          'lg:space-x-4' // PCの時だけmarginをつける
        )}
      >
        <Title>{title}</Title>
        <div className={classNames('flex', 'space-x-2')}>
          {command.canRefresh && <Refresh basePath={basePath} />}
          {command.canEdit && (
            <CommandButton command={'Edit'} basePath={basePath} />
          )}
          {command.canDelete && <Delete basePath={basePath} />}
        </div>
      </div>
      <div className={classNames('mt-4', 'text-on-background')}>{children}</div>
    </div>
  )
}

export default NodePage
