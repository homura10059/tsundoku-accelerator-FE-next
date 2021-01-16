import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../../components/Page/Layout'
import Router from 'next/router'
import { Props as WishListProps } from '../../components/organisms/WishList/WishList'
import { useSession } from 'next-auth/client'
import { getWishList } from '../../domain/service/wishList'
import styled from 'styled-components'
import { format } from 'date-fns'
import TextButton from '../../components/atoms/Button/TextButton'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = typeof params?.id === 'string' ? params?.id : ''
  const wishList = await getWishList(id)
  return {
    props: wishList,
  }
}

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

const Wrapper = styled.article`
  padding: 0.5rem;
`
const Title = styled.h1``

const WishList: React.FC<WishListProps> = (props) => {
  const [session, loading] = useSession()
  if (loading) {
    return <div>Authenticating ...</div>
  }
  const userHasValidSession = Boolean(session)

  const scrapedAt = props.scrapedAt
    ? format(new Date(props.scrapedAt * 1000), 'yyyy/MM/dd HH:mm:ss')
    : '-'
  return (
    <Layout>
      <Wrapper>
        <Title>Id: {props.id}</Title>
        <p>
          url: <a href={props.url}>{props.url}</a>
        </p>
        <p>scrapedAt: {scrapedAt}</p>
        {userHasValidSession && (
          <TextButton onClick={() => updateWishList(props.id)} label="Update" />
        )}
        {userHasValidSession && (
          <TextButton onClick={() => deleteWishList(props.id)} label="Delete" />
        )}
      </Wrapper>
    </Layout>
  )
}

export default WishList
