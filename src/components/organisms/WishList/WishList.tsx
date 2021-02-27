import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { format } from 'date-fns'
import { WishList as WishListProps } from '@prisma/client'
import Title from '../../atoms/Title/Title'
import Link from 'next/link'

export type Props = WishListProps

const Area = styled.a`
  display: block;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.on.surface};
  padding: 0.5rem;
`
const UpdateAt = styled.p``

const WishList: React.FC<Props> = (wishList) => {
  const scrapedAt = wishList.scrapedAt
    ? format(new Date(wishList.scrapedAt * 1000), 'yyyy/MM/dd HH:mm:ss')
    : '-'
  return (
    <>
      <Link href={`/wishList/${wishList.id}`} passHref>
        <Area>
          <Title>{wishList.title}</Title>
          <UpdateAt>更新日時: {scrapedAt}</UpdateAt>
        </Area>
      </Link>
    </>
  )
}

export default WishList
