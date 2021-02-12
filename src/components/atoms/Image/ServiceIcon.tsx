import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {}

const ServiceIcon: React.FC<Props> = ({}) => (
  <Link href={'/'}>
    <a>
      <Image
        src="/tsundoku_icon.svg"
        alt="Service Icon"
        width={40}
        height={40}
      />
    </a>
  </Link>
)

export default ServiceIcon
