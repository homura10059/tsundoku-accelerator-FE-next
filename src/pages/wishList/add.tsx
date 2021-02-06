import React, { useState } from 'react'
import Layout from '../../components/Page/Layout'
import Router from 'next/router'
import TextButton from '../../components/atoms/Button/TextButton'
import SubmitButton from '../../components/atoms/Button/SubmitButton'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

const FromArea = styled.div`
  margin-top: 0.5rem;
  * + * {
    margin-top: 0.5rem;
  }
`

const TextArea = styled.input`
  border-radius: 0.25rem;
  border: 0.125rem solid rgba(0, 0, 0, 0.2);
`

type FormInputs = {
  url: string
  discountRateThreshold: number
  pointsRateThreshold: number
}

const Draft: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>()
  const { isDirty, isValid } = formState

  const onSubmit = async (data, e) => {
    console.log(data, e)
    e.preventDefault()
    try {
      await fetch('/api/wishLists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  const onError = (errors, e) => console.log(errors, e)

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <h1>Add WishList</h1>
          <FromArea>
            <div>
              url :
              <TextArea
                name="url"
                ref={register({ required: true })}
                type="url"
                autoFocus
                placeholder="url"
              />
            </div>
            <div>
              閾値(割引率):
              <TextArea
                name="discountRateThreshold"
                ref={register({ valueAsNumber: true })}
                type="number"
                autoFocus
                placeholder="0"
              />
            </div>
            <div>
              閾値(ポイト還元率率):
              <TextArea
                name="pointsRateThreshold"
                ref={register({ valueAsNumber: true })}
                type="number"
                autoFocus
                placeholder="0"
              />
            </div>
          </FromArea>
          <SubmitButton disabled={isDirty || isValid} value="Add" />
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
