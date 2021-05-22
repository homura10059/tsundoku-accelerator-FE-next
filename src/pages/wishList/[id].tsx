import { GetServerSideProps } from 'next'

import { getWishList } from '@/domain/service/wishList'

import Detail from '../../components/templates/wishList/Detail'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = typeof params?.id === 'string' ? params?.id : ''
  const wishList = await getWishList(id)
  return {
    props: wishList
  }
}

export default Detail
