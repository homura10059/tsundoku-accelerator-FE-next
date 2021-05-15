import React from 'react'
import Title from '../../atoms/Title/Title'
import classNames from 'classnames'
import Add from '@/components/molecules/Button/Add'

type Props = {
  title: string
  basePath: string
  children: React.ReactNode
}

const ListPage: React.VFC<Props> = ({ title, basePath, children }) => {
  return (
    <div className={'p-1'}>
      <div className={classNames('flex', 'flex-wrap', 'items-center', 'space-x-4' )}>
        <Title>{title}</Title>
        <Add basePath={basePath} />
      </div>
      <div className={classNames('mt-4', 'text-on-background')}>{children}</div>
    </div>
  )
}

export default ListPage
