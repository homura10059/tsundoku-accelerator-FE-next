import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import TextButton from '../../atoms/Button/TextButton'
import LocalDate from '../../atoms/Date/LocalDate'
import ItemTable from '../Item/ItemTable'
import { IncomingWebhook } from '../../../lib/prisma'

export type ItemProps = {
  url: string
  title: string | null
  scrapedAt: number | null
  price: number | null
  discount: number | null
  discountRate: number | null
  points: number | null
  pointsRate: number | null
}

export type WishListProps = {
  id: string
  url: string
  title: string | null
  scrapedAt: number | null
  userId: number | null
  discountRateThreshold: number
  pointsRateThreshold: number
  items: ItemProps[]
  incomingWebhook: IncomingWebhook
}

export type Props = WishListProps & {
  userHasValidSession: boolean
}

const TopBar = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
const Title = styled.h1`
  font-size: 2rem;
`
const ButtonArea = styled.div`
  display: flex;
  margin-left: 1rem;
`
const ButtonWrapper = styled.div`
  &:not(:last-child) {
    margin-right: 0.2rem;
  }
`

const Text = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem;
`

const updateWishList = async (id: string): Promise<void> => {
  await fetch(`http://localhost:3000/api/wishLists/${id}`, {
    method: 'PUT',
  })
  location.reload()
}

const deleteWishList = async (id: string): Promise<void> => {
  await fetch(`http://localhost:3000/api/wishLists/${id}`, {
    method: 'DELETE',
  })
  Router.push('/')
}

const WishListDetail: React.FC<Props> = (props) => {
  return (
    <>
      <TopBar>
        <Title>WishList</Title>
        <ButtonArea>
          {props.userHasValidSession && (
            <ButtonWrapper>
              <TextButton
                onClick={() => updateWishList(props.id)}
                label="Update"
              />
            </ButtonWrapper>
          )}
          {props.userHasValidSession && (
            <ButtonWrapper>
              {' '}
              <TextButton
                onClick={() => deleteWishList(props.id)}
                label="Delete"
              />
            </ButtonWrapper>
          )}
        </ButtonArea>
      </TopBar>
      <Text>Id: {props.id}</Text>
      <Text>title: {props.title}</Text>
      <Text>
        url: <a href={props.url}>{props.url}</a>
      </Text>
      <Text>
        scrapedAt : <LocalDate unixTimeInSec={props.scrapedAt} />
      </Text>
      <Text>discountRateThreshold : {props.discountRateThreshold}</Text>
      <Text>pointsRateThreshold : {props.pointsRateThreshold}</Text>
      {props.incomingWebhook && (
        <Text>incomingWebhook : {props.incomingWebhook.service}</Text>
      )}
      <ItemTable items={props.items} />
    </>
  )
}

export default WishListDetail
