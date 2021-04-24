import React from 'react'
import { format } from 'date-fns'

type Props = {
  unixTimeInSec: number | null
}

const LocalDate: React.FC<Props> = ({ unixTimeInSec }) => {
  const localDate = unixTimeInSec
    ? format(new Date(unixTimeInSec * 1000), 'yyyy/MM/dd HH:mm:ss')
    : '-'
  return <span>{localDate}</span>
}

export default LocalDate
