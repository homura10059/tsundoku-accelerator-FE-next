import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { format } from 'date-fns'
import { WishList as WishListProps } from '@prisma/client'

export type Props = WishListProps

const Area = styled.a``
const Title = styled.p``
const UpdateAt = styled.p``

const WishList: React.FC<Props> = (wishList) => {
  const onClick = () =>
    Router.push('/wishList/[id]', `/wishList/${wishList.id}`)
  const scrapedAt = wishList.scrapedAt
    ? format(new Date(wishList.scrapedAt * 1000), 'yyyy/MM/dd HH:mm:ss')
    : '-'
  return (
    <>
      <Area onClick={onClick}>
        <Title>タイトル: {wishList.title}</Title>
        <UpdateAt>更新日時: {scrapedAt}</UpdateAt>
      </Area>
    </>
  )
}

export default WishList
