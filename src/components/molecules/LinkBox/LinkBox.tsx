import React from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box/Box'
import Link from 'next/link'

type Props = {
  href: string
}

const Wrapper = styled.a`
  text-decoration: none;
`

const Inner = styled.div`
  margin: 0.2rem;
`

const LinkBox: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <Wrapper>
        <Box canHover={true}>
          <Inner>{children}</Inner>
        </Box>
      </Wrapper>
    </Link>
  )
}

export default LinkBox
