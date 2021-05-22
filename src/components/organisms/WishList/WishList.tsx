import { WishList as WishListProps } from '@prisma/client'
import classNames from 'classnames'
import { format } from 'date-fns'
import React from 'react'

import LinkItem from '../../atoms/LinkItem/LinkItem'

export type Props = WishListProps

const WishList: React.FC<Props> = wishList => {
  const scrapedAt = wishList.scrapedAt
    ? format(new Date(wishList.scrapedAt * 1000), 'yyyy/MM/dd HH:mm:ss')
    : '-'
  return (
    <div className={classNames('bg-surface')}>
      <LinkItem href={`/wishList/${wishList.id}`}>
        <h1 className={classNames('text-2xl')}>{wishList.title}</h1>
        <p>更新日時: {scrapedAt}</p>
      </LinkItem>
    </div>
  )
}

export default WishList
