import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { WishList as WishListProps } from '@prisma/client'
import LinkItem from '../../atoms/LinkItem/LinkItem'

export type Props = WishListProps

const Area = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
`
const Title = styled.h1`
  font-size: 2rem;
`
const UpdateAt = styled.p``

const WishList: React.FC<Props> = (wishList) => {
  const scrapedAt = wishList.scrapedAt
    ? format(new Date(wishList.scrapedAt * 1000), 'yyyy/MM/dd HH:mm:ss')
    : '-'
  return (
    <>
      <Area>
        <LinkItem href={`/wishList/${wishList.id}`}>
          <Title>{wishList.title}</Title>
          <UpdateAt>更新日時: {scrapedAt}</UpdateAt>
        </LinkItem>
      </Area>
    </>
  )
}

export default WishList
