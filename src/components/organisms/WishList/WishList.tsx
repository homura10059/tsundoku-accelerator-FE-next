import { WishList as WishListProps } from '@prisma/client'
import classNames from 'classnames'
import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'

import Hover from '@/components/atoms/Hover/Hover'

export type Props = WishListProps

const WishList: React.FC<Props> = wishList => {
  const scrapedAt = wishList.scrapedAt
    ? format(new Date(wishList.scrapedAt * 1000), 'yyyy/MM/dd HH:mm:ss')
    : '-'
  return (
    <div className={classNames('bg-surface')}>
      <Hover>
        <Link href={`/wishList/${wishList.id}`}>
          <a>
            <h1 className={classNames('text-2xl')}>{wishList.title}</h1>
            <p>更新日時: {scrapedAt}</p>
          </a>
        </Link>
      </Hover>
    </div>
  )
}

export default WishList
