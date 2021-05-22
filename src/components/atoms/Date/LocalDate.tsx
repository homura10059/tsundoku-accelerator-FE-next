import { format } from 'date-fns'
import React from 'react'

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
