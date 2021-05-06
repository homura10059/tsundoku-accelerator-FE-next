import React from 'react'
import LinkButton from '../../atoms/LinkButton/LinkButton'
import Title from '../../atoms/Title/Title'
import classNames from 'classnames'

type Props = {
  title: string
  basePath: string
  children: React.ReactNode
}

const ListPage: React.VFC<Props> = ({ title, basePath, children }) => {
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
        <LinkButton href={`/${basePath}/add`}>Add</LinkButton>
      </div>
      <div className={classNames('mt-4', 'text-on-background')}>{children}</div>
    </div>
  )
}

export default ListPage
