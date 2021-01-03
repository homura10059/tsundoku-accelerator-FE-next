import type { GetServerSideProps } from 'next'
import React from 'react'
import * as UserService from '../../domain/service/user'
import Page from '../../components/Page/Page'
import styled from 'styled-components'

type Props = {
  user?: {
    id: string
    name: string
    wishLists: {
      id: string
      url: string
      scrapedAt: number | null
    }[]
  }
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const name = ctx.params.name
  if (typeof name !== 'string') {
    return {
      props: {},
    }
  }
  const user = await UserService.searchUser(name)
  return {
    props: {
      user,
    },
  }
}

const Title = styled.h1`
  font-size: 2.0rem;
  color: ${({ theme }) => theme.colors.primary};
`
const titleTxt = 'MyPage'

const User = (props: Props) => {
  if (!props.user) {
    return <p>no user</p>
  }
  const { id, name, wishLists } = props.user

  return (
    <Page title={titleTxt}>
      <Title>{titleTxt}</Title>
      <p>Id: {id}</p>
      <p>name: {name}</p>
      <table>
        <tr>
          <th>url</th>
          <th>scrapedAt</th>
        </tr>
        {wishLists.map((wishList) => (
          <>
            <tr>
              <td>
                <a href={wishList.url}>{wishList.url}</a>
              </td>
              <td>{wishList.scrapedAt}</td>
            </tr>
          </>
        ))}
      </table>
    </Page>
  )
}

export default User
