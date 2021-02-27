import React from 'react'
import styled from 'styled-components'
import ListPage from '../ListPage'
import { WishList as WishListProps } from '@prisma/client'
import WishList from '../../organisms/WishList/WishList'


type Props = {
  wishLists: WishListProps[]
}

const List = styled.ul`
  li + li {
    margin-top: 5px;
  }
`

const WishLists: React.FC<Props> = ({ wishLists }) => {
  return (
    <ListPage title="WishLists" basePath="wishList">
      <List>
        {wishLists.map((wishList) => (
          <li key={wishList.id}>
            <WishList {...wishList} />
          </li>
        ))}
      </List>
    </ListPage>
  )
}

export default WishLists
