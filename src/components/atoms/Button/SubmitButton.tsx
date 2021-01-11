import React from 'react'
import styled from 'styled-components'

type Props = {
  disabled?: boolean
  value?: string
}

const Button = styled.input`
  background: #ececec;
  border: 0;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
`

const SubmitButton: React.FC<Props> = ({ disabled, value }) => (
  <Button disabled={disabled} type="submit" value={value} />
)

export default SubmitButton
