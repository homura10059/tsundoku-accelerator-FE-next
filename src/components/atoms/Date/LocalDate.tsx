import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

type Props = {
  unixTimeInSec: number | null
}

const DateString = styled.span``

const LocalDate: React.FC<Props> = ({ unixTimeInSec }) => {
  const localDate = unixTimeInSec
    ? format(new Date(unixTimeInSec * 1000), 'yyyy/MM/dd HH:mm:ss')
    : '-'
  return <DateString>{localDate}</DateString>
}

export default LocalDate
