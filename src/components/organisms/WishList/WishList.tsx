import React from 'react'
import Router from 'next/router'
import { WishList as WishListModel } from '../../../domain/model/WishList'
import styled from 'styled-components'

export type Props = WishListModel

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.base};
`
const Box = styled.a``
const Title = styled.h1``

const WishList: React.FC<Props> = (wishList) => {
  const onClick = () => Router.push('/p/[id]', `/p/${wishList.id}`)
  return (
    <Wrapper>
      <Box onClick={onClick}>
        <Title>{wishList.url}</Title>
        <p>{wishList.scrapedAt}</p>
      </Box>
    </Wrapper>
  )
}

export default WishList
