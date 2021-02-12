import React from 'react'
import Router from 'next/router'
import TextButton from '../../components/atoms/Button/TextButton'
import SubmitButton from '../../components/atoms/Button/SubmitButton'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { getIncomingWebhooksByUserId } from '../../domain/service/incomingWebhook'
import { IncomingWebhook } from '../../lib/prisma'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  const incomingWebhooks = !session
    ? []
    : await getIncomingWebhooksByUserId(session.user.id)
  return { props: { incomingWebhooks } }
}

type Props = {
  incomingWebhooks: IncomingWebhook[]
}

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
  incomingWebhookId: string
}

const Draft: React.FC<Props> = (props) => {
  const {
    register,
    errors,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormInputs>({
    mode: 'onBlur',
  })

  const onSubmit = async (data, e) => {
    e.preventDefault()
    try {
      await fetch('/api/wishList', {
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
            />
          </div>
          {errors.url && <p>{errors.url.message}</p>}
          <div>
            閾値(割引率):
            <TextArea
              name="discountRateThreshold"
              ref={register({ valueAsNumber: true })}
              type="number"
              placeholder="20"
            />
          </div>
          {errors.discountRateThreshold && (
            <p>{errors.discountRateThreshold.message}</p>
          )}
          <div>
            閾値(ポイト還元率率):
            <TextArea
              name="pointsRateThreshold"
              ref={register({ valueAsNumber: true })}
              type="number"
              placeholder="20"
            />
          </div>
          {errors.pointsRateThreshold && (
            <p>{errors.pointsRateThreshold.message}</p>
          )}
          <div>
            incomingWebhook:
            <select name="incomingWebhookId" ref={register}>
              <option value={undefined} key={1}>
                {' '}
              </option>
              {props.incomingWebhooks.map((hook) => {
                return (
                  <option value={hook.id} key={hook.id}>
                    {hook.service}: {hook.id}
                  </option>
                )
              })}
            </select>
          </div>
          {errors.incomingWebhookId && (
            <p>{errors.incomingWebhookId.message}</p>
          )}
        </FromArea>
        <SubmitButton disabled={!isValid} value="Add" />
        <TextButton
          label={'Cancel'}
          href={'#'}
          onClick={() => Router.push('/')}
        />
      </form>
    </div>
  )
}

export default Draft
