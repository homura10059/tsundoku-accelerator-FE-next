import React from 'react'
import styled from 'styled-components'
import ListPage from '../ListPage'
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
    width: 50%;
  }
`

const WishLists: React.FC<Props> = ({ wishLists }) => {
  return (
    <ListPage title="WishLists" basePath="wishList">
      <List>
        {wishLists.map((wishList) => (
          <ListItem key={wishList.id}>
            <WishList {...wishList} />
          </ListItem>
        ))}
      </List>
    </ListPage>
  )
}

export default WishLists
