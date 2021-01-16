import React, { useState } from 'react'
import Layout from '../../components/Page/Layout'
import Router from 'next/router'
import TextButton from '../../components/atoms/Button/TextButton'
import SubmitButton from '../../components/atoms/Button/SubmitButton'
import styled from 'styled-components'

const UrlArea = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  border: 0.125rem solid rgba(0, 0, 0, 0.2);
`

const Draft: React.FC = () => {
  const [url, setUrl] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { url }
      await fetch('/api/wishLists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>Add WishList</h1>
          <UrlArea
            autoFocus
            onChange={(e) => setUrl(e.target.value)}
            placeholder="url"
            type="text"
            value={url}
          />
          <SubmitButton disabled={!url} value="Add" />
          <TextButton
            label={'Cancel'}
            href={'#'}
            onClick={() => Router.push('/')}
          />
        </form>
      </div>
    </Layout>
  )
}

export default Draft
