import React from 'react'
import styled from 'styled-components'
import Tab from '../../atoms/Tab/Tab'

type Props = {
  session: boolean
  loading: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Tabs: React.FC<Props> = ({ session, loading }) => {
  if (session && !loading) {
    return (
      <Wrapper>
        <Tab href={'/'}>Feed</Tab>
        <Tab href={'/drafts'}>MyDrafts</Tab>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Tab href={'/'}>Feed</Tab>
    </Wrapper>
  )
}

export default Tabs
