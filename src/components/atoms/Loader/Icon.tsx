import Image from 'next/image'
import React from 'react'

type Props = {
  className?: string
  size?: {
    width: number
    height: number
  }
}

const Icon: React.FC<Props> = ({
  className,
  size = { width: 20, height: 20 }
}) => {
  return (
    <Image
      className={className}
      src="/loader/oval.svg"
      alt="loading..."
      width={size.width}
      height={size.height}
    />
  )
}

export default Icon
