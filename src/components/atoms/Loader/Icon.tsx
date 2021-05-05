import React from 'react'
import Image from 'next/image'

type Props = {
  className?: string
}

const Icon: React.FC<Props> = ({ className }) => {
  return (
    <Image
      className={className}
      src="/loader/oval.svg"
      alt="loading..."
      width={500}
      height={500}
    />
  )
}

export default Icon
