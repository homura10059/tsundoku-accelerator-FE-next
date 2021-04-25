import React, { useMemo } from 'react'
import styled from 'styled-components'
import ListPage from '../../organisms/Flame/ListPage'
import { WishList as WishListProps } from '@prisma/client'
import WishList from '../../organisms/WishList/WishList'

type Props = {
  wishLists: WishListProps[]
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: 990px) {
    flex-direction: row;
  }
`

const ListItem = styled.li`
  margin: 1px;
  width: calc(100% - 2px);
  @media screen and (min-width: 990px) {
    width: calc(50% - 2px);
  }
`

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
      <List>
        {lists.map((wishList) => (
          <ListItem key={wishList.id}>
            <WishList {...wishList} />
          </ListItem>
        ))}
      </List>
    </ListPage>
  )
}

export default WishLists
