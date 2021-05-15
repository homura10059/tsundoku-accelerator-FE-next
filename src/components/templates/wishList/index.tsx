import React, { useMemo } from 'react'
import ListPage from '../../organisms/Flame/ListPage'
import { WishList as WishListProps } from '@prisma/client'
import WishList from '../../organisms/WishList/WishList'
import classNames from 'classnames'

type Props = {
  wishLists: WishListProps[]
}

const WishLists: React.FC<Props> = ({ wishLists }) => {
  const lists = useMemo(
    () =>
      wishLists.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      }),
    [wishLists]
  )
  return (
    <ListPage title="WishLists" basePath="wishList">
      <ul className={classNames('flex', 'flex-wrap')}>
        {lists.map((wishList) => (
          <li key={wishList.id} className={classNames('w-full', 'p-1', 'lg:w-1/2')}>
            <WishList {...wishList} />
          </li>
        ))}
      </ul>
    </ListPage>
  )
}

export default WishLists
