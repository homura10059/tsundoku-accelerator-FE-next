import React from 'react'
import Title from '../../atoms/Title/Title'
import CommandButton from '../../molecules/Button/CommandButton'
import classNames from 'classnames'

type Props = {
  title: string
  basePath: string
  command?: {
    canUpdate?: boolean
    canEdit?: boolean
    canDelete?: boolean
  }
}

const NodePage: React.FC<Props> = ({
  title,
  basePath,
  command = { canUpdate: false, canEdit: false, canDelete: false },
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
          {command.canUpdate && (
            <CommandButton command={'Update'} basePath={basePath} />
          )}
          {command.canEdit && (
            <CommandButton command={'Edit'} basePath={basePath} />
          )}
          {command.canDelete && (
            <CommandButton command={'Delete'} basePath={basePath} />
          )}
        </div>
      </div>
      <div className={classNames('mt-4', 'text-on-background')}>{children}</div>
    </div>
  )
}

export default NodePage
