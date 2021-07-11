import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

import Home from '@/components/templates/home/index'
import { getItemsByUserId } from '@/domain/service/item'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  const items = await getItemsByUserId(session.user.email)
  return { props: { items } }
}

export default Home
