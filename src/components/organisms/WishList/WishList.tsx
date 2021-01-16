import React from 'react'
import Router from 'next/router'
import { WishList as WishListModel } from '../../../domain/model/WishList'
import styled from 'styled-components'
import { format } from 'date-fns'

export type Props = WishListModel

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.base};
  padding: 0.5rem;
`
const Area = styled.a``
const Title = styled.h1``

const WishList: React.FC<Props> = (wishList) => {
  const onClick = () =>
    Router.push('/wishList/[id]', `/wishList/${wishList.id}`)
  const scrapedAt =wishList.scrapedAt ? format(new Date(wishList.scrapedAt * 1000), 'yyyy/MM/dd HH:mm:ss') : '-'
  return (
    <Wrapper>
      <Area onClick={onClick}>
        <Title>Id: {wishList.id}</Title>
        <p>
          url: <a href={wishList.url}>{wishList.url}</a>
        </p>
        <p>scrapedAt: {scrapedAt}</p>
      </Area>
    </Wrapper>
  )
}

export default WishList
