import React, { useState } from 'react'
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

const Notification: React.FC = () => {
  const [url, setUrl] = useState('')
  const [channel, setChannel] = useState('')
  const [service, setService] = useState('DISCORD')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { url, channel, service }
      await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/notification')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={submitData}>
        <h1>Add IncomingWebhook</h1>
        <div>
          url :
          <TextArea
            autoFocus
            onChange={(e) => setUrl(e.target.value)}
            placeholder="url"
            type="url"
            value={url}
          />
          channel :
          <TextArea
            onChange={(e) => setChannel(e.target.value)}
            placeholder="channel"
            type="text"
            value={channel}
          />
          service :
          <select name="service" onChange={(e) => setService(e.target.value)}>
            <option value="DISCORD">Discord</option>
          </select>
        </div>
        <SubmitButton disabled={!url && !channel && !service} value="Add" />
        <TextButton
          label={'Cancel'}
          href={'#'}
          onClick={() => Router.push('/')}
        />
      </form>
    </div>
  )
}

export default Notification
