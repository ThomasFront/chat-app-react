import React from 'react'
import { Container, Wrapper } from './Layout.styles'
import { Navbar } from '../Navbar/Navbar'
import { NavMobile } from '../NavMobile/NavMobile'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}
