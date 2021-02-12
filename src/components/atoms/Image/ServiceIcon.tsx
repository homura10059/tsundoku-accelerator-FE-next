import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

type Props = {}

const Wrapper = styled.a`
  min-width: 40px;
`

const ServiceIcon: React.FC<Props> = ({}) => (
  <Link href={'/'}>
    <Wrapper>
      <Image
        src="/tsundoku_icon.svg"
        alt="Service Icon"
        width={40}
        height={40}
      />
    </Wrapper>
  </Link>
)

export default ServiceIcon
