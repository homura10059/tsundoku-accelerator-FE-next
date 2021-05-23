import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

type Props = {
  disabled?: boolean
  value?: string
}

const Button = styled.input`
  background: #ececec;
  border: 0;
  padding: 5px 10px;
`

const SubmitButton: React.FC<Props> = ({
  disabled = false,
  value = 'submit'
}) => (
  <Button
    // className={classNames()}
    disabled={disabled}
    type="submit"
    value={value}
  />
)

export default SubmitButton
