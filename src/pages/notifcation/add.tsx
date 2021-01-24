import React, { useState } from 'react'
import Layout from '../../components/Page/Layout'
import Router from 'next/router'
import TextButton from '../../components/atoms/Button/TextButton'
import SubmitButton from '../../components/atoms/Button/SubmitButton'
import styled from 'styled-components'

const TextArea = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  border: 0.125rem solid rgba(0, 0, 0, 0.2);
`

const Draft: React.FC = () => {
  const [incomingWebhookUrl, setIncomingWebhookUrl] = useState('')
  const [channel, setChannel] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { incomingWebhookUrl, channel }
      await fetch('/api/notifications', {
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
          incomingWebhookUrl :
          <TextArea
            autoFocus
            onChange={(e) => setIncomingWebhookUrl(e.target.value)}
            placeholder="incomingWebhookUrl"
            type="text"
            value={incomingWebhookUrl}
          />
          channel :
          <TextArea
            onChange={(e) => setChannel(e.target.value)}
            placeholder="channel"
            type="text"
            value={channel}
          />
          <SubmitButton disabled={!incomingWebhookUrl && !channel} value="Add" />
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
