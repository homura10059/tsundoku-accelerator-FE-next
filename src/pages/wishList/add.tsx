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
  const [url, setUrl] = useState('')
  const [discountRateThreshold, setDiscountRateThreshold] = useState(0)
  const [pointsRateThreshold, setPointsRateThreshold] = useState(0)

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { url, discountRateThreshold, pointsRateThreshold }
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
          url :
          <TextArea
            autoFocus
            onChange={(e) => setUrl(e.target.value)}
            placeholder="url"
            type="url"
            value={url}
          />
          閾値(割引率):
          <TextArea
            onChange={(e) => setDiscountRateThreshold(e.target.valueAsNumber)}
            placeholder="0"
            type="number"
            value={discountRateThreshold}
          />
          閾値(ポイト還元率率):
          <TextArea
            onChange={(e) => setPointsRateThreshold(e.target.valueAsNumber)}
            placeholder="0"
            type="number"
            value={pointsRateThreshold}
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
